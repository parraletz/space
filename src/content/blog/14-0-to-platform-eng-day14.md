---
title: 'Day 14: Securing Kubernetes – Runtime Security and Policy Enforcement'
excerpt: 'Welcome to Day 14 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’ll focus on securing Kubernetes clusters, covering runtime security and policy enforcement to ensure your applications and infrastructure are protected from vulnerabilities and misconfigurations.'

publishDate: Jan 28 2025
tags:
  - 'Platform Engineering'
  - Devops
  - 'Cloud Native'
  - SRE
  - kubernetes
  - terraform
  - IaC
  - gitops
  - argocd
  - devsecops
  - security
  - opa
  - falco
seo:
  image:
    src: '/post-12.webp'

isFeatured: true
---

Welcome to Day 14 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’ll focus on securing Kubernetes clusters, covering runtime security and policy enforcement to ensure your applications and infrastructure are protected from vulnerabilities and misconfigurations.


## Why Kubernetes Security Matters?

Kubernetes security is critical to:

* Prevent unauthorized access to sensitive data and applications.
* Detect and respond to runtime threats.
* Ensure compliance with security and governance policies.

🎯 Key Security Concepts:

* **Runtime Security**: Detect and respond to suspicious behavior in running workloads.
* **Policy Enforcement**: Apply guardrails to prevent risky configurations.

### What Are Falco and OPA?

Falco

* Purpose: Runtime security monitoring.
* How It Works: Detects unexpected behavior (e.g., file changes, unauthorized process execution) in Kubernetes clusters.
* Key Features:
- Monitors workloads in real-time.
- Generates alerts for anomalous behavior.

Open Policy Agent (OPA):

* Purpose: Policy enforcement.
* How It Works: Uses policies written in Rego to evaluate requests and enforce rules in Kubernetes.
* Key Features:
- Applies guardrails for configurations (e.g., restricting resource requests/limits).
- Ensures compliance with security policies.

## Hands-On: Securing Kubernetes

### Step 1: Install Falco

1.	Add the Helm repository for Falco:

```bash
helm repo add falcosecurity https://falcosecurity.github.io/charts
helm repo update
```

2.		Install Falco in your cluster:

```bash
helm install falco falcosecurity/falco --namespace falco --create-namespace
```

3 . Verify that Falco is installed:

```bash
kubectl get pods -n falco
```

4 . View Falco alerts:

```bash
kubectl logs -l app=falco -n falco
```

### Step 2: Configure OPA for Policy Enforcement

1. Add the Gatekeeper Helm chart (OPA Kubernetes extension):

```bash
helm repo add gatekeeper https://open-policy-agent.github.io/gatekeeper/charts
helm repo update
```

2.	Install Gatekeeper in your cluster:

```bash 
helm install gatekeeper gatekeeper/gatekeeper --namespace gatekeeper-system --create-namespace
```

3. Create a sample policy to enforce resource limits:

```yaml
apiVersion: templates.gatekeeper.sh/v1
kind: ConstraintTemplate
metadata:
  name: k8sresourcelimits
spec:
  crd:
    spec:
      names:
        kind: K8sResourceLimits
  targets:
  - target: admission.k8s.gatekeeper.sh
    rego: |
      package k8sresourcelimits
      deny[msg] {
        input.review.object.spec.containers[_].resources.limits.cpu == ""
        msg := "CPU limits must be set"
      }
```

4 . Apply the policy:

```bash
kubectl apply -f policy.yaml
```

5. Test the policy by deploying a Pod without CPU limits and observing the denial.

### Step 3: Monitor and Respond to Security Incidents

1.	Simulate a runtime security event (e.g., modifying a critical file inside a container) and observe Falco alerts.
2. Test policy enforcement with OPA by deploying a misconfigured resource and viewing the rejection.

##  Activity for Today

1.	Install Falco and configure runtime security monitoring.
2.	Set up OPA/Gatekeeper to enforce a policy for Kubernetes configurations.
3.	Simulate a runtime threat and test policy violations to observe how your security systems respond.


## What’s Next?

Now that you’ve secured your Kubernetes clusters, tomorrow we’ll explore automating Kubernetes workflows with tools like Kustomize and Skaffold.


*Get ready to level up your platform engineering skills! 🚀*


👉 Check it out here: [Zero to Platform Engineer Repository](https://github.com/parraletz/zero-to-platform-engineer)

Feel free to clone the repo, experiment with the code, and even contribute if you'd like! 🚀


## Follow the Series!

🎉 Don't miss a single step in your journey to becoming a Platform Engineer! 🎉

This post is just the beginning. Here's what we've covered so far and what's coming up next:

* [Day 0: Introduction - What’s Platform Engineering?](https://parraletz.space/blog/00-0-to-platform-eng-intro/)
* [Day 1: Introduction to the CNCF Landscape](https://parraletz.space/blog/01-0-to-platform-eng-day1/)
* [Day 2: Day 2: Containers and Docker - The Building Blocks of Cloud Native](https://parraletz.space/blog/02-0-to-platform-eng-day2/)
* [Day 3: Containers and Kubernetes - The Building Blocks of Cloud Native](https://parraletz.space/blog/03-0-to-platform-eng-day3/)
* [Day 4: Deployments and Scaling in Kubernetes - Let's Get Practical](https://parraletz.space/blog/03-0-to-platform-eng-day3/)
* [Day 5: Kubernetes Services – Connecting Your Applications](https://parraletz.space/blog/05-0-to-platform-eng-day5/)
* [Day 6: ConfigMaps and Secrets – Managing Configurations in Kubernetes](https://parraletz.space/blog/06-0-to-platform-eng-day6/)
* [Day 7: Recap and Hands-On Challenges for Week 1](https://parraletz.space/blog/07-0-to-platform-eng-day7/)
* [Day 8: Introduction to Infrastructure as Code (IaC)](https://parraletz.space/blog/08-0-to-platform-eng-day8/)
* [Day 9: Advanced Terraform – Managing Kubernetes Resources](https://parraletz.space/blog/09-0-to-platform-eng-day9/)
* [Day 10: Managing Kubernetes with Helm and Terraform](https://parraletz.space/blog/10-0-to-platform-eng-day10/)
* [Day 11: Introduction to GitOps with ArgoCD](https://parraletz.space/blog/11-0-to-platform-eng-day11/)

 
👉 Bookmark this blog and check back every day for new posts in the series.
📣 Share your progress on social media with the hashtag #ZeroToPlatformEngineer to connect with other readers!
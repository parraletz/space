---
title: 'Day 26: Securing Your Platform with OPA and Trivy'
excerpt: 'Welcome to Day 26 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’ll focus on securing Kubernetes platforms using Open Policy Agent (OPA) for policy enforcement and Trivy for vulnerability scanning..'

publishDate: Feb 10 2025
tags:
  - 'Platform Engineering'
  - Devops
  - 'Cloud Native'  
  - SRE
  - backstage
seo:
  image:
    src: '/post-22.webp'

isFeatured: true
---

Welcome to Day 26 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’ll focus on securing Kubernetes platforms using Open Policy Agent (OPA) for policy enforcement and Trivy for vulnerability scanning.



## Why Is Security Critical in Kubernetes?

Cloud-native platforms must be secure by design to:

* Prevent misconfigurations that lead to security breaches.
* Enforce governance through automated policies.
* Detect vulnerabilities in container images before deployment.

📌 OPA and Trivy are two essential tools for Kubernetes security.

### Policy Enforcement with Open Policy Agent (OPA)

* OPA (Open Policy Agent) is a policy engine that enforces security rules in Kubernetes.
* Helps define access controls, pod security policies, and compliance rules.
* Works with Gatekeeper, an admission controller for Kubernetes.

### Step 1: Install OPA Gatekeeper

```bash
kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper/master/deploy/gatekeeper.yaml
```

### Step 2: Define a Policy to Block Privileged Containers

```yaml
apiVersion: constraints.gatekeeper.sh/v1beta1
kind: K8sPSPPrivilegedContainer
metadata:
  name: disallow-privileged-containers
spec:
  match:
    kinds:
      - apiGroups: [""]
        kinds: ["Pod"]
```

### Step 3: Apply the Policy

```bash
kubectl apply -f disallow-privileged-containers.yaml
```

📌 OPA ensures only compliant workloads are deployed.

## Vulnerability Scanning with Trivy

* Trivy scans container images, Git repositories, and Kubernetes clusters for security vulnerabilities.
* Detects CVEs (Common Vulnerabilities and Exposures) in containerized applications.
* Helps teams fix issues before deployment.

### Step 1: Install Trivy

```bash
brew install aquasecurity/trivy/trivy   # macOS
sudo apt install -y trivy               # Ubuntu/Debian
```

### Step 2: Scan a Docker Image for Vulnerabilities

```bash
trivy image nginx:latest
```

### Step 3: Scan a Kubernetes Cluster

```bash
trivy k8s cluster
```

📌 Trivy helps identify vulnerabilities before they reach production!

## When to Use OPA vs. Trivy?

The decision depends on whether you need policy enforcement or vulnerability scanning.

### Use Open Policy Agent (OPA) when:

* You need policy-based enforcement for access control, governance, and compliance.
* You want to prevent misconfigurations at runtime (e.g., restrict privileged containers).
* You need to enforce security rules at Kubernetes admission (e.g., using Gatekeeper).
* You are dealing with IAM policies, API authorization, or infrastructure security policies.

👉 Example Use Cases:
* Blocking Kubernetes pods from running as root.
* Enforcing TLS in Kubernetes Ingress resources.
* Controlling API access based on user roles.
* Validating Terraform IaC policies before deployment.

### Use Trivy when:

* You need vulnerability scanning to detect CVEs (Common Vulnerabilities and Exposures).
* You want to scan container images, Kubernetes manifests, Terraform IaC, or Git repositories.
* You are focusing on supply chain security (checking dependencies, misconfigurations).
* You want to integrate security checks into CI/CD pipelines before deployment.

👉 Example Use Cases:
* Detecting insecure dependencies in your application’s package manager.
* Checking Kubernetes YAML files for misconfigurations (e.g., exposed secrets).
* Running compliance checks on Terraform IaC before applying changes.


## Best Practices for Security

OPA and Trivy serve different purposes but work well together in a secure DevOps workflow:

1.️ Pre-deployment (CI/CD Pipeline):
* Trivy scans container images, dependencies, and IaC configurations.
* OPA validates policies in Terraform or Kubernetes manifests before applying changes.

2️. Deployment (Kubernetes Admission Control):
* OPA (Gatekeeper) enforces security policies before pods are admitted.

3️. Post-deployment (Runtime Security):
* Trivy continuously scans running containers for new vulnerabilities.

##  Activity for Today

* Deploy OPA Gatekeeper and enforce a security policy.
* Scan a container image for vulnerabilities using Trivy.
* Review security reports and identify improvements.


## What’s Next?

Tomorrow, we’ll build a complete Internal Developer Platform (IDP) to integrate everything we’ve learned.

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
* [Day 12: Advanced GitOps with Argo Rollouts](https://parraletz.space/blog/12-0-to-platform-eng-day12/)
  

 
👉 Bookmark this blog and check back every day for new posts in the series.
📣 Share your progress on social media with the hashtag #ZeroToPlatformEngineer to connect with other readers!
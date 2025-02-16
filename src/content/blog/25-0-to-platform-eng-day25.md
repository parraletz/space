---
title: 'Day 25: Canary Deployments and Feature Flags – Safe Rollouts'
excerpt: 'Welcome to Day 25 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’ll cover canary deployments and feature flags, two essential techniques for safe, controlled software rollouts in Kubernetes.'

publishDate: Feb 8 2025
tags:
  - 'Platform Engineering'
  - Devops
  - 'Cloud Native'  
  - SRE
  - flagger
  - canary
  - kubernetes
  - feature flags
  - unleash
seo:
  image:
    src: '/post-25.webp'

isFeatured: true
---

Welcome to Day 25 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’ll cover canary deployments and feature flags, two essential techniques for safe, controlled software rollouts in Kubernetes.



## Why Use Canary Deployments and Feature Flags?

Backstage, originally developed by Spotify, helps platform teams:

Modern software releases require controlled rollouts to reduce risk.

* **Canary Deployments** → Gradually shift traffic to a new version while monitoring health.
* **Feature Flags** → Enable/disable features dynamically without redeploying code.

📌 These techniques help avoid major outages while allowing teams to release faster!

## Canary deployments with Flagger

* Canary releases slowly shift traffic to a new version.
* If metrics show issues, rollbacks happen automatically.
* Works with Kubernetes, Istio, Linkerd, and NGINX.

### Step 1: Install Flagger (for Kubernetes + Istio)

   
```bash
helm repo add flagger https://flagger.app
helm repo update
helm install flagger flagger/flagger --namespace istio-system
```


### Step 2: Deploy a Canary Service

```bash
apiVersion: flagger.app/v1beta1
kind: Canary
metadata:
  name: my-app
  namespace: default
spec:
  targetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-app
  progressDeadlineSeconds: 60
  service:
    port: 80
  canaryAnalysis:
    interval: 30s
    threshold: 5
    metrics:
      - name: request-success-rate
        threshold: 99
```

```bash
kubectl apply -f canary.yaml
```

### Step 3: Monitor Canary Rollout

```bash
kubectl get canaries
```

##  Feature Flags with Unleash

* Feature flags allow teams to turn features on/off dynamically.
* No need for new deployments when testing new functionality.
* Supports gradual rollouts, A/B testing, and targeted releases.

### Step 1: Deploy Unleash Locally

```bash
docker run -d --name unleash -p 4242:4242 unleashorg/unleash
```

### Step 2: Define a Feature Toggle (Example in Node.js)


```javascript
const unleash = require('unleash-client');

unleash.initialize({
  url: 'http://localhost:4242/api/',
  appName: 'my-app',
  instanceId: '1',
});

if (unleash.isEnabled('new-feature')) {
  console.log('New feature is enabled!');
} else {
  console.log('Fallback behavior.');
}
```

📌 Feature flags give developers control over deployments without downtime.


## When to Use Canary Deployments and Feature Flags

The decision to use Canary Deployments or Feature Flags depends on the level of control needed and what you want to test or mitigate. Here’s when to use each approach:

### Use Canary Deployments when:

* You want to test new versions of a service gradually before full rollout.
* The change is at the infrastructure level (e.g., new version of an API, database updates).
* You need automatic rollback in case of issues (based on health checks or monitoring).
* You are deploying to a subset of users or traffic but not at the feature level.
* You are working with containerized services or Kubernetes, where Canary deployments are common.

👉 Example: Deploying a new version of your backend service (v1.1) to 10% of users, monitoring logs/metrics, then gradually rolling it out to 100%.

### Use Feature Flags when:

* You want to toggle features dynamically without redeploying.
* The change is at the application level (e.g., enabling/disabling a UI component, A/B testing).
* You need to gradually release a feature to specific users, roles, or environments.
* You want controlled experiments (e.g., exposing a feature to internal users before public release).
* You need the ability to instantly turn off a feature if something goes wrong.

👉 Example: Rolling out a “dark mode” UI feature to beta users, and later enabling it for all users with a simple toggle.


**Best Practices:**

* Use Canary Deployments for infrastructure changes.
* Use Feature Flags for application changes.
* Use a combination of both for more complex scenarios.
* Use a staging environment for feature flags.

🚀 Many teams use Canary Deployments for infrastructure changes and Feature Flags for application-level control.

💡 This allows you to safely test new releases while having granular control over feature rollouts.

##  Activity for Today

1. Deploy a Canary Deployment with Flagger.
2. Implement Feature Flags using Unleash.
3. Test gradual traffic shifting and dynamic feature toggles.


## What’s Next?

Tomorrow, we’ll secure platforms using Open Policy Agent (OPA) and Trivy.


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
---
title: 'Day 12: Advanced GitOps with Argo Rollouts'
excerpt: 'Welcome to Day 12 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’re diving deeper into GitOps by exploring Argo Rollouts, a powerful tool for managing progressive delivery strategies like canary and blue-green deployments.'

publishDate: Jan 25 2025
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
seo:
  image:
    src: '/post-12.webp'

commentsEnabled: true
---

Welcome to Day 12 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’re diving deeper into GitOps by exploring Argo Rollouts, a powerful tool for managing progressive delivery strategies like canary and blue-green deployments.

By the end of this session, you’ll understand:

- What GitOps is and why it’s transformative for managing Kubernetes.
- How to use ArgoCD to implement GitOps.
- Hands-on steps to set up and deploy applications with ArgoCD.

## What Are Argo Rollouts?

Argo Rollouts is a Kubernetes controller that extends the functionality of Deployments by providing advanced deployment strategies such as:

- **Canary Deployments**: Gradually shift traffic to a new version while monitoring its behavior.
- **Blue-Green Deployments**: Keep two versions (blue and green) and switch traffic seamlessly.
- **Progressive Delivery**: Safely deliver updates while minimizing risks.

### Why Use Argo Rollouts?

Argo Rollouts integrates seamlessly with GitOps workflows, making it a powerful choice for:

- Automated deployments with minimal downtime.
- Real-time traffic control and monitoring.
- Enhanced rollback capabilities.

🎯 Real-World Use Case: Argo Rollouts is ideal for applications requiring high availability, such as APIs or user-facing services.

## Hands-On: Setting Up Argo Rollouts

### Step 1: Install Argo Rollouts

1. Add the Argo Rollouts controller to your cluster:

```bash
kubectl create namespace argo-rollouts
kubectl apply -n argo-rollouts -f https://github.com/argoproj/argo-rollouts/releases/latest/download/install.yaml
```

2. Verify that Argo Rollouts is installed:

```bash
kubectl get pods -n argo-rollouts
```

### Step 2: Create a Canary Deployment

1. Define a sample Rollout with a canary strategy:

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: canary-example
  namespace: default
spec:
  replicas: 3
  selector:
    matchLabels:
      app: canary-example
  template:
    metadata:
      labels:
        app: canary-example
    spec:
      containers:
        - name: app
          image: nginx:1.21
          ports:
            - containerPort: 80
  strategy:
    canary:
      steps:
        - setWeight: 25
        - pause: { duration: 30s }
        - setWeight: 50
        - pause: { duration: 30s }
        - setWeight: 100
```

2. Apply the Rollout:

```bash
kubectl apply -f canary-rollout.yaml
```

3. Monitor the progress of the Rollout:

```bash
kubectl argo rollouts get rollout canary-example --watch
```

### Step 3: Create a Blue-Green Deployment

1. Define a Rollout with a blue-green strategy:

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: blue-green-example
  namespace: default
spec:
  replicas: 3
  selector:
    matchLabels:
      app: blue-green-example
  template:
    metadata:
      labels:
        app: blue-green-example
    spec:
      containers:
        - name: app
          image: nginx:1.21
          ports:
            - containerPort: 80
  strategy:
    blueGreen:
      activeService: active-svc
      previewService: preview-svc
      autoPromotionEnabled: false
```

2. Apply the Rollout:

```bash
kubectl apply -f blue-green-rollout.yaml
```

3. View the active and preview services:

```bash
kubectl get svc -l app=blue-green-example
```

Step 4: Rollbacks and Promotions

1. To promote a preview version in a blue-green strategy:

```bash
kubectl argo rollouts promote blue-green-example
```

2. To roll back a canary deployment:

```bash
kubectl argo rollouts rollback canary-example
```

Activity for Today

1. Set up Argo Rollouts in your Kubernetes cluster.
2. Create and test a canary deployment.
3. Implement a blue-green deployment and practice rolling back and promoting versions.

## What’s Next?

Now that you’ve mastered advanced GitOps workflows, tomorrow we’ll explore monitoring and observability with tools like Prometheus and Grafana.

_Get ready to level up your platform engineering skills! 🚀_

👉 Check it out here: [Zero to Platform Engineer Repository](https://github.com/parraletz/zero-to-platform-engineer)

Feel free to clone the repo, experiment with the code, and even contribute if you'd like! 🚀

## Follow the Series!

🎉 Don't miss a single step in your journey to becoming a Platform Engineer! 🎉

This post is just the beginning. Here's what we've covered so far and what's coming up next:

- [Day 0: Introduction - What’s Platform Engineering?](https://parraletz.space/blog/00-0-to-platform-eng-intro/)
- [Day 1: Introduction to the CNCF Landscape](https://parraletz.space/blog/01-0-to-platform-eng-day1/)
- [Day 2: Day 2: Containers and Docker - The Building Blocks of Cloud Native](https://parraletz.space/blog/02-0-to-platform-eng-day2/)
- [Day 3: Containers and Kubernetes - The Building Blocks of Cloud Native](https://parraletz.space/blog/03-0-to-platform-eng-day3/)
- [Day 4: Deployments and Scaling in Kubernetes - Let's Get Practical](https://parraletz.space/blog/03-0-to-platform-eng-day3/)
- [Day 5: Kubernetes Services – Connecting Your Applications](https://parraletz.space/blog/05-0-to-platform-eng-day5/)
- [Day 6: ConfigMaps and Secrets – Managing Configurations in Kubernetes](https://parraletz.space/blog/06-0-to-platform-eng-day6/)
- [Day 7: Recap and Hands-On Challenges for Week 1](https://parraletz.space/blog/07-0-to-platform-eng-day7/)
- [Day 8: Introduction to Infrastructure as Code (IaC)](https://parraletz.space/blog/08-0-to-platform-eng-day8/)
- [Day 9: Advanced Terraform – Managing Kubernetes Resources](https://parraletz.space/blog/09-0-to-platform-eng-day9/)
- [Day 10: Managing Kubernetes with Helm and Terraform](https://parraletz.space/blog/10-0-to-platform-eng-day10/)
- [Day 11: Introduction to GitOps with ArgoCD](https://parraletz.space/blog/11-0-to-platform-eng-day11/)

👉 Bookmark this blog and check back every day for new posts in the series.
📣 Share your progress on social media with the hashtag #ZeroToPlatformEngineer to connect with other readers!

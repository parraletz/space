---
title: 'Day 11: Introduction to GitOps with ArgoCD'
excerpt: 'Welcome to Day 11 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’re diving into GitOps, a modern approach to managing Kubernetes applications declaratively, with ArgoCD as our tool of choice.'

publishDate: Jan 24 2025
tags:
  - 'Platform Engineering'
  - Devops
  - 'Cloud Native'
  - SRE
  - kubernetes
  - terraform
  - IaC
seo:
  image:
    src: '/post-11.webp'

commentsEnabled: true
---

Welcome to Day 11 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’re diving into GitOps, a modern approach to managing Kubernetes applications declaratively, with ArgoCD as our tool of choice.

By the end of this session, you’ll understand:

- What GitOps is and why it’s transformative for managing Kubernetes.
- How to use ArgoCD to implement GitOps.
- Hands-on steps to set up and deploy applications with ArgoCD.

## What Is GitOps?

GitOps is a DevOps practice that uses Git repositories as the single source of truth for defining and managing infrastructure and applications. All changes to your Kubernetes environment are made via Git commits, which are automatically synced with your cluster.

### Key Principles of GitOps

1. Declarative: Infrastructure and application configurations are written as code.
2. Version Controlled: All changes are tracked in Git, providing a clear history.
3. Continuous Reconciliation: Tools like ArgoCD continuously compare the desired state in Git with the actual state in the cluster and reconcile any differences.
   Automation: Deployments and rollbacks are automated via Git commits.

🎯 Why GitOps Matters:

- Enables rapid recovery by simply reverting a Git commit.
- Improves collaboration by allowing pull requests for changes.
- Ensures cluster configurations are always auditable.

## What Is ArgoCD?

ArgoCD is a declarative, Kubernetes-native continuous delivery tool that automates application deployments using GitOps principles.

### Why Use ArgoCD?

- **Visual Management:** A web UI to monitor application health and sync status.
- **Multi-Cluster Suppor**t: Manage multiple Kubernetes clusters from one place.

## Hands-On: Setting Up GitOps with ArgoCD

### Step 1: Install ArgoCD

1. Create the **argocd** namespace:

```bash
kubectl create namespace argocd
```

2. Install ArgoCD in your Kubernetes cluster:

```bash
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

3. Verify that ArgoCD is installed:

```bash
kubectl get pods -n argocd
```

### Step 2: Access the ArgoCD UI

1. Expose the ArgoCD server:

```bash
kubectl port-forward svc/argocd-server -n argocd 8080:443
```

2. Retrieve the admin password:

```bash
kubectl get secret argocd-initial-admin-secret -n argocd -o jsonpath="{.data.password}" | base64 -d
```

3. Open the UI at https://localhost:8080 and log in with:

```bash
Username: admin
Password: Retrieved from the previous command.
```

### Step 3: Deploy a Sample Application Using ArgoCD

1. Add a sample application to Git:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx
  namespace: default
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx:1.21
          ports:
            - containerPort: 80
```

2. Create an ArgoCD application linked to the Git repository:

```bash
argocd app create nginx-app \
  --repo https://github.com/your-repo/sample-app.git \
  --path ./k8s \
  --dest-server https://kubernetes.default.svc \
  --dest-namespace default
```

3. Sync the application:

```bash
argocd app sync nginx-app
```

4. Verify the deployment:

```bash
kubectl get all -n default
```

### Step 4: Automate Syncing

Enable auto-syncing for your application so ArgoCD detects changes in Git and applies them:

```bash
argocd app set nginx-app --sync-policy automated
```

## Benefits of GitOps with ArgoCD

- **Auditable Deployments**: Every change is tracked in Git.
- **Faster Recovery**: Rollbacks are as simple as reverting a commit.
- **Improved Collaboration**: Teams can manage changes via pull requests.
- **Simplified Multi-Cluster Management**: Manage all clusters centrally.

T

## Activity for Today

1. Install ArgoCD in your Kubernetes cluster.
2. Deploy a sample application using GitOps principles.
3. Experiment with enabling auto-sync and making changes to your application in Git to see ArgoCD automatically reconcile the state.

## What’s Next?

Tomorrow, we’ll dive deeper into advanced GitOps workflows with Argo Rollouts, exploring canary and blue-green deployments.

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

👉 Bookmark this blog and check back every day for new posts in the series.
📣 Share your progress on social media with the hashtag #ZeroToPlatformEngineer to connect with other readers!

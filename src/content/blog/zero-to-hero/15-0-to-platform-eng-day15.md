---
title: 'Day 15: Automating Workflows with Kustomize and Skaffold'
excerpt: 'Welcome to Day 15 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’re diving into workflow automation for Kubernetes using Kustomize and Skaffold, two tools that simplify managing and deploying Kubernetes configurations'

publishDate: Jan 29 2025
tags:
  - 'Platform Engineering'
  - Devops
  - 'Cloud Native'
  - SRE
  - kubernetes
  - terraform
  - IaC
  - gitops
  - kustomize
  - skaffold
  - devsecops
seo:
  image:
    src: '/post-15.webp'

commentsEnabled: true
---

Welcome to Day 15 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’re diving into workflow automation for Kubernetes using Kustomize and Skaffold, two tools that simplify managing and deploying Kubernetes configurations

## Why Automate Kubernetes Workflows?

**Automation helps you:**

Simplify complex deployments.

- Increase development speed with streamlined workflows.
- Maintain consistent environments across teams.

**🎯 Key Concepts:**

- **Kustomize**: Customize Kubernetes YAML configurations without modifying the original files.
- **Skaffold**: Automate the build, push, and deployment process for Kubernetes applications.

### What Is Kustomize?

Kustomize is a Kubernetes-native configuration tool that allows you to:

- Overlay changes to YAML manifests.
- Reuse and customize resources for different environments.

**🎯 Use Case**: Configure a single application for dev, staging, and production without duplicating YAML files.

### What Is Skaffold?

Skaffold is a command-line tool that automates Kubernetes workflows, including:

- Building container images.
- Pushing images to registries.
- Deploying applications to Kubernetes clusters.

**🎯 Use Case:** Speed up development by automating repetitive tasks.

## Hands-On: Automating Workflows with Kustomize and Skaffold

### Step 1: Set Up Kustomize

1. Create a base configuration `(base/deployment.yaml)`:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: app
spec:
  replicas: 2
  selector:
    matchLabels:
      app: app
  template:
    metadata:
      labels:
        app: app
    spec:
      containers:
        - name: app
          image: nginx:1.21
```

2. Create a development configuration `(overlays/dev/deployment.yaml)`:

```yaml
bases:
  - ../../base

patchesStrategicMerge:
  - deployment-patch.yaml
```

3. Create a patch file `(overlays/dev/deployment-patch.yaml)`:

```yaml
spec:
  replicas: 1
  template:
    spec:
      containers:
        - name: app
          image: nginx:1.21-alpine
```

4. Build the configuration for the dev environment:

```bash
kubectl apply -k overlays/dev
```

### Step 2: Automate with Skaffold

1. Install Skaffold:

```bash
curl -Lo skaffold https://storage.googleapis.com/skaffold/releases/latest/skaffold-linux-amd64
chmod +x skaffold
sudo mv skaffold /usr/local/bin

```

2. Create a `skaffold.yaml` file:

```yaml
apiVersion: skaffold/v2beta26
kind: Config
build:
  artifacts:
    - image: app
deploy:
  kustomize:
    paths:
      - ./overlays/dev
```

3. Run Skaffold

```bash
skaffold dev
```

4. Skaffold will monitor changes, build new images, and redeploy automatically.

## Activity for Today

1. Set up Kustomize for a sample application with different environments.
2. Automate your Kubernetes workflow with Skaffold.
3. Test live changes in your application using Skaffold’s auto-deploy feature.

## What’s Next?

Tomorrow, we’ll explore building a developer-friendly platform by integrating tools like [Backstage](https://backstage.io) for internal developer portals.

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
- [Day 12: Advanced GitOps with Argo Rollouts](https://parraletz.space/blog/12-0-to-platform-eng-day12/)

👉 Bookmark this blog and check back every day for new posts in the series.
📣 Share your progress on social media with the hashtag #ZeroToPlatformEngineer to connect with other readers!

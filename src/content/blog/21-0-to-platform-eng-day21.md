---
title: 'Day 22: Building Developer Portals with Backstage'
excerpt: 'Welcome to Day 16 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’re focusing on Internal Developer Portals (IDPs) and how to build one using Backstage, an open-source platform that enhances developer experience by centralizing documentation, services, APIs, and deployments.'

publishDate: Feb 4 2025
tags:
  - 'Platform Engineering'
  - Devops
  - 'Cloud Native'  
  - SRE
  - kubernetes
  - backstage
seo:
  image:
    src: '/post-22.webp'

isFeatured: true
---

Welcome to Day 16 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’re focusing on Internal Developer Portals (IDPs) and how to build one using Backstage, an open-source platform that enhances developer experience by centralizing documentation, services, APIs, and deployments.



## Why Use a Developer Portal?


A well-structured Internal Developer Platform (IDP):

* **Improves Developer Productivity**: Provides a self-service interface for deploying and managing applications.
* **Enhances Visibility**: Organizes services, APIs, and infrastructure in a centralized hub.
* **Reduces Cognitive Load**: Developers can focus on writing code instead of navigating complex infrastructure.

### 🎯 Key Features of Backstage:

* **Software Catalog**: Track and manage services, APIs, and resources.
* **Plugins**: Extend functionality with Kubernetes, CI/CD integrations, and observability tools.
* **API Documentation**: Centralize API management with OpenAPI and GraphQL integrations.

### What Is Backstage?


Backstage, originally developed by Spotify, is an open-source developer portal that helps engineering teams:

* Discover and manage services through a software catalog.
* Access self-service infrastructure and deployment tools.
* Standardize documentation and workflows.


## Hands-On: Setting Up Backstage

### Step 1: Install Backstage Locally

1.	Install Node.js and Yarn:

```bash
npm install -g yarn
```

2. Create a new Backstage app:

```bash
npx @backstage/create-app@latest
cd zero-to-platform-engineer

```

3. Start the Backstage server:

```bash
yarn dev
```

4. Open Backstage in your browser: http://localhost:3000

## Step 2: Add Services to the Backstage Catalog

1. Inside the Backstage UI, navigate to Create Component.
2. Register an existing service from GitHub using its repository URL.
3. Define metadata in ```catalog-info.yaml```:

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: zero-to-platform-service
  annotations:
    github.com/project-slug: parraletz/zero-to-platform-engineer
spec:
  type: service
  owner: engineering
  lifecycle: production
```

4. Apply the configuration:

```bash
curl -X POST http://localhost:7000/api/catalog/entities -H "Content-Type: application/json" -d @catalog-info.yaml
```

### Step 3: Integrate Kubernetes with Backstage

1. Install the Kubernetes plugin:

```bash
yarn add @backstage/plugin-kubernetes
```

2. Configure Backstage to connect with your Kubernetes cluster by adding:

```yaml
kubernetes:
  serviceLocatorMethod:
    type: multiTenant
  clusterLocatorMethods:
    - type: config
      clusters:
        - name: my-cluster
          url: https://my-kubernetes-api
          authProvider: serviceAccount
```
3. Restart Backstage:

```bash
yarn dev
```

##  Activity for Today

1. Set up Backstage locally and explore its default features.
2. Register at least one service in the Software Catalog.
3. Integrate Kubernetes and view cluster resources inside Backstage.


## What’s Next?

Tomorrow, we’ll explore cloud cost optimization strategies for Kubernetes and cloud-native applications.


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
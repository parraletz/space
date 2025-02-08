---
title: 'Day 22: Building Templates and Catalogs with Backstage'
excerpt: 'Welcome to Day 22 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’re diving into Backstage, the leading Internal Developer Platform (IDP) tool, to build service templates and a software catalog for streamlined developer workflows.'

publishDate: Feb 5 2025
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

Welcome to Day 22 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’re diving into Backstage, the leading Internal Developer Platform (IDP) tool, to build service templates and a software catalog for streamlined developer workflows.



## Why Use Backstage for Service Templates and Catalogs?

Backstage, originally developed by Spotify, helps platform teams:

*  Standardize service creation with templates.
*  Provide a single source of truth for all microservices.
*  Improve developer self-service capabilities.
*  Reduce onboarding time by automating infrastructure setup.

📌 Companies like Spotify, American Airlines, and Expedia use Backstage to improve DevEx.

## 🎯 Key Features of Backstage:

* Software Catalog → Organizes services, APIs, and dependencies.
* Service Templates → Automates project scaffolding and best practices.
* Plugins & Extensibility → Integrates with Kubernetes, ArgoCD, GitHub Actions, etc.

💡 Backstage simplifies service discovery and deployment for engineering teams!

## Hands-On: Setting Up Backstage

### Step 1: Install Backstage Locally

1. Install Node.js and Yarn:
   
```bash
npm install -g yarn
````

2. Create a new Backstage app:

```bash
npx @backstage/create-app@latest
cd my-backstage-app
```

3. Start Backstage:

```bash
yarn dev
```

4. Open Backstage in your browser: http://localhost:3000

## Step 2: Adding Services to the Software Catalog

1. Navigate to Create Component in Backstage.
2. Register an existing GitHub repository.
3. Define catalog-info.yaml in the repo:

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: zero-to-platform
  annotations:
    github.com/project-slug: parraletz/zero-to-platform-engineer
spec:
  type: service
  owner: engineering
  lifecycle: production
```

4. Push changes and Backstage will automatically detect the service.

## Step 3: Creating a Service Template

Service templates allow teams to quickly scaffold new projects with best practices.

1. Create a `template.yaml` file:

```yaml
apiVersion: scaffolder.backstage.io/v1beta3
kind: Template
metadata:
  name: nodejs-service
  title: Node.js Service Template
  description: Scaffolds a Node.js microservice
spec:
  owner: platform-team
  type: service
  steps:
    - action: fetch:template
      input:
        url: ./skeleton
        values:
          name: ${{ parameters.name }}
  output:
    serviceUrl: https://github.com/parraletz/${{ parameters.name }}
```

2. Define the skeleton project inside the `skeleton` directory:

```bash
mkdir skeleton
cd skeleton

# Create a package.json file
npm init -y
```

3.Add the template to Backstage.

📌 Now, developers can create standardized services in a few clicks!


## How Templates Improve Developer Experience (DevEx)

**Before Templates:

* Developers manually set up services.
* Different projects have inconsistent configurations.
* Onboarding a new developer takes days.

With Backstage Templates:

* Developers can spin up new services instantly.
* Enforces best practices across all projects.
* Onboarding takes minutes instead of day


##  Activity for Today

1. Set up Backstage locally and explore the UI.
2. Register a service in the Software Catalog.
3. Create a Service Template for a microservice.


## What’s Next?

Tomorrow, we’ll cover secrets management using AWS Secrets Manager and HashiCorp Vault.

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
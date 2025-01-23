---
title: 'Day 10: Managing Kubernetes with Helm and Terraform'
excerpt: 'Welcome to Day 10 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’ll explore how to combine Helm and Terraform, two powerful tools, to simplify the deployment and management of Kubernetes applications.'
publishDate: Jan 23 2025
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
    src: '/post-10.webp'

isFeatured: true
---

Welcome to Day 10 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’ll explore how to combine Helm and Terraform, two powerful tools, to simplify the deployment and management of Kubernetes applications.

By the end of this session, you’ll understand:

- The basics of Helm and how it works.
- How Terraform can manage Helm Charts programmatically.
- Practical steps to deploy and manage applications with Helm and Terraform.



## What Is Helm?


Helm is a package manager for Kubernetes that helps you deploy applications using pre-configured templates called Charts.

### Why Use Helm?

1. Simplifies Complex Deployments: Use community-maintained Charts for tools like NGINX, Prometheus, and ArgoCD.
2. Standardization: Share Charts across teams for consistent deployments.
3. Flexibility: Customize configurations with values files.
4. Rollbacks: Easily revert changes to a previous state.

### What Is Terraform’s Role?

Terraform’s Helm Provider enables you to:

- Deploy Helm Charts programmatically alongside your infrastructure.
- Automate application updates.
- Track deployments in Terraform state files for consistency.

### Hands-On: Using Helm and Terraform Together

#### Step 1: Install the Helm CLI

1. Install the Helm CLI on your machine, following the official [installation guide](https://helm.sh/docs/intro/install/).
2. Verify the installation:
```bash
helm version
```

#### Step 2: Set Up the Terraform Helm Provider


1. Add the Helm provider to your Terraform configuration:

```hcl
provider "helm" {
  kubernetes {
    config_path = "~/.kube/config"
  }
}
```

2. Initialize Terraform:

```bash
terraform init
```

#### Step 3: Deploy a Helm Chart Using Terraform


1. Create a Terraform configuration file:

```hcl
resource "helm_release" "nginx" {
  name       = "nginx"
  namespace  = "default"
  chart      = "nginx"
  repository = "https://charts.bitnami.com/bitnami"
  version    = "15.4.0"

  values = [
    <<-EOF
    service:
      type: NodePort
      nodePort: 30001
    EOF
  ]
}
```

2. Apply the configuration:

```bash
terraform apply
```

3. Verify the deployment:

```bash
kubectl get all -n default
```

#### Step 4: Customize Your Helm Deployment

Modify the values section in Terraform to add custom settings, such as replica counts:

```hcl
values = [
  <<-EOF
  replicaCount: 3
  service:
    type: NodePort
    nodePort: 30002
  EOF
]
```

Apply the changes:

```bash
terraform apply
```

Verify the changes:

```bash
kubectl get all -n default
```

🎯 Pro tip: Use the -auto-approve flag to skip the confirmation prompt.

#### Step 5: Rollback to a Previous State

1. Update the values section in Terraform to rollback to the previous state:

```hcl
version = "15.5.0"
```

2. Apply the changes:

```bash
terraform state rm helm_release.nginx
helm rollback nginx 1
```

# Activity for Today

1. Deploy an NGINX Helm Chart using Terraform.
2. Customize the Chart with parameters like replica counts, ports, or environment variables.
3. Experiment with upgrades and rollbacks.




## What’s Next?

Tomorrow, we’ll explore GitOps with ArgoCD, diving into how you can manage Kubernetes clusters declaratively using Git as the source of truth.




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

 
👉 Bookmark this blog and check back every day for new posts in the series.
📣 Share your progress on social media with the hashtag #ZeroToPlatformEngineer to connect with other readers!
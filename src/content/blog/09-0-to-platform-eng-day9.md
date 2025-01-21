---
title: 'Day 9: Advanced Terraform – Managing Kubernetes Resources'
excerpt: 'Welcome to Day 9 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’re diving deeper into Terraform, exploring advanced features like modules, workspaces, and how to manage Kubernetes resources programmatically'
publishDate: Jan 22 2025
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
    src: '/post-day7.webp'
    alt: 'Day 7'

isFeatured: true
---

Welcome to Day 9 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’re diving deeper into Terraform, exploring advanced features like modules, workspaces, and how to manage Kubernetes resources programmatically


## Why Use Terraform for Kubernetes

Terraform isn’t just for managing cloud infrastructure. It’s also a powerful tool for managing Kubernetes resources like:

- Namespaces
- Deployments
- Services
- Ingress rules
- ConfigMaps and Secrets

Using Terraform to manage Kubernetes ensures that your infrastructure and workloads are defined in code, version-controlled, and easily reproducible.

### Advanced Terraform Concepts

#### 1. Modules

Modules are reusable pieces of Terraform configuration. They help you:

- Avoid repetition.
- Create consistent resource configurations.
- Share configurations across projects.

🎯 Example Module Structure:

```bash
modules/
  nginx/
    main.tf
    variables.tf
    outputs.tf
```

#### 2. Workspaces

Workspaces allow you to manage multiple Terraform configurations in the same repository.

1. Create a workspace:
```bash
terraform workspace new dev
```

2. Switch to a workspace:
```bash
terraform workspace select dev
```

3. Dynamic Blocks:

Dynamic blocks let you create multiple similar resources programmatically.

```hcl
resource "aws_security_group" "example" {
  name = "example"

  dynamic "ingress" {
    for_each = var.ingress_rules
    content {
      from_port   = ingress.value.from_port
      to_port     = ingress.value.to_port
      protocol    = ingress.value.protocol
      cidr_blocks = ingress.value.cidr_blocks
    }
  }
}
```

## Managing Kubernetes with Terraform

Terraform can be used to manage Kubernetes resources, including:

- Namespaces
- Deployments
- Services
- Ingress rules
- ConfigMaps and Secrets

Let’s explore how to use Terraform to manage Kubernetes resources.

### Step 1: Create a Terraform Configuration File

1. Add the Kubernetes provider to your Terraform configuration:

```hcl
provider "kubernetes" {
  config_path = "~/.kube/config"
}
```

2. Initialize Terraform:

```bash
terraform init
```

### Step 2: Create Kubernetes Resources

1. Define a namespace:

```hcl
resource "kubernetes_namespace" "zero-to-platform-engineer" {
  metadata {
    name = "zero-to-platform-engineer"
  }
}
```

2. Define a deployment:

```hcl
resource "kubernetes_deployment" "nginx" {
  metadata {
    name      = "nginx"
    namespace = kubernetes_namespace.example.metadata[0].name
  }

  spec {
    replicas = 3

    selector {
      match_labels = {
        app = "nginx"
      }
    }

    template {
      metadata {
        labels = {
          app = "nginx"
        }
      }

      spec {
        container {
          image = "nginx:1.21"
          name  = "nginx"

          port {
            container_port = 80
          }
        }
      }
    }
  }
}
```

3. Define a service:

```hcl
resource "kubernetes_service" "nginx" {
  metadata {
    name      = "nginx-service"
    namespace = kubernetes_namespace.example.metadata[0].name
  }

  spec {
    selector = {
      app = "nginx"
    }

    port {
      port        = 80
      target_port = 80
    }

    type = "ClusterIP"
  }
}
```

### Step 3: Apply the Configuration

1. Run terraform plan to preview the changes:

```bash
terraform plan
```

2. Apply the changes:

```bash
terraform apply
```

3. Verify the resources in Kubernetes:

```bash
kubectl get all -n zero-to-platform-engineer
```

### Step 4: Destroy Resources

When you're done, clean up the resources:

```bash
terraform destroy
```

## Challenges for Today

1. Create a module to manage Kubernetes namespaces, deployments, and services.
2. Use workspaces to manage different environments (e.g., dev, staging, prod).
3. Deploy a containerized application using Terraform.



## What’s Next?

Tomorrow, we’ll continue exploring advanced workflows by diving into Helm and its integration with Terraform to manage Kubernetes applications even more efficiently.

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

 
👉 Bookmark this blog and check back every day for new posts in the series.
📣 Share your progress on social media with the hashtag #ZeroToPlatformEngineer to connect with other readers!
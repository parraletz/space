---
title: 'Day 23: Managing Secrets with HashiCorp Vault and AWS Secrets Manager'
excerpt: 'Welcome to Day 23 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’re focusing on secrets management using HashiCorp Vault and AWS Secrets Manager, two powerful tools for securing credentials, API keys, and sensitive data.'

publishDate: Feb 6 2025
tags:
  - 'Platform Engineering'
  - Devops
  - 'Cloud Native'  
  - SRE
  - backstage
  - devsecops
  - vault
seo:
  image:
    src: '/post-23.webp'

isFeatured: true
---

Welcome to Day 23 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’re focusing on secrets management using HashiCorp Vault and AWS Secrets Manager, two powerful tools for securing credentials, API keys, and sensitive data.



## Why Secrets Management Matters

Handling secrets securely is critical to:

* Prevent credential leaks and unauthorized access.
* Automate secrets rotation for improved security.
* Enable role-based access control (RBAC) for sensitive data.

💡 Secrets should never be stored in Git repositories or hardcoded in applications!

## Secrets Management Tools: HashiCorp Vault vs. AWS Secrets Manager

|Feature| HashiCorp Vault  | AWS Secrets Manager |
|--|--|--|
| Type | OpenSource & Enterprise | Managed AWS Services|
| Use Case | Self-Hosted secrets management | Cloud-native AWS Integration |
| Auto-Rotation | Yes, vía polices | With AWS Lambda Integration|
| Encription| AES-256 | AWS KMS |
| Access Control | RBAC, polices and tokens | AWS IAM roles & policies |


📌 Both tools provide encryption, access control, and auto-rotation, but HashiCorp Vault offers more flexibility for multi-cloud environments.

## How HashiCorp Vault Works

* Stores secrets securely in a central location.
* Generates dynamic credentials for databases, APIs, and cloud providers.
* Supports Kubernetes integration for injecting secrets into pods.

### Installing HashiCorp Vault (Helm in Kubernetes):
   
```bash
helm repo add hashicorp https://helm.releases.hashicorp.com
helm repo update
helm install vault hashicorp/vault --namespace vault --create-namespace

```

### Storing a secret in Vault:


```bash
vault kv put secret/my-app password="supersecure123"
```

### Retrieving a secret:

```bash
vault kv get secret/my-app
```

1. Open Backstage in your browser: http://localhost:3000

## How AWS Secrets Manager Works

* Securely stores AWS credentials, API keys, and database passwords.
* Integrates with AWS Lambda for automatic secret rotation.
* Uses AWS IAM for access control and permissions.

###  Creating a secret in AWS Secrets Manager:

```bash
aws secretsmanager create-secret --name my-secret --secret-string '{"username":"admin","password":"supersecure123"}'
```

### Retrieving a secret:

```bash
aws secretsmanager get-secret-value --secret-id my-secret
```

📌 AWS Secrets Manager is ideal for cloud-native AWS applications needing seamless IAM integration.

## Best Practices for Secrets Management


* Never hardcode secrets in application code.
* Use short-lived, dynamically generated credentials.
* Restrict access to secrets using RBAC and least privilege.
* Enable automatic rotation for database credentials and API keys.
* Monitor and audit secret access logs for anomalies.

## Activity for Today


1. Set up HashiCorp Vault or AWS Secrets Manager.
2. Store a secret and retrieve it using CLI commands.
3. Explore auto-rotation features for credentials.

## What’s Next?

Tomorrow, we’ll scale Kubernetes applications using HPA and Cluster Autoscaler.

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
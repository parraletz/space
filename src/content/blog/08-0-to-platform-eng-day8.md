---
title: 'Day 8: Introduction to Infrastructure as Code (IaC)'
excerpt: 'Welcome to Week 2 of the Zero to Platform Engineer in 30 Days challenge! 🚀 This week, we’re diving into Infrastructure as Code (IaC) and CI/CD pipelines, two cornerstones of modern platform engineering. Today, we’ll focus on understanding what IaC is, why it matters, and how it helps manage infrastructure efficiently.'
publishDate: Jan 21 2025
tags:
  - 'Platform Engineering'
  - Devops
  - 'Cloud Native'
  - SRE
  - IaC
  - terraform
  - CI/CD
  - "AWS CDK"
seo:
  image:
    src: '/post-day8.webp'
    alt: 'Day 8'

isFeatured: true
---

Welcome to Week 2 of the Zero to Platform Engineer in 30 Days challenge! 🚀 This week, we’re diving into Infrastructure as Code (IaC) and CI/CD pipelines, two cornerstones of modern platform engineering. Today, we’ll focus on understanding what IaC is, why it matters, and how it helps manage infrastructure efficiently.


## What Is Infrastructure as Code (IaC)?

**Infrastructure as Code (IaC)** is the practice of managing and provisioning infrastructure (e.g., servers, networks, databases) through machine-readable configuration files instead of manual processes.

### Key Characteristics of IaC:

- **Declarative or Imperative**: Define what the infrastructure should look like (declarative) or how to create it step by step (imperative).
- **Version Controlled**: IaC files are stored in repositories like Git, making it easy to track changes.
- **Repeatable**: Automate infrastructure provisioning consistently across environments.



### Why IaC Matters

In traditional infrastructure management, scaling and maintaining environments can be time-consuming and error-prone. IaC solves this by:

- **Improving Consistenc**y: Eliminate human error with automated provisioning.
- **Simplifying Scaling**: Scale infrastructure on demand with code.
- **Enabling Agility**: Spin up environments quickly for development, testing, and production.
- **Enhancing Collaboration:** Teams can collaborate using version control systems like Git.


🎯 **Real-World Use Case**: Think about how a cloud provider like AWS enables you to create resources (e.g., EC2, S3) programmatically via tools like Terraform or AWS CloudFormation.



### Popular IaC Tools

Here are some popular tools in the IaC space:

1. Terraform / Opentofu

- Cloud-agnostic.
- Widely used for provisioning infrastructure across multiple providers (AWS, Azure, GCP).

2. AWS CloudFormation

- AWS-native IaC tool.
- Best suited for managing resources within the AWS ecosystem.

3. Pulumi

- Supports IaC in general-purpose programming languages (e.g., Python, TypeScript).

4. Ansible

- Focused on configuration management but also supports provisioning.

In addition to tools like Terraform and CloudFormation, let’s talk about AWS CDK, a powerful framework for defining cloud infrastructure using familiar programming languages.

5. AWS CDK (Cloud Development Kit)

- Define infrastructure using programming languages like TypeScript, Python, Java, and Go.
- Generates CloudFormation templates under the hood.

## Hands-On: Getting Started with IaC

Let’s explore **Terraform** and **AWS CDK** to see how these tools work in practice.

### Terraform Example: Creating an S3 Bucket


#### Step 1: Install Terraform

1. Install terraform on your machine, following the official [installation guide](https://www.terraform.io/downloads).
2. Verify the installation:
```bash
terraform version
```



#### Step 2: Create a Terraform Configuration File

1. Create a directory for your Terraform project:

```bash
mkdir terraform-iac-demo && cd terraform-iac-demo
```

2. Create a file named main.tf:

```hcl
provider "aws" {
  region = "us-west-2"
}

resource "aws_s3_bucket" "zero-to-platform-engineer" {
  bucket = 'zero-to-platform-engineer'
  acl    = "private"
}
```

#### Step 3. Initialize Terraform:

```bash
terraform init
```

#### Step 4. Plan and Apply the Configuration:

```bash
terraform plan
terraform apply
```
🎯 Pro tip: Use the -auto-approve flag to skip the confirmation prompt.

#### Step 5: Clean Up

```bash
terraform destroy
```

### AWS CDK Example: Creating an S3 Bucket

#### Step 1: Install AWS CDK

1. Install the AWS CDK on your machine, following the official [installation guide](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html#getting_started_install).
2. Verify the installation:
```bash
cdk --version
```

#### Step 2: Create a CDK Project

1. Create a directory for your CDK project:
```bash
mkdir cdk-iac-demo && cd cdk-iac-demo
```

2. Initialize the CDK project:
```bash
cdk init app --language typescript
```

#### Step 3: Define Your Infrastructure

1. Open the lib/cdk-iac-demo-stack.ts file and add the following:

```typescript
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class CdkIacDemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new s3.Bucket(this, 'ZeroToPlatformEngineerBucket', {
      bucketName: 'zero-to-platform-engineer-bucket',
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
  }
}
```

#### Step 4: Deploy the Infrastructure

1. Bootstrap your environment:

```bash
cdk bootstrap aws://<account-id>/<region>

```

2. Deploy the infrastructure:

```bash
cdk deploy
```

🎯 Pro tip: Use the --require-approval flag to skip the confirmation prompt.


---

🎯 When to Use AWS CDK:
- You’re working primarily with AWS.
- You prefer coding infrastructure in a general-purpose language.

🎯 When to Use Terraform:

- You need a multi-cloud solution.
- You prefer a declarative approach with a simpler setup.

---

## Challenges for Today

1. Create an S3 bucket using both Terraform and AWS CDK.
2. Experiment with adding properties like versioning, encryption, or lifecycle rules.
3. Reflect: Which tool felt easier or more intuitive?


## What’s Next?

Tomorrow, we’ll explore advanced Terraform configurations, including managing Kubernetes resources programmatically.

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
* [Day 7: Recap and Hands-On Challenges for Week 1 ](https://parraletz.space/blog/07-0-to-platform-eng-day7/)

 
👉 Bookmark this blog and check back every day for new posts in the series.
📣 Share your progress on social media with the hashtag #ZeroToPlatformEngineer to connect with other readers!
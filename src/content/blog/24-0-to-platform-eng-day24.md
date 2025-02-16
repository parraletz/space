---
title: 'Day 24: Scaling Applications with Kubernetes HPA and Cluster Autoscaler'
excerpt: 'Welcome to Day 24 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’re diving into autoscaling in Kubernetes, focusing on Horizontal Pod Autoscaler (HPA) and Cluster Autoscaler to efficiently manage workloads..'

publishDate: Feb 7 2025
tags:
  - 'Platform Engineering'
  - Devops
  - 'Cloud Native'  
  - SRE
  - kubernetes
seo:
  image:
    src: '/post-24.webp'

isFeatured: true
---

Welcome to Day 24 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’re diving into autoscaling in Kubernetes, focusing on Horizontal Pod Autoscaler (HPA) and Cluster Autoscaler to efficiently manage workloads.



## Why Autoscaling Matters in Kubernetes?

Autoscaling ensures that applications:

* Adapt to demand by increasing or decreasing resources dynamically.
* Improve cost efficiency by running only what’s needed.
* Maintain performance under varying loads.

### Two main types of autoscaling in Kubernetes:

- HPA (Horizontal Pod Autoscaler) → Scales pods based on CPU, memory, or custom metrics.
- Cluster Autoscaler → Adjusts the number of nodes dynamically based on pod scheduling needs.

##  Horizontal Pod Autoscaler (HPA)

* Scales pods automatically based on CPU, memory, or custom metrics.
* Works well for applications with fluctuating workloads.
* Requires metrics-server to be installed.

### Step 1: Enable Metrics Server

```bash
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
```

###  Step 2: Deploy a Sample Application

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 1
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
        image: nginx
        resources:
          requests:
            cpu: "100m`
          limits:
            cpu: "200m"
```

```bash
kubectl apply -f deployment.yaml
```

### Step 3: Create an HPA for the Deployment

```bash
kubectl autoscale deployment nginx-deployment --cpu-percent=50 --min=1 --max=10
```

### Step 4: Check HPA Status

```bash
kubectl get hpa
```

💡 HPA will increase/decrease pods based on CPU usage automatically.


## Cluster Autoscaler

*  Scales nodes up/down when pods can’t be scheduled due to resource constraints.
*  Works with cloud providers like AWS, GCP, and Azure.

### Step 1: Deploy Cluster Autoscaler on AWS EKS

```bash
helm repo add autoscaler https://kubernetes.github.io/autoscaler
helm repo update
helm install cluster-autoscaler autoscaler/cluster-autoscaler \
  --namespace kube-system \
  --set autoDiscovery.clusterName=my-cluster \
  --set awsRegion=us-west-2
```

### Step 2: Verify Cluster Autoscaler

```bash
kubectl logs -f deployment/cluster-autoscaler -n kube-system
```

💡 Cluster Autoscaler ensures that Kubernetes adds/removes nodes as needed.

##  Activity for Today

1. Deploy HPA for a sample application.
2. Enable Cluster Autoscaler and scale up/down nodes.
3. Test autoscaling by generating load on your application.


## What’s Next?

Tomorrow, we’ll explore safe deployments using Canary Releases and Feature Flags.

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
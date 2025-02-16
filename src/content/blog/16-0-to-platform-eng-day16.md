---
title: 'Day 16: Getting Started with Prometheus – Monitoring Metrics'
excerpt: 'Welcome to Day 16 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’ll explore Prometheus, the go-to tool for monitoring Kubernetes and collecting real-time metrics.'

publishDate: Jan 30 2025
tags:
  - 'Platform Engineering'
  - Devops
  - 'Cloud Native'  
  - SRE
  - kubernetes
  - grafana
  - prometheus
  - monitoring
  - observability
seo:
  image:
    src: '/post-16.webp'

isFeatured: true
---

Welcome to Day 16 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’ll explore Prometheus, the go-to tool for monitoring Kubernetes and collecting real-time metrics.



## Why Monitoring with Prometheus?

### Monitoring is essential to:

* Detect Issues Early: Identify problems before they impact users.
* Optimize Performance: Track CPU, memory, and request latencies.
* Enable Alerting: Automatically notify teams when issues arise.

### 🎯 What Prometheus Provides:

* Time-series database optimized for Kubernetes metrics.
* Powerful query language (PromQL) for analyzing data.
* Built-in alerting and integrations with Grafana, Alertmanager, and more.

## Installing Prometheus in Kubernetes

### Step 1: Deploy Prometheus with Helm

1. Add the Prometheus Helm repository:

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
```

2. Deploy Prometheus with Helm:

```bash
helm install prometheus prometheus-community/kube-prometheus-stack --namespace monitoring --create-namespace

```

3. Verify that Prometheus is running:

```bash
kubectl get pods -n monitoring
```

### Step 2: Accessing Prometheus UI

1. Forward Prometheus to your local machine:

```bash
kubectl port-forward svc/prometheus-kube-prometheus-prometheus -n monitoring 9090:9090
```

2. Open Prometheus UI in your browser:

```bash
👉 http://localhost:9090
```

### Step 3: Querying Metrics with PromQL

Run the following PromQL queries to analyze metrics:

1. CPU usage of all nodes:

```promql
sum(rate(node_cpu_seconds_total[5m])) by (instance)
```

2. Memory usage of all nodes:

```promql
sum(container_memory_usage_bytes) by (pod)
```

3. Requests per second to your application:

```promql
rate(http_requests_total[1m])
```




##  Activity for Today

1.  Deploy Prometheus using Helm.
2.  Run PromQL queries to analyze your cluster’s metrics.
3.  Configure Alertmanager to notify when CPU usage is high.


## What’s Next?

Tomorrow, we’ll visualize Prometheus metrics with Grafana, creating custom dashboards and alerts.


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
* [Day 13: Introduction to Observability with Prometheus and Grafana](https://parraletz.space/blog/13-0-to-platform-eng-day13/)
* [Day 14: Securing Kubernetes – Runtime Security and Policy Enforcemeno](https://parraletz.space/blog/14-0-to-platform-eng-day14/)
* [Day 15: Automating Workflows with Kustomize and Skaffold](https://parraletz.space/blog/15-0-to-platform-eng-day15/)
  

 
👉 Bookmark this blog and check back every day for new posts in the series.
📣 Share your progress on social media with the hashtag #ZeroToPlatformEngineer to connect with other readers!
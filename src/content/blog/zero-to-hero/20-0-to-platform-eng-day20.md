---
title: 'Day 20: Recap – Creating a Basic Observability Stack'
excerpt: 'Welcome to Day 20 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’re doing a recap of observability best practices and assembling a basic observability stack using Prometheus, Grafana, Loki, and OpenTelemetry.'

publishDate: Feb 2 2025
tags:
  - 'Platform Engineering'
  - Devops
  - 'Cloud Native'
  - SRE
  - kubernetes
  - grafana
  - observability
  - monitoring
  - chaos engineering
seo:
  image:
    src: '/post-20.webp'

commentsEnabled: true
---

Welcome to Day 20 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’re doing a recap of observability best practices and assembling a basic observability stack using Prometheus, Grafana, Loki, and OpenTelemetry.

## What Is an Observability Stack?

An observability stack consists of tools that help monitor, log, and trace applications to ensure performance and reliability.

### Key Components of Observability:

- Metrics → Measure system health (CPU, memory, request rates).
- Logs → Capture detailed event information for debugging.
- Traces → Provide insights into request flows across services.

### A full observability stack includes:

- Prometheus → Metrics collection
- Grafana → Visualization and dashboards
- Loki → Centralized logging
- OpenTelemetry → Distributed tracing

## Building a Cloud-Native Observability Stack

### Metrics and Prometheus

- Collects time-series data from kubernetes, applications, and infrastructure.
- Uses PromQL to query and aggregate data.

#### 1. Install Prometheus with Helm:

```bash
helm install prometheus prometheus-community/kube-prometheus-stack --namespace monitoring --create-namespace
```

#### 2. Example PromQL Queries:

```promql
sum(rate(container_cpu_usage_seconds_total[5m])) by (pod)
```

### Dashboards and Grafana

- Provides a graphical interface for creating and managing dashboards.
- Allows you to visualize metrics and logs.
- Integrates with Prometheus and Loki.
- Supports alerting for proactive monitoring.

#### Install Grafana with Helm:

```bash
helm install grafana grafana/grafana --namespace monitoring
```

#### Import a Pre-Built Dashboard:

1. Go to Dashboards > Import.
2. Enter Dashboard ID: 9135 (Kubernetes Cluster Monitoring)
3. Select Prometheus as the data source
4. Click Import to visualize your cluster metrics
5. Click Save to store your dashboard

### Logs with Loki

- Lightweight, scalable, and highly-available logging solution.
- Works seamlessly with grafana for log analysis.

#### Install Loki with Helm:

```bash
helm install loki grafana/loki-stack --namespace monitoring
```

#### Query logs in Grafana:

```logql
{job="nginx"} |= "error"
```

### Distributed Tracing with OpenTelemetry

- Captures end-to-end request flows across microservices.
- Helps debug latency issues and optimize performance.

#### Install OpenTelemetry with Helm:

```bash
helm install otel-collector open-telemetry/opentelemetry-collector --namespace monitoring
```

## Why Use an Observability Stack?

- Faster troubleshooting and debugging. Quickly identify issues and root causes.
- Better Performance Monitoring. Identify bottlenecks and optimize resource utilization.
- Improved incident response. Reduce downtime and improve customer satisfaction.

## Activity for Today

1. Review metrics, logs, and traces and how they work together.
2. Install Prometheus, Grafana, Loki, and OpenTelemetry.
3. Test queries, dashboards, and alerts in Grafana.

## What’s Next?

Tomorrow, we’ll shift focus to Internal Developer Platforms (IDPs) and discuss how platform teams improve developer experience.

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

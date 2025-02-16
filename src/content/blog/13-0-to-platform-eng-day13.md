---
title: 'Day 13: Monitoring with Prometheus and Grafana'
excerpt: 'Welcome to Day 13 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’re focusing on monitoring and observability, key components for maintaining the health, performance, and reliability of your applications in Kubernetes.'

publishDate: Jan 26 2025
tags:
  - 'Platform Engineering'
  - Devops
  - 'Cloud Native'
  - SRE
  - kubernetes
  - IaC
  - gitops
  - argocd
seo:
  image:
    src: '/post-12.webp'

isFeatured: true
---

Welcome to Day 13 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’re focusing on monitoring and observability, key components for maintaining the health, performance, and reliability of your applications in Kubernetes.

By the end of this session, you’ll understand:

- How Prometheus collects metrics and monitors your Kubernetes cluster.
- How Grafana visualizes and analyzes metrics.
- Practical steps to set up Prometheus and Grafana in your Kubernetes environment.

## Why Monitoring and Observability Matter

Monitoring and observability are essential to:

* Detect and resolve issues before they impact users.
* Gain insights into the performance and behavior of your applications.
* Ensure high availability and reliability.

#### 🎯 Key Concepts:

* **Monitoring**: Tracks metrics like CPU usage, memory, and request latencies.
* **Observability**: Provides deeper insights into system behavior through metrics, logs, and traces.

### What Is Prometheus?

Prometheus is an open-source monitoring tool designed for reliability and scalability. It works by:

* Scraping metrics from applications and infrastructure.
* Storing time-series data in its database.
* Allowing queries with PromQL (Prometheus Query Language).

### What Is Grafana?

Grafana is an open-source analytics and visualization platform that:

* Integrates with Prometheus and other data sources.
* Provides customizable dashboards.
* Enables real-time monitoring and alerting.

## Hands-On: Setting Up Prometheus and Grafana

### Step 1: Install Prometheus and Grafana with Helm

1.	Add the Helm repository:

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
```

2.	Install Prometheus and Grafana in your cluster:

```bash
helm install prometheus-stack prometheus-community/kube-prometheus-stack --namespace monitoring --create-namespace
```

3.	Verify the installation:
```bash
kubectl get pods -n monitoring
```

### Step 2: Access the Prometheus Dashboard


1.	Port-forward the Prometheus server:

```bash
kubectl port-forward svc/prometheus-stack-kube-prom-prometheus -n monitoring 9090:9090
```

2.	Open your browser and go to http://localhost:9090.

3.	Explore PromQL queries. Example:

```promql
rate(http_requests_total[5m])
```

### Step 3: Access the Grafana Dashboard

1.	Port-forward the Grafana service:

```bash
kubectl port-forward svc/prometheus-stack-grafana -n monitoring 3000:80
```

2.	Open your browser and go to http://localhost:3000.

3.	Log in using the default credentials:

* **Username**: admin
* **Password**: Retrieve it with:

```bash
kubectl get secret prometheus-stack-grafana -n monitoring -o jsonpath="{.data.admin-password}" | base64 -d
```

### Step 4: Create Dashboards in Grafana
1.	Add Prometheus as a data source:

* Go to Configuration > Data Sources in Grafana.
* Select Prometheus and use the following URL:

```bash
http://prometheus-stack-kube-prom-prometheus.monitoring.svc.cluster.local:9090
```

2.	Import pre-built dashboards:

* Go to Dashboards > Import.
* Use a community-provided dashboard ID, such as [3119](https://grafana.com/grafana/dashboards/3119-kubernetes-cluster-monitoring-via-prometheus/) for Kubernetes cluster monitoring.

### Step 5: Monitor Your Cluster

1.	View metrics like:
* CPU and memory usage for nodes and Pods.
* Request latencies for your applications.
* Active Kubernetes events.

2.	Set up alerts in Grafana:
* Go to Alerting > Contact Points to configure notifications (e.g., Slack, email).
* Create alert rules for critical metrics, such as high CPU usage.

## Benefits of Using Prometheus and Grafana

* **Real-Time Insights**: Get instant feedback on system health.
* **Custom Dashboards**: Visualize the metrics that matter to you.
* **Actionable Alerts**: Stay ahead of issues with proactive notifications.
* **Scalability**: Monitor applications of any size.

## Activity for Today
1.	Set up Prometheus and Grafana in your Kubernetes cluster.
2.	Create and explore dashboards with your cluster metrics.
3.	Configure alerts for key metrics like CPU, memory, and request latencies.

## What’s Next?

Now that you’ve mastered monitoring and observability, tomorrow we’ll dive into security in Kubernetes, including tools like Falco and OPA for runtime protection and policy enforcement.

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
* [Day 7: Recap and Hands-On Challenges for Week 1](https://parraletz.space/blog/07-0-to-platform-eng-day7/)
* [Day 8: Introduction to Infrastructure as Code (IaC)](https://parraletz.space/blog/08-0-to-platform-eng-day8/)
* [Day 9: Advanced Terraform – Managing Kubernetes Resources](https://parraletz.space/blog/09-0-to-platform-eng-day9/)
* [Day 10: Managing Kubernetes with Helm and Terraform](https://parraletz.space/blog/10-0-to-platform-eng-day10/)
* [Day 11: Introduction to GitOps with ArgoCD](https://parraletz.space/blog/11-0-to-platform-eng-day11/)
* [Day 12: Advanced GitOps with Argo Rollouts](https://parraletz.space/blog/12-0-to-platform-eng-day12/)

 
👉 Bookmark this blog and check back every day for new posts in the series.
📣 Share your progress on social media with the hashtag #ZeroToPlatformEngineer to connect with other readers!
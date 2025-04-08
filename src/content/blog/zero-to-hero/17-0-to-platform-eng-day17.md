---
title: 'Day 17: Visualizing Data with Grafana'
excerpt: 'Welcome to Day 17 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’re focusing on visualizing Kubernetes metrics with Grafana, creating real-time dashboards to monitor application performance.'

publishDate: Jan 31 2025
tags:
  - 'Platform Engineering'
  - Devops
  - 'Cloud Native'
  - SRE
  - kubernetes
  - grafana
  - observability
  - monitoring
seo:
  image:
    src: '/post-17.webp'

commentsEnabled: true
---

Welcome to Day 17 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’re focusing on visualizing Kubernetes metrics with Grafana, creating real-time dashboards to monitor application performance.

## Why Use Grafana ?

Grafana is an open-source observability platform that helps you:

- Visualize metrics from Prometheus, Loki, and other data sources.
- Create dynamic dashboards for monitoring infrastructure and applications.
- Set up alerts to detect performance issues in real-time.

🎯 Key Benefits:

- Supports multiple data sources (Prometheus, Loki, InfluxDB, etc.).
- Interactive dashboards for real-time monitoring.
- Configurable alerts for proactive issue resolution.

## Hands-On: Setting Up Grafana for Kubernetes

### Step 1: Install Grafana with Helm

1. Add the Grafana Helm repository:

```bash
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update
```

2. Install Grafana in your Kubernetes cluster:

```bash
helm install grafana grafana/grafana --namespace monitoring --create-namespace
```

3. Verify that Grafana is running:

```bash
kubectl get pods -n monitoring
```

### Step 2: Access Grafana

1. Forward Grafana to your local machine:

```bash
kubectl port-forward svc/grafana -n monitoring 3000:80
```

2. Open Grafana in your browser:

```bash
👉 http://localhost:3000
```

3. Retrieve the admin password:

```bash
kubectl get secret grafana -n monitoring -o jsonpath="{.data.admin-password}" | base64 -d
```

4. Login:

- **Username**: `admin`
- **Password**: `Retrieved from the previous command`.

### Step 3: Connect Prometheus as a Data Source

1. In the Grafana UI, go to Configuration > Data Sources.
2. Click Add data source and select Prometheus.
3. Enter the Prometheus URL:

```bash
http://prometheus-kube-prometheus-prometheus.monitoring.svc.cluster.local:9090
```

4. Click Save & Test to confirm the connection.

### Step 4: Import a Pre-Built Kubernetes Dashboard

1. Go to Dashboards > Import.
2. Enter Dashboard ID: 3119 (Kubernetes Cluster Monitoring).
3. Select Prometheus as the data source.
4. Click Import to visualize your cluster metrics.

### Step 5: Create a Custom Dashboard

1. Go to Create > Dashboard.
2. Add a Graph Panel and use the following PromQL queries:

- CPU Usage:

```promql
sum(rate(container_cpu_usage_seconds_total[5m])) by (pod)
```

- Memory Usage:

```promql
sum(container_memory_usage_bytes) by (pod)
```

- Request Rates:

```promql
rate(http_requests_total[1m])
```

3. Click **Save** to store your custom dashboard.

### Step 6: Set Up Alerts in Grafana

1. Navigate to Alerting > Contact Points and add Slack, Email, or PagerDuty.
2. Create a new Alert Rule:
   1. Condition: CPU usage > 85% for 2 minutes.
   2. Notification: Send to configured contact points.
3. Click Save to activate alerts.

## Activity for Today

1. Deploy Grafana and connect it to Prometheus.
2. Import a pre-built Kubernetes dashboard.
3. Create a custom dashboard with key performance metrics.
4. Set up alerts for proactive monitoring.

## What’s Next?

Tomorrow, we’ll explore distributed tracing with OpenTelemetry, gaining deeper insights into request flows across microservices.

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

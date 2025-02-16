---
title: 'Day 19: Chaos Engineering – Building Resilient Systems'
excerpt: 'Welcome to Day 19 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’ll explore Chaos Engineering, its origins with Netflix’s Simian Army, and modern tools like LitmusChaos, Gremlin, and LambdaChaos that help test system resilience.'

publishDate: Feb 2 2025
tags:
  - 'Platform Engineering'
  - Devops
  - 'Cloud Native'  
  - SRE
  - kubernetes
  - grafana
  - observability
  - chaos engineering
  - chaos monkey
seo:
  image:
    src: '/post-19.webp'

isFeatured: true
---

Welcome to Day 19 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’ll explore Chaos Engineering, its origins with Netflix’s Simian Army, and modern tools like LitmusChaos, Gremlin, and LambdaChaos that help test system resilience.

## What Is Chaos Engineering?

Chaos Engineering is the practice of intentionally injecting failures to:

* Test system resilience under real-world failure conditions.
* Identify weaknesses before they impact users.
* Ensure high availability and reliability in production.

🎯 Key Principles: 

1. Define a steady state for your system.
2. Introduce controlled failures (CPU stress, pod deletion, network latency).
3. Observe the impact and automate failure detection.
4. Improve system self-healing capabilities.


💡 Instead of waiting for an outage, Chaos Engineering helps teams proactively prevent failures!


## The Origins of Chaos Engineering – Netflix’s Simian Army

failures. Their Simian Army introduced controlled chaos to their production environments.

Simian Army Components:

* 🐵 Chaos Monkey → Randomly terminates instances to test auto-scaling & failover.
* 🐢 Latency Monkey → Injects network delays to simulate slow responses.
* 🦍 Chaos Gorilla → Simulates AWS region failures to test disaster recovery.
* 🛡️ Security Monkey → Identifies security misconfigurations.
* 🧹 Janitor Monkey → Removes unused cloud resources to optimize costs.

📌 Netflix open-sourced Chaos Monkey, allowing other companies to adopt resilience testing!

## Modern Chaos Engineering Tools

While Netflix’s Simian Army was groundbreaking, modern tools like LitmusChaos, Gremlin, and LambdaChaos provide more control and integrations.

### LitmusChaos (Open Source)

* Kubernetes-native Chaos Engineering tool.
* Supports experiments like pod deletion, node failure, and network loss.
* Integrates with Prometheus, Grafana, and ArgoCD.

📌 Who uses it?
	•	CNCF supports LitmusChaos as the standard Chaos Engineering tool for Kubernetes.

Installation:
```bash
helm repo add litmuschaos https://litmuschaos.github.io/litmus-helm/
helm repo update
helm install litmus litmuschaos/litmus --namespace litmus --create-namespace
```
### Gremlin (Commercial)

* Enterprise-grade Chaos Engineering tool.
* Supports CPU spikes, memory exhaustion, latency injection, and process killing.
* Provides detailed attack simulations and observability integrations.

📌 Who uses it?
* Companies like LinkedIn, Expedia, and Twilio use Gremlin to run controlled chaos in production.

Example: Simulate high CPU usage in a container:

```bash
gremlin attack container cpu --targets "nginx"
```


##  Activity for Today

1. Research litmuschaos and gremlin.
2. Compare and contrast the two tools.
3. Think of a use case for each tool.

## What’s Next?

We’ll recap the best practices for Observability and build a basic observability stack using logs, metrics, and traces.

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
---
title: 'Day 18: Distributed Tracing with OpenTelemetry'
excerpt: 'Welcome to Day 18 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’re diving into Distributed Tracing using OpenTelemetry, an essential tool for monitoring request flows across microservices.'

publishDate: Feb 1 2025
tags:
  - 'Platform Engineering'
  - Devops
  - 'Cloud Native'
  - SRE
  - kubernetes
  - grafana
  - observability
  - monitoring
  - opentelemetry
  - tracing
  - Distributed Tracing
seo:
  image:
    src: '/post-17.webp'

commentsEnabled: true
---

Welcome to Day 18 of the Zero to Platform Engineer in 30 Days challenge! 🚀 Today, we’re diving into Distributed Tracing using OpenTelemetry, an essential tool for monitoring request flows across microservices.

## Why Use Distributed Tracing?

In a microservices architecture, tracing helps:

- Understand request flows across multiple services.
- Detect performance bottlenecks in applications.
- Correlate logs, metrics, and traces for better debugging.

### 🎯 Key Benefits:

- Provides end-to-end visibility across distributed systems.
- Helps pinpoint slow API calls and database queries.
- Standardizes tracing across multiple languages and frameworks.

## What Is OpenTelemetry?

OpenTelemetry (OTel) is an open-source observability framework that standardizes:

- Tracing: Capturing request flows.
- Metrics: Collecting application performance data.
- Logs: Providing detailed event tracking.

💡 OTel is supported by Prometheus, Grafana, Jaeger, Datadog, AWS X-Ray, and more!

## Hands-On: Setting Up OpenTelemetry in Kubernetes

### Step 1: Deploy OpenTelemetry Collector

1. Add the OpenTelemetry Helm repository:

```bash
helm repo add open-telemetry https://open-telemetry.github.io/opentelemetry-helm-charts
helm repo update
```

2. Install OpenTelemetry Collector:

```bash
helm install otel-collector open-telemetry/opentelemetry-collector --namespace monitoring --create-namespace
```

3. Verify the installation:

```bash
kubectl get pods -n monitoring
```

### Step 2: Instrumenting a Microservice

1. Add OpenTelemetry SDK to your application. Example for Python:

```bash
pip install opentelemetry-sdk opentelemetry-exporter-otlp
```

2. Modify your application to send traces:

```python
from opentelemetry import trace
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.exporter.otlp.proto.grpc.trace_exporter import OTLPSpanExporter
from opentelemetry.sdk.trace.export import SimpleSpanProcessor

tracer_provider = TracerProvider()
tracer_provider.add_span_processor(SimpleSpanProcessor(OTLPSpanExporter(endpoint="http://otel-collector:4317")))

trace.set_tracer_provider(tracer_provider)
tracer = trace.get_tracer(__name__)

with tracer.start_as_current_span("zero-eng-tracing"):
    print("Tracing request flow...")
```

3. Deploy your application and verify traces are being collected.

### Step 3: Visualizing Traces in Jaeger

1. Install Jaeger in your Kubernetes cluster:

```bash
helm install jaeger jaegertracing/jaeger --namespace monitoring
```

2. Forward Jaeger to your local machine:

```bash
kubectl port-forward svc/jaeger-query -n monitoring 16686:16686
```

3. Open Jaeger UI:

```bash
👉 http://localhost:16686
```

4. Search for traces related to your application.

### Step 4: Integrating Traces with Grafana

1. Add OpenTelemetry as a data source in Grafana.
2. Import a pre-built tracing dashboard (ID: 14932).
3. View distributed traces alongside Prometheus metrics.

## Activity for Today

1. Deploy OpenTelemetry Collector in Kubernetes.
2. Instrument a microservice with OpenTelemetry.
3. Visualize distributed traces in Jaeger.

## What’s Next?

Tomorrow, we’ll explore Chaos Engineering to test system resilience and failure handling.

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

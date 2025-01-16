---
title: 'Day 3: Getting Started with Kubernetes – The Foundation of Cloud Native'
excerpt: 'Welcome to Day 3 of our Zero to Platform Engineer in 30 Days challenge! Today, we’re diving into Kubernetes, the backbone of modern cloud-native platforms. Whether you’re new to Kubernetes or looking to refine your skills, this post will give you a strong foundation to build on.'
publishDate: Jan 16 2025
tags:
  - 'Platform Engineering'
  - Devops
  - 'Cloud Native'
  - SRE
  - kubernetes

seo:
  image:
    src: '/components-of-kubernetes.svg'
    alt: 'Components of Kubernetes'

isFeatured: true
---

Welcome to Day 3 of our Zero to Platform Engineer in 30 Days challenge! Today, we're diving into Kubernetes, the backbone of modern cloud-native platforms. Whether you're new to Kubernetes or looking to refine your skills, this post will give you a strong foundation to build on.

## What Is Kubernetes?

Kubernetes (K8s for short) is an open-source platform for managing and scaling containerized applications. It's like having a super-smart conductor for your orchestra of applications, ensuring everything runs smoothly, even when things go wrong.

### Why Is Kubernetes Essential?

1.	**Scalability**: Automatically adjusts resources based on demand.
2.	**Resilience**: Detects and fixes issues (e.g., restarts failed containers).
3.	**Efficiency**: Maximizes hardware usage across your infrastructure.
4.	**Portability**: Run it on any cloud or on-premise environment.

For Platform Engineers, Kubernetes is the cornerstone of building developer-friendly platforms that can handle modern workloads efficiently.

## The Core Building Blocks of Kubernetes

To understand Kubernetes, you need to grasp its main components. Here are the essentials:

1. **Pod**
* The smallest deployable unit in Kubernetes.
* Usually contains a single container but can also include multiple tightly coupled containers.
2. **Node**
* A worker machine (physical or virtual) that runs your pods.
* Nodes are managed by the Kubernetes control plane.
3.	**Cluster**
* A group of nodes working together, forming the environment where your applications run.
4.	**Namespace**
* Logical partitions within a cluster, useful for organizing resources.
* Example: Separate environments for development, staging, and production.
5.	**Service**
* Provides stable networking to ensure your pods can communicate with each other.
6.	**Deployment**
* A higher-level abstraction that manages pods and ensures your application is running as expected.

## How Kubernetes Fits into Platform Engineering

While Docker is a popular choice for building and running containers, Kubernetes doesn't depend on Docker specifically. Instead, Kubernetes uses container runtimes that comply with the Container Runtime Interface (CRI).

### Getting Practical: Deploy Your First Pod

Let's get hands-on with Kubernetes. Follow these steps to deploy your first application:

### Step 1: Set Up Kubernetes
1.	Use Minikube or kind for local development: 
  * [Minikube Installation Guide](https://minikube.sigs.k8s.io/docs/start/).
  * [kind Installation Guide](https://kind.sigs.k8s.io/docs/user/quick-start/).
2.	Alternatively, use a managed Kubernetes service like:
* [AWS EKS](https://aws.amazon.com/eks/)
* [Google Kubernetes Engine (GKE)](https://cloud.google.com/kubernetes-engine)
* [Azure Kubernetes Service (AKS)](https://azure.microsoft.com/en-us/products/kubernetes-service)

### Step 2: Create a Pod Definition

Create a file named pod.yaml with the following content:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: zero-to-pod
  labels:
    app: my-app
spec:
  containers:
  - name: nginx
    image: nginx:latest
    ports:
    - containerPort: 80
```

### Step 3: Deploy the Pod

Run the following commands:

```bash
kubectl apply -f pod.yaml
kubectl get pods
```
You should see your pod running!

Expose your pod to access it in your browser:

```bash
kubectl port-forward pod/zero-to-pod 8080:80
```

Visit http://localhost:8080 to see the NGINX welcome page.

## Activity for Day 3

Here’s how you can solidify today’s concepts:
1.	Deploy the example pod above.
2.	Experiment with the following commands:
```bash
kubectl describe pod zero-to-pod
```
```bash
kubectl logs pod/zero-to-pod
```
```bash
kubectl delete pod zero-to-pod
```
3.	Research how Services can provide stable networking for your pods. Bonus: Try creating a simple service to expose your pod.

**Bonus: Share your findings on social media using the hashtag #ZeroToPlatformEngineer!**

## What’s Next?

Now that you’ve deployed your first pod, it’s time to explore Kubernetes Deployments and how to scale applications effectively. Stay tuned for Day 4, where we’ll dive into the magic of rolling updates and scaling your workloads.


All the example code from this post has been uploaded to GitHub for you to explore and use. 🎉

👉 Check it out here: Zero to Platform Engineer Repository

Feel free to clone the repo, experiment with the code, and even contribute if you’d like! 🚀


## Follow the Series!

🎉 Don’t miss a single step in your journey to becoming a Platform Engineer! 🎉

This post is just the beginning. Here’s what we’ve covered so far and what’s coming up next:

* [Day 0: Introduction – What’s Platform Engineering?](https://parraletz.space/blog/00-0-to-platform-eng-intro/)
* [Day 1: Introduction to the CNCF Landscape](https://parraletz.space/blog/01-0-to-platform-eng-day1/)
* [Day 2: Day 2: Containers and Docker – The Building Blocks of Cloud Native]()
* Day 3: Containers and Kubernetes – The Building Blocks of Cloud Native (You are here!)
 
👉 Bookmark this blog and check back every day for new posts in the series.
📣 Share your progress on social media with the hashtag #ZeroToPlatformEngineer to connect with other readers!
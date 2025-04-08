---
title: 'Day 5: Kubernetes Services – Connecting Your Applications'
excerpt: 'Welcome to Day 5 of the Zero to Platform Engineer in 30 Days challenge! Yesterday, we explored Deployments and Scaling in Kubernetes, learning how to manage application lifecycles and scale them effectively. Today, we’ll dive into Kubernetes Services, which are essential for enabling communication between your applications and making them accessible to users.'
publishDate: Jan 18 2025
tags:
  - 'Platform Engineering'
  - Devops
  - 'Cloud Native'
  - SRE
  - kubernetes
seo:
  image:
    src: '/day5.webp'
    alt: 'Day 5'

commentsEnabled: true
---

Welcome to Day 5 of the Zero to Platform Engineer in 30 Days challenge! Yesterday, we explored Deployments and Scaling in Kubernetes, learning how to manage application lifecycles and scale them effectively. Today, we’ll dive into Kubernetes Services, which are essential for enabling communication between your applications and making them accessible to users.

## What Are Kubernetes Services?

In Kubernetes, a Service is an abstraction that defines a logical set of Pods and a policy for accessing them. Services allow applications to:

- Communicate with each other inside the cluster.
- Be exposed to external traffic for user access.

Without Services, Pods would be difficult to communicate with because their IP addresses change frequently as they are created or destroyed.

## Types of Kubernetes Services

There are four main types of Services, each with a specific purpose:

1. ClusterIP (Default)

- Exposes the Service inside the cluster.
-     Use case: Internal communication between applications.

2. NodePort

- Exposes the Service on a specific port of each Node’s IP.
- Use case: Debugging or direct access during development.

3. LoadBalancer

- Integrates with cloud provider load balancers to expose the Service externally.
- Use case: Production-ready applications needing external access.

4. ExternalName

- Maps the Service to an external DNS name.
- Use case: Accessing external resources like APIs.

## How Services Fit Into Platform Engineering

As a Platform Engineer, Kubernetes Services are critical for:

- Enabling seamless communication between microservices.
- Managing traffic between internal and external systems.
- Simplifying application access with stable endpoints.

## Hands-On: Creating Kubernetes Services

### Step 1: Deploy a Simple Application

Let’s deploy an example application to work with.

1. Create a file named nginx-deployment.yaml:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
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
          ports:
            - containerPort: 80
```

2. Apply the Deployment:

```bash
kubectl apply -f nginx-deployment.yaml
```

3. Verify the Pods are running:

```bash
kubectl get pods
```

## Step 2: Create a ClusterIP Service

1. Create a file named nginx-service.yaml:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: ClusterIP
```

2. Apply the Service:

```bash
kubectl apply -f nginx-service.yaml
```

3. Verify the Service:

```bash
kubectl get services
```

4. Access the Service inside the cluster:

```bash
kubectl exec -it nginx-deployment -- curl http://nginx-service
```

🎯 What’s happening?
The Service provides a stable IP and DNS name (nginx-service) that can be used to communicate with the Pods.

## Step 3: Create a NodePort Service

1. Edit the nginx-service.yaml file and change the type to NodePort:

```yaml
type: NodePort
```

2. Apply the changes:

```bash
kubectl apply -f nginx-service.yaml
```

3. Get the NodePort:

```bash
kubectl get services
```

4. Access the application:

```bash
curl http://<node-ip>:<node-port>
```

🎯 Pro tip: Use minikube service nginx-service if you’re running Minikube.

### Step 4: Expose the Service with a LoadBalancer (Optional)

If you’re using a cloud provider, you can change the type to LoadBalancer:

```yaml
type: LoadBalancer
```

2. Apply the changes:

```bash
kubectl apply -f nginx-service.yaml
```

3. Verify the Service:

```bash
kubectl get services
```

## Activity for Today

- Deploy the example application and create a ClusterIP Service to connect the Pods.
- Change the Service to NodePort and access it from your browser.
- If using a cloud provider, try creating a LoadBalancer Service for external access.

## What’s Next?

With Services, you now know how to connect your applications and expose them to users. Tomorrow, we’ll explore ConfigMaps and Secrets, which help manage configuration and sensitive data in Kubernetes.

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

👉 Bookmark this blog and check back every day for new posts in the series.
📣 Share your progress on social media with the hashtag #ZeroToPlatformEngineer to connect with other readers!

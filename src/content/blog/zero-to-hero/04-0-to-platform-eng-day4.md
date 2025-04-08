---
title: 'Day 4: Deployments and Scaling in Kubernetes'
excerpt: 'Welcome to Day 4 of the Zero to Platform Engineer in 30 Days challenge! Now that we’ve covered the basics of Kubernetes, it’s time to explore one of its most powerful features: Deployments and Scaling. These tools let you manage your applications efficiently, ensuring they’re always running and able to handle demand.'
publishDate: Jan 17 2025
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

commentsEnabled: true
---

Welcome to Day 4 of the Zero to Platform Engineer in 30 Days challenge! Now that we’ve covered the basics of Kubernetes, it’s time to explore one of its most powerful features: Deployments and Scaling. These tools let you manage your applications efficiently, ensuring they’re always running and able to handle demand.

## What You’ll Learn Today

By the end of this post, you'll be able to:

1. Create a Kubernetes Deployment.
2. Scale your application up and down.
3. Perform a rolling update to deploy a new version.
4. Roll back if something goes wrong.

Let's get started! 🚀

### Step 1: Create Your First Deployment

1. Create a file called deployment.yaml with the following content:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: zero-to-platform-eng
spec:
  replicas: 2
  selector:
    matchLabels:
      app: zero-to-platform-eng
  template:
    metadata:
      labels:
        app: zero-to-platform-eng
    spec:
      containers:
        - name: nginx
          image: nginx
          ports:
            - containerPort: 80
```

2. Apply the Deployment to your cluster:

```bash
kubectl apply -f deployment.yaml
```

3. Check if your Pods are running:

```bash
kubectl get pods
```

🎯 What's happening?

_Kubernetes creates 2 replicas of your application (as defined in replicas: 2), ensuring your app is always available._

### Step 2: Scale Your Deployment

1. Scale the Deployment up to 5 replicas:

```bash
kubectl scale deployment zero-to-platform-eng --replicas=5
```

2. Verify the new number of Pods:

```bash
kubectl get pods
```

🎯 Pro tip:
_Scaling down works the same way:_

```bash
kubectl scale deployment zero-to-platform-eng --replicas=1
```

### Step 3: Perform a Rolling Update

1. Update your application to use a new image version:

```bash
kubectl set image deployment/zero-to-platform-eng nginx=nginx:1.21.0
```

2. Check the rollout status:

```bash
kubectl rollout status deployment/zero-to-platform-eng
```

🎯 What's happening?

\*Kubernetes performs a rolling update, gradually replacing old Pods with new ones to avoid downtime.

3. Confirm the new Pods are running the updated version:

```bash
kubectl get pods -o wide
```

### Roll Back a Deployment

1. If something goes wrong, undo the update:

```bash
kubectl rollout undo deployment/zero-to-platform-eng
```

2. Verify that the Deployment has reverted to the previous version:

```bash
kubectl rollout status deployment/zero-to-platform-eng
```

🎯 Pro tip:
_You can see the revision history of your Deployment with:_

```bash
kubectl rollout history deployment/zero-to-platform-eng
```

### Step 5: Clean Up (Optional)

When you’re done experimenting, delete the Deployment:

```bash
kubectl delete deployment zero-to-platform-eng
```

## Activity for Today

Here's your challenge for Day 4:

1. Create a Deployment using the steps above.
2. Scale it up and down and observe how Kubernetes manages the Pods.
3. Perform a rolling update with a new image and roll it back if needed.
4. Bonus: Try changing the replicas value directly in deployment.yaml and applying it again.

## What's Next?

You've now mastered the basics of Deployments and scaling! 🎉 Tomorrow, we'll dive into Kubernetes Services, which enable communication between your Pods and the outside world.

👉 Check it out here: [Zero to Platform Engineer Repository](https://github.com/parraletz/zero-to-platform-engineer)

Feel free to clone the repo, experiment with the code, and even contribute if you'd like! 🚀

## Follow the Series!

🎉 Don't miss a single step in your journey to becoming a Platform Engineer! 🎉

This post is just the beginning. Here's what we've covered so far and what's coming up next:

- [Day 0: Introduction - What’s Platform Engineering?](https://parraletz.space/blog/00-0-to-platform-eng-intro/)
- [Day 1: Introduction to the CNCF Landscape](https://parraletz.space/blog/01-0-to-platform-eng-day1/)
- [Day 2: Day 2: Containers and Docker - The Building Blocks of Cloud Native](https://parraletz.space/blog/02-0-to-platform-eng-day2/)
- [Day 3: Containers and Kubernetes - The Building Blocks of Cloud Native](https://parraletz.space/blog/03-0-to-platform-eng-day3/)
- Day 4: Deployments and Scaling in Kubernetes - Let's Get Practical (You are here!)

👉 Bookmark this blog and check back every day for new posts in the series.
📣 Share your progress on social media with the hashtag #ZeroToPlatformEngineer to connect with other readers!

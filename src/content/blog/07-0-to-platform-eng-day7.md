---
title: 'Day 7: Recap and Hands-On Challenges for Week 1'
excerpt: 'Congratulations! 🎉 You’ve completed the first week of the Zero to Platform Engineer in 30 Days challenge. This week, we’ve covered the foundations of Cloud Native and Kubernetes, setting the stage for everything to come. Today, we’ll recap the key concepts, reflect on your progress, and dive into some hands-on challenges to solidify your learning.'
publishDate: Jan 20 2025
tags:
  - 'Platform Engineering'
  - Devops
  - 'Cloud Native'
  - SRE
  - kubernetes
seo:
  image:
    src: '/post-day7.webp'
    alt: 'Day 7'

isFeatured: true
---

Congratulations! 🎉 You’ve completed the first week of the Zero to Platform Engineer in 30 Days challenge. This week, we’ve covered the foundations of Cloud Native and Kubernetes, setting the stage for everything to come. Today, we’ll recap the key concepts, reflect on your progress, and dive into some hands-on challenges to solidify your learning.


## Week 1 Recap: What You’ve Learned

### Day 0: Introduction to the Series
* What is Platform Engineering?
* Why it’s essential in the modern tech landscape.

### Day 1: CNCF Landscape
* Overview of the CNCF ecosystem.
* Key projects like Kubernetes, Prometheus, and ArgoCD.

### Day 2: Containers and Docker

* What containers are and how they work.
* Building and running your first Docker container.

### Day 3: Getting Started with Kubernetes
* Core Kubernetes concepts (Nodes, Pods, Clusters, Namespaces).
* Deploying your first Pod.

### Day 4: Deployments and Scaling

* Creating Kubernetes Deployments.
* Scaling applications and rolling updates.

### Day 5: Kubernetes Services

* How Services connect applications and expose them to the outside world.
* ClusterIP, NodePort, and LoadBalancer types.

## Day 6: ConfigMaps and Secrets

* Managing application configurations with ConfigMaps.
* Storing sensitive data securely with Secrets.
* Using tools like Stakater Reloader and External Secrets Operator.


## Week 1 Hands-On Challenges

Now it’s time to put everything you’ve learned into action. Complete these challenges to reinforce your knowledge:

### Challenge 1: Build and Deploy a Containerized Application

1. Create a simple application (e.g., Node.js, Python, or Go).
2. Containerize the application using Docker.
3. Push the image to a container registry (e.g., Docker Hub or AWS ECR).
4. Deploy it to Kubernetes using a Deployment and expose it with a Service.

### Challenge 2: Use ConfigMaps and Secrets
1. Create a ConfigMap to store application environment variables.
2. Create a Secret to store sensitive data (e.g., an API key).
3. Update your Deployment to use the ConfigMap and Secret as environment variables.

### Challenge 3: Scale and Update Your Application

1. Perform a rolling update to deploy a new version of your application.
2. Roll back the update if something goes wrong.

### Challenge 4: Connect Two Applications Using Services
1. Deploy two applications (e.g., frontend and backend).
2. Use a ClusterIP Service to connect the backend to the frontend.
3. Expose the frontend with a NodePort or LoadBalancer Service.

### Challenge 5: Persistent Storage

1. Create a Persistent Volume and Persistent Volume Claim.
2. Deploy an application (e.g., NGINX) that uses the PVC for storage.
3. Verify that data persists even if the Pod is deleted and recreated.

### Reflection: How’s It Going?

#### Take a moment to reflect on your progress:

* What concepts or tools have you enjoyed the most?
* Which areas would you like to explore further?
* Are there any challenges you’ve encountered that need more clarification?



## What’s Next?

Next week, we’ll dive into Infrastructure as Code (IaC) and CI/CD pipelines, focusing on automating and optimizing your workflows. Here’s a sneak peek:

* Day 8: Introduction to Infrastructure as Code.
* Day 9: Getting Started with Terraform.
* Day 10: Automating Kubernetes with Terraform.

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

 
👉 Bookmark this blog and check back every day for new posts in the series.
📣 Share your progress on social media with the hashtag #ZeroToPlatformEngineer to connect with other readers!
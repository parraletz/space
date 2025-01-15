---
title: 'Day 2: Containers and Docker – The Building Blocks of Cloud Native'
excerpt: 'Welcome to Day 2 of the Zero to Platform Engineer in 30 Days challenge! Today, we’re diving into the fundamentals of containers, the role of Docker, and exploring other container runtimes like CRI-O and containerd. By the end of this post, you’ll know how to build, run, and manage containerized applications.'
publishDate: Jan 15 2025
tags:
  - 'Platform Engineering'
  - Devops
  - 'Cloud Native'
  - SRE

isFeatured: true
---

Welcome to Day 2 of the Zero to Platform Engineer in 30 Days challenge! Today, we’re diving into the fundamentals of containers, the role of Docker, and exploring other container runtimes like CRI-O and containerd. By the end of this post, you’ll know how to build, run, and manage containerized applications.

## What Are Containers?

A container is a portable, lightweight environment that includes:

* Code: Your application logic.
* Dependencies: Libraries and binaries required to run your app.
* Configuration files: All necessary settings.

Containers make it easy to run applications consistently across different environments.

## Why Are Containers Important?

1.	Portability: Build once, run anywhere—on your laptop, in the cloud, or on-premises.
2.	Efficiency: Containers are lightweight and resource-friendly compared to virtual machines.
3.	Consistency: Eliminate “it works on my machine” problems.
4.	Isolation: Keep applications independent and avoid conflicts.

## What Is Docker?

Docker is a developer-friendly platform that simplifies container creation and management. It provides:

* Docker Images: Blueprints for creating containers.
* Docker Containers: Running instances of images.
* Docker CLI: A command-line interface to interact with containers.

## Container Runtimes: CRI-O and containerd

While Docker is a popular choice for building and running containers, Kubernetes doesn’t depend on Docker specifically. Instead, Kubernetes uses container runtimes that comply with the Container Runtime Interface (CRI).

### What Is CRI-O?

* A lightweight container runtime focused on Kubernetes.
* Developed to align with Open Container Initiative (OCI) standards.
* Offers minimal overhead and direct integration with Kubernetes.

### What Is containerd?

* Originally created by Docker, now a CNCF project.
* Powers Docker under the hood but can be used independently.
* Supports advanced features like snapshot management and image transfers.


### When to Use Docker, CRI-O, or containerd

|      Feature          |Docker                          |CRI-O                         |containerd|  
|----------------|-------------------------------|-----------------------------|--------|
|Ease of Uses| Developer-friendly           | Kubernetes-only            |Kubernetes + Cloud|
|Focus          |General-purpose            |Kubernetes            |Kubernetes + OCI|
|Performance          |Moderate overhead|Lightweight|Lightweight|

For Platform Engineers, understanding these runtimes is essential for making the right decisions based on the project requirements.

### How Containers Fit into Platform Engineering

As a Platform Engineer, containers provide the foundation for:

* **Standardization**: Ensure consistent environments for all developers.
* **Scalability**: Work seamlessly with orchestrators like Kubernetes.
* **Automation**: Simplify application builds and deployments.

Choosing the right runtime (Docker, CRI-O, or containerd) ensures that your platform meets the specific needs of your organization.

## Hands-On: Building and Running Containers

Let’s get hands-on and create a containerized application using Docker, CRI-O, and containerd. Follow these steps:

### Step 1: Install a Container Runtime

Choose one of the following runtimes to start:
* **Docker**: Install [Docker Desktop](https://docs.docker.com/desktop/) or [Docker Engine](https://docs.docker.com/engine/).
* **CRI-O**: Follow the official [CRI-O installation guide.](https://cri-o.io/).
* **containerd**: Install via your package manager or use the [containerd setup guide](https://containerd.io/).

* Docker

```bash
docker --version
```


### Step 2: Create a Simple App
1.	Create a file named app.js:

```javascript
// app.js
const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from a container!\n');
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
````
2.	Create a Dockerfile to containerize the app:

```bash
// Dockerfile
FROM node:lts-bullseye
WORKDIR /usr/src/app
COPY . .
CMD ["node", "app.js"]
```

### Step 3: Build the Container Image

```bash
docker build -t zero-to-platform-engineer .
```

### Step 4: Run the Container

Run your containerized app with your runtime:

```bash
docker run -p 3000:3000 zero-to-platform-engineer
```

Access the app at http://localhost:3000.

## Activity for Today

* Build and run the app with Docker.
* Research how to build and run containers using CRI-O or containerd.
* Reflect: Which runtime feels most intuitive to you, and why?

**Bonus: Share your findings on social media using the hashtag #ZeroToPlatformEngineer!**
**Bonus: Experiment with CRI-O or containerd on a test cluster.**

## Conclusion

Containers are the foundation of cloud-native technologies, and understanding how to build and run them with tools like Docker, CRI-O, and containerd is essential for Platform Engineers. In the next step, we’ll introduce Kubernetes, which takes container orchestration to the next level.


All the example code from this post has been uploaded to GitHub for you to explore and use. 🎉

👉 Check it out here: Zero to Platform Engineer Repository

Feel free to clone the repo, experiment with the code, and even contribute if you’d like! 🚀


## Follow the Series!

🎉 Don’t miss a single step in your journey to becoming a Platform Engineer! 🎉

This post is just the beginning. Here’s what we’ve covered so far and what’s coming up next:

* [Day 0: Introduction – What’s Platform Engineering?](https://parraletz.space/blog/00-0-to-platform-eng-intro/)
* [Day 1: Introduction to the CNCF Landscape](https://parraletz.space/blog/01-0-to-platform-eng-day1/)
* Day 2: Day 2: Containers and Docker – The Building Blocks of Cloud Native (You are here!)
 




👉 Bookmark this blog and check back every day for new posts in the series.
📣 Share your progress on social media with the hashtag #ZeroToPlatformEngineer to connect with other readers!
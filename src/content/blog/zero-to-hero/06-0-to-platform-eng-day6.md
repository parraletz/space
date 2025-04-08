---
title: 'Day 6: ConfigMaps and Secrets – Managing Configurations in Kubernetes'
excerpt: 'Welcome to Day 6 of the Zero to Platform Engineer in 30 Days challenge! Today, we’re focusing on ConfigMaps and Secrets, two essential tools for managing application configurations and sensitive data in Kubernetes.'
publishDate: Jan 19 2025
tags:
  - 'Platform Engineering'
  - Devops
  - 'Cloud Native'
  - SRE
  - kubernetes
seo:
  image:
    src: '/post-6.webp'
    alt: 'Day 6'

commentsEnabled: true
---

Welcome to Day 6 of the Zero to Platform Engineer in 30 Days challenge! Today, we’re focusing on ConfigMaps and Secrets, two essential tools for managing application configurations and sensitive data in Kubernetes.

## What Are ConfigMaps and Secrets?

In Kubernetes, ConfigMaps and Secrets allow you to manage configuration and sensitive information separately from your application code.

### ConfigMaps

- Store non-sensitive configuration data, like environment variables or config files.
- Make your applications more flexible and portable.

### Secrets

- Designed to store sensitive data, such as API keys, passwords, or TLS certificates.
- Data is encoded in Base64 for secure storage and transmission.

🎯 Why Separate Configurations? Separating configurations from code enables better portability, security, and easier updates without redeploying your app.

## How They Fit Into Platform Engineering

As a Platform Engineer, you’ll often work with ConfigMaps and Secrets to:

- Standardize configuration management across environments.
- Securely store sensitive data.
- Enable dynamic updates without disrupting application runtime.

## Hands-On: Working with ConfigMaps and Secrets

Let’s create and use ConfigMaps and Secrets step by step.

### Step 1: Create and Use a ConfigMap

1. Create a file named configmap.yaml:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  APP_ENV: production
  APP_DEBUG: 'false'
  APP_VERSION: '1.0.0'
```

2. Apply the ConfigMap:

```bash
kubectl apply -f configmap.yaml
```

3. Verify the ConfigMap:

```bash
kubectl get configmap app-config -o yaml

```

4. Use the ConfigMap in a Deployment: Create a file named deployment-configmap.yaml:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: configmap-app
spec:
  replicas: 1
  selector:
    matchLabels:
      app: configmap-app
  template:
    metadata:
      labels:
        app: configmap-app
    spec:
      containers:
        - name: app-container
          image: nginx
          env:
            - name: APP_ENV
              valueFrom:
                configMapKeyRef:
                  name: app-config
                  key: APP_ENV
            - name: APP_DEBUG
              valueFrom:
                configMapKeyRef:
                  name: app-config
                  key: APP_DEBUG
```

5. Apply the Deployment:

```bash
kubectl apply -f deployment-configmap.yaml
```

6. Verify the environment inside the Pod:

```bash
kubectl exec -it configmap-app -- printenv APP_ENV
```

## Step 2: Create and Use a Secret

1. Create a Secret using the Kubernetes CLI:

```bash
kubectl create secret generic app-secret \
  --from-literal=DB_PASSWORD=supersecurepassword \
  --from-literal=API_KEY=12345abcd
```

2. Verify the Secret:

```bash
kubectl get secret app-secret -o yaml
```

Note: The secret is stored in base64 format.

3. Use the Secret in a Deployment: Create a file named deployment-secret.yaml:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: secret-app
spec:
  replicas: 1
  selector:
    matchLabels:
      app: secret-app
  template:
    metadata:
      labels:
        app: secret-app
    spec:
      containers:
        - name: app-container
          image: nginx
          env:
            - name: DB_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: app-secret
                  key: DB_PASSWORD
            - name: API_KEY
              valueFrom:
                secretKeyRef:
                  name: app-secret
                  key: API_KEY
```

4. Apply the Deployment:

```bash
kubectl apply -f deployment-secret.yaml
```

5. Verify the environment inside the Pod:

```bash
kubectl exec -it secret-app -- printenv DB_PASSWORD
```

### Step 3: Update ConfigMaps and Secrets

ConfigMaps and Secrets can be updated dynamically without restarting your Pods.

1. Update the ConfigMap:

```bash
kubectl edit configmap app-config
```

2. Update the Secret:

```bash
kubectl delete secret app-secret
kubectl create secret generic app-secret \
  --from-literal=DB_PASSWORD=newpassword
```

🎯 Pro Tip: Use kubectl rollout restart to restart Pods if updates don’t apply automatically.

## Bonus 1: Automate Rollouts with Stakater Reloader

By default, Kubernetes doesn’t restart Pods automatically when you update a ConfigMap or Secret. However, tools like Stakater Reloader can help automate this process by detecting changes and triggering a Pod restart.

### What Is Stakater Reloader?

[Stakater Reloader](https://github.com/stakater/Reloader) is a Kubernetes operator that watches for changes in ConfigMaps and Secrets and automatically rolls out Deployments, StatefulSets, or DaemonSets that reference them.

## Managing Secrets Dynamically with External Secrets Operator

When your application requires secrets managed outside Kubernetes (e.g., AWS Secrets Manager, HashiCorp Vault, or Google Secret Manager), the [External Secrets Operator](https://external-secrets.io/latest/) simplifies the process by syncing external secrets directly into Kubernetes as Secrets.

## What Is External Secrets Operator?

External Secrets Operator bridges external secret management systems with Kubernetes. It:

- Syncs secrets from external providers directly into Kubernetes.
- Reduces manual secret management.
- Enhances security by centralizing secret storage in secure systems.

## Activity for Today

- Set up Stakater Reloader to automate rollouts for ConfigMaps and Secrets.
- Set up External Secrets Operator and sync a secret from an external provider.
- Use the synced secret in a Deployment and verify it works.

## What’s Next?

Now that you’ve learned about managing configurations and secrets dynamically, it’s time to move to stateful applications and persistent storage in Kubernetes. Stay tuned for Day 7: Persistent Volumes and Persistent Volume Claims!

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

👉 Bookmark this blog and check back every day for new posts in the series.
📣 Share your progress on social media with the hashtag #ZeroToPlatformEngineer to connect with other readers!

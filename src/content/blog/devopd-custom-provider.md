---
title: Create a devpod K8S custom provider for EKS
excerpt: Learn to deploy a devpod in AWS EKS with this guide covering custom pod manifest setup, devcontainer integration, and essential configurations."
publishDate: 'Jan 20 2024'
tags:
  - AWS
  - Devops
  - devopd
  - devcontainers
commentsEnabled: true
seo:
  image:
    src: '/post-2.webp'
    alt: devopd
---

You are probably already familiar with devcontainers and how they significantly contribute to the development cycle. Until now, I have used them locally to standardize the technology stack versions within our platform engineering team.

However, what happens when we want to take this to a higher, collaborative level? Indeed, options like GitHub Codespaces can be useful in some scenarios. But what if you need to test APIs hosted in your AWS EKS cluster?

At this point, devpod.sh becomes an essential tool. Next, I will explain how you can deploy a devcontainer in your EKS cluster using devpod.

### Prerequisites

- Have an AWS EKS Cluster configured.
- Have access to your AWS EKS cluster.

### Devpod Installation

```bash
curl -L -o devpod "https://github.com/loft-sh/devpod/releases/latest/download/devpod-linux-amd64" && sudo install -c -m 0755 devpod /usr/local/bin && rm -f devpod
```

### Provider Custom Configuration

```yaml
name: kubernetes-ppr-single
version: v0.1.2
icon: https://devpod.sh/assets/kubernetes.svg
home: https://github.com/occmundial/ppr-samples
description: |-
  DevPod on Kubernetes
optionGroups:
  - options:
      - KUBERNETES_NAMESPACE
      - DISK_SIZE
    name: 'Options'
    defaultVisible: true
  - options:
      - KUBERNETES_CONTEXT
      - KUBERNETES_CONFIG
      - POD_MANIFEST_TEMPLATE
    name: 'Kubernetes Config'
  - options:
      - CLUSTER_ROLE
      - SERVICE_ACCOUNT
      - CREATE_NAMESPACE
      - KUBECTL_PATH
      - INACTIVITY_TIMEOUT
      - STORAGE_CLASS
      - PVC_ACCESS_MODE
      - RESOURCES
      - POD_MANIFEST_TEMPLATE
      - NODE_SELECTOR
      - HELPER_RESOURCES
      - HELPER_IMAGE
      - LABELS
      - DOCKERLESS_DISABLED
      - DOCKERLESS_IMAGE
    name: 'Advanced Options'
options:
  INJECT_GIT_CREDENTIALS:
    default: true
  DISK_SIZE:
    description: The default size for the persistent volume to use.
    default: 10Gi
    global: true
  KUBERNETES_CONTEXT:
    description: The kubernetes context to use. E.g. my-kube-context
    default: arn:aws:eks:us-west-2:936737784124:cluster/ubbe
    userProvided: true
  KUBERNETES_CONFIG:
    description: The kubernetes config to use. E.g. /path/to/my/kube/config.yaml
    default: /Users/jparra/.kube/ubbe
  KUBERNETES_PULL_SECRETS_ENABLED:
    description: If true, DevPod will try to use the pull secrets from the current context.
    default: 'true'
    type: boolean
    global: true
  KUBERNETES_NAMESPACE:
    description: The kubernetes namespace to use
    command: |-
      NAMESPACE=$(${KUBECTL_PATH} config view --kubeconfig=${KUBERNETES_CONFIG} --context=${KUBERNETES_CONTEXT} --minify -o jsonpath='{..namespace}' 2>/dev/null || true)
      if [ -z "${NAMESPACE}" ]; then
        NAMESPACE=devpod
      fi
      echo $NAMESPACE
  CREATE_NAMESPACE:
    description: If true, DevPod will try to create the namespace.
    default: 'true'
    type: boolean
    global: true
  CLUSTER_ROLE:
    description: If defined, DevPod will create a role binding for the given cluster role.
    global: true
  SERVICE_ACCOUNT:
    description: If defined, DevPod will use the given service account for the dev container.
    global: true
  HELPER_IMAGE:
    description: The image DevPod will use to find out the cluster architecture. Defaults to alpine.
    global: true
  HELPER_RESOURCES:
    description: The resources to use for the workspace init container. E.g. requests.cpu=100m,limits.memory=1Gi
    global: true
  KUBECTL_PATH:
    description: The path where to find the kubectl binary.
    default: kubectl
    global: true
  INACTIVITY_TIMEOUT:
    description: 'If defined, will automatically stop the pod after the inactivity period. Examples: 10m, 1h'
  STORAGE_CLASS:
    description: If defined, DevPod will use the given storage class to create the persistent volume claim. You will need to ensure the storage class exists in your cluster!
    global: true
  PVC_ACCESS_MODE:
    description: If defined, DevPod will use the given access mode to create the persistent volume claim. You will need to ensure the storage class support the given access mode!. E.g. RWO or ROX or RWX or RWOP
    global: true
  NODE_SELECTOR:
    description: The node selector to use for the workspace pod. E.g. my-label=value,my-label-2=value-2
    global: true
  RESOURCES:
    description: The resources to use for the workspace container. E.g. requests.cpu=500m,limits.memory=5Gi,limits.gpu-vendor.example/example-gpu=1
    global: true
    default: requests.cpu=2,request.memory=4
  POD_MANIFEST_TEMPLATE:
    description: Pod manifest template file path used as template to build the devpod pod. E.g. /path/pod_manifest.yaml
    global: false
    required: true
    userProvided: true
    default: /Users/jparra/workspaces/occ/ppr-examples/devpod/providers/single/pod.yaml
  LABELS:
    description: The labels to use for the workspace pod. E.g. devpod.sh/example=value,devpod.sh/example2=value2
    global: true
    default: ppr.occdeep.io/devenvironment=backstage
  DOCKERLESS_IMAGE:
    description: The dockerless image to use.
    global: true
  DOCKERLESS_DISABLED:
    description: If dockerless should be disabled. Dockerless is the way DevPod uses to build images directly within Kubernetes. If dockerless is disabled and no image is specified, DevPod will fail instead.
    global: true
    default: 'false'
agent:
  containerInactivityTimeout: ${INACTIVITY_TIMEOUT}
  local: true
  dockerless:
    disabled: ${DOCKERLESS_DISABLED}
    image: ${DOCKERLESS_IMAGE}
  binaries:
    KUBERNETES_PROVIDER:
      - os: linux
        arch: amd64
        path: https://github.com/loft-sh/devpod-provider-kubernetes/releases/download/v0.1.2/devpod-provider-kubernetes-linux-amd64
        checksum: 75e3e3a21c0659684d2ebd8ce6a5f56fe88237c5ea03725c98d992a8dec1dbe2
      - os: linux
        arch: arm64
        path: https://github.com/loft-sh/devpod-provider-kubernetes/releases/download/v0.1.2/devpod-provider-kubernetes-linux-arm64
        checksum: c515d8e1f2600eeb6e6c9cff62b42211e28f2731305b747fbc0a9238ff855daa
      - os: darwin
        arch: amd64
        path: https://github.com/loft-sh/devpod-provider-kubernetes/releases/download/v0.1.2/devpod-provider-kubernetes-darwin-amd64
        checksum: 820c61001d77d16cc97dd67da8320d6d1c35675b53b665db4782e18b37a2f8eb
      - os: darwin
        arch: arm64
        path: https://github.com/loft-sh/devpod-provider-kubernetes/releases/download/v0.1.2/devpod-provider-kubernetes-darwin-arm64
        checksum: c022dea2479eaa1c07225d8ed1db39046b7155bf97ccdb8a0feb9ff0b20e6d4f
      - os: windows
        arch: amd64
        path: https://github.com/loft-sh/devpod-provider-kubernetes/releases/download/v0.1.2/devpod-provider-kubernetes-windows-amd64.exe
        checksum: 2bacffc7c2bcb4c24501ffc351daadf6fe3854a81d669f793ae37644f8fb19a0
  driver: custom
  custom:
    findDevContainer: ${KUBERNETES_PROVIDER} find
    commandDevContainer: ${KUBERNETES_PROVIDER} command
    startDevContainer: ${KUBERNETES_PROVIDER} start
    stopDevContainer: ${KUBERNETES_PROVIDER} stop
    runDevContainer: ${KUBERNETES_PROVIDER} run
    deleteDevContainer: ${KUBERNETES_PROVIDER} delete
    targetArchitecture: ${KUBERNETES_PROVIDER} target-architecture
exec:
  command: |-
    "${DEVPOD}" helper sh -c "${COMMAND}"
```

Inside that file, I want you to pay attention to **INJECT_GIT_CREDENTIALS**, **KUBERNETES_CONTEXT**, **KUBERNETES_CONFIG**, and **POD_MANIFEST_TEMPLATE**, where:

- **INJECT_GIT_CREDENTIALS**: Injects the local git credentials.
- **KUBERNETES_CONTEXT**: Configure the context you are using. Even if you only use the default, I recommend configuring the context name with kubectl config get-contexts.
- **KUBERNETES_CONFIG**: The path to the Kubernetes configuration file. For some, like me, it's preferable to have a file per cluster (a matter of preference), but I still recommend this configuration.
- **POD_MANIFEST_TEMPLATE**: Going to the next level means you can also customize the pod deployed in your cluster. In my case, as I use Karpenter, I have some formerly called provisioners with specific computing specifications. Here is an example of that configuration:

```yaml
apiVersion: v1
kind: Pod
metadata:
  namespace: devpod
  name: devpod-ppr-
spec:
  tolerations:
    - key: 'dedicated'
      operator: 'Equal'
      effect: 'NoSchedule'
      value: 'devpod'
  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
          - matchExpressions:
              - key: dedicated
                operator: In
                values:
                  - devpod
```

With this, we force the creation of pods with the label value dedicated to devpod.

### Now, let's put it all together.

I have uploaded the files to a repository so you can clone the repo and use the manifests with the options that make sense to you.

```bash
gh repo clone parraletz/devpod-manifests
```

We create the provider.

```bash
devpod provider add devpod-manifests/provider-k8s/provider.yaml
```

Confirm that it was added correctly with the command `devpod provider list`.

```bash
            NAME          | VERSION | DEFAULT | INITIALIZED |      DESCRIPTION
  ------------------------+---------+---------+-------------+------------------------
    kubernetes-ppr-single | v0.1.2  | true    | true        | DevPod on Kubernetes
```

We create our workspace

```bash
devpod up git@github.com:parraletz/service-example.git --id service-test --provider kubernetes-ppr-single --devcontainer-path .devcontainer/devcontainer.json  --debug
```

Excellent! We now have our devpod running within our EKS cluster.

Happy coding!!!

### References:

- [devpod](https://devpod.sh)
- [Github Manifest](https://github.com/parraletz/devpod-manifests)

---
title: Get existing subnets by Tags in AWS CDK w/ Python
excerpt: This is a "Today I learned" style post so it is intended to be very simple and short but with valuable information or information that can help solve the same problem I faced :D
publishDate: 'Jan 12 2023'
tags:
  - AWS
  - CDK
  - Python
  - Devops  
seo:
  image:
    src: '/post-1.webp'
    alt: Coding
---

![Coding](/post-1.webp)

Infrastructure as code is not something new for me, I have experience with terraform and ansible , but I want to migrate to AWS CDK (the reasons will be discussed later in another post) and something typical like getting the subnets that exist in a vpc and then from them get the subnets with a certain tag can be something very easy in terraform or if you use AWS CLI, but in AWS CDK it has its challenge :D

As you read in the title I opted for python as language to write code with AWS CDK.

Here we go!



## Requirements

- Boto3
- AWS CDK

First of all, we need to create a function to get the subnets with tag **“Tier”** and filter them by **VpcId** :

```python
import logging
import os
import boto3
from botocore.exceptions import ClientError
import json
from dotenv import load_dotenv

load_dotenv()

logger = logging.getLogger()
logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s: %(levelname)s: %(message)s')
sess = boto3.Session(profile_name=os.getenv('AWS_PROFILE'),
                     region_name=os.getenv("AWS_REGION"))
vpc_client = sess.client("ec2")

def get_subnets(tag_value, vpc):
    try:
        paginator = vpc_client.get_paginator('describe_subnets')
        response_iterator = paginator.paginate(
            Filters=[{
                'Name': 'tag:Tier',
                'Values': [tag_value]
            }]
        )
        full_result = response_iterator.build_full_result()
        subnet_list = []
        for subnet in full_result['Subnets']:
            if subnet['VpcId'] == vpc:
                subnet_list.append(subnet)
        logger.info(f"Subnets selected: {subnet_list}")
    except ClientError:
        logger.exception('Could not describe subnets.')
        raise
    else:
        return subnet_list
```

After that, we have to integrate it with AWS CDK, for that we will use the following snippet to get the subnets with tag **“Tier”** and value **“Public”**:


```python
from aws_cdk import (
    # Duration,
    Stack,
    CfnOutput,
    aws_ec2 as ec2,
    aws_autoscaling as autoscaling,
    aws_elasticloadbalancingv2 as elb,
    aws_iam as iam
)
from constructs import Construct
from cdk_app_sample.subnets import get_subnets
import os

class CdkAppSample(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        ... 
        vpc = ec2.Vpc.from_lookup(
            self, "VPC", vpc_id=vpc_id)

        public_subnets_ids = []

        for subnet in get_subnets("Public", os.getenv('VPC_ID')):
            public_subnets_ids.append(
                ec2.Subnet.from_subnet_id(self, subnet['SubnetId'], subnet['SubnetId'])
            )
        subnets_public = ec2.SubnetSelection(
            subnets = public_subnets_ids
        )

        alb = elb.ApplicationLoadBalancer(self, f"{os.getenv('PROJECT_NAME')}-alb",
                                          load_balancer_name=f"{os.getenv('PROJECT_NAME')}-alb",
                                          vpc=vpc,
                                          internet_facing=True,
                                          vpc_subnets=subnets_public
        )
```

As you have seen, one of the advantages you have when using AWS CDK is that you can integrate it with other libraries like boto3 to maximize the capabilities of AWS CDK, although I know that AWS CDK should have a simpler method , but as they have their tradeoffs.

**_Happy cdking!_**
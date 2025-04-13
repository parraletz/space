---
title: "Reflexion: La modernización no empieza con tecnología, empieza con criterio"
excerpt: 'Modernizar no es solo tecnología. Es colaboración, criterio y humildad técnica. Reflexiones reales desde la trinchera de plataforma'.
publishDate: '2025-04-10'
language: 'es'
tags:
  - modernization
  - platform-engineering
  - aws-community-builder
  - spanish
commentsEnabled: true
seo:
  image:
    src: '/modernization/04.png'
    alt: 'Evolución de una arquitectura monolítica hacia una plataforma moderna'
---

Esta serie de 3 artículos nace de experiencias reales.  
De haber trabajado en entornos completamente **on-premise**, donde todo corría sobre **Citrix Xen**, más tarde migrando a **OpenStack**, y eventualmente culminando en una transformación completa hacia la nube.

Pero la infraestructura fue solo una parte de esa historia.

También he vivido y sufrido la evolución en la entrega de software: desde tener pipelines casi artesanales con **Jenkins**, automatizaciones forzadas con **Ansible**, 
flujos que funcionaban "si nadie tocaba nada" en **Drone**, hasta finalmente llegar a prácticas más modernas y confiables con **GitOps**, **feature flags**, **blue/green deployments** y **canary releases**.

Y si algo me ha quedado claro, es esto:  

**La tecnología importa, sí. Pero no es el punto de partida.**  
Lo más valioso es tener el criterio para cuestionar qué hace sentido para tu contexto, para ese momento en particular, con el equipo que tienes hoy.

---

## El ego tecnológico (y cómo a veces nos juega en contra)

**Modernizar no es un ejercicio de ego tecnológico.**

No se trata de usar lo último que está en hype, ni de demostrar que puedes meter Rust, Istio, Kubernetes, Service Mesh y AI en producción.

Tampoco se trata de imponer herramientas sin considerar la experiencia, no se trada del famoso "Por requerimientos del negocio", cuando seamos sinceros, es mas por el miedo de perder el control.

Se trata de resolver problemas reales, con herramientas que tu equipo puede entender, mantener y hacer evolucionar.

Porque al final del día, el verdadero seniority no se mide por cuántos tools conoces,  
sino por la madurez para elegir las herramientas que te daran mas tiempo para enfocarte en lo que realmente importa

Y eso créeme no sale en ninguna certificación.

---

## Algunas reflexiones finales

**Imagina esto:** una empresa donde las decisiones se toman desde lo alto, sin consultar a todo el equipo, solo con el equipo que con el que siempre has trabajado, equipo con el que dices conocer, 
equipo al que le dices hazlo y lo hacen sin cuestionar cual automatas. Se elige una herramienta, un lenguaje, una arquitectura, y simplemente se espera que todos se alineen… aunque los que van a construir 
y mantener eso ni siquiera fueron escuchados.

Yo estuve ahí. Y sé que eso no termina bien.

Ahora imagina otro escenario, casi igual de peligroso:  
Una empresa que **adopta contenedores, elixir, la nube, microservicios**… porque está de moda. Pero sin entrenamiento. Sin estrategia. Sin preparación organizacional.

He visto a equipos de desarrollo frustrados, con herramientas que no entienden. Equipos de producto que no saben por qué sus tiempos de entrega se alargan. Y plataforma apagando incendios, sin poder dar el soporte que quisieran.

¿Eso es modernizar? O es simplemente renombrar el caos.

También he cuestionado decisiones como migrar de una tecnología open source bien entendida a otra que aunque más “enterprise” no estaba pensada para ese caso de uso. Y la pregunta que no dejo de hacerme es:  
**¿Eso realmente escala? ¿O solo complica lo que ya funcionaba?**

---

## Modernizar también cambia cómo trabajamos

Una parte poco hablada de la modernización es cómo **reconfigura la forma en que se organizan los equipos.**

No basta con tener infra, desarrollo y producto como silos.  
La verdadera modernización empuja a que todos trabajen más cerca, con objetivos compartidos, con contextos cruzados.

Y ahí **entra Conway**, con una frase que cada vez cobra más sentido:

> *"Las organizaciones diseñan sistemas que reflejan su estructura de comunicación."*

Si los equipos no hablan entre sí, si cada área ve las cosas desde su propia torre,  
el sistema que van a construir va a ser igual: fragmentado, rígido, lento.

Pero si plataforma se integra desde el inicio, si producto entiende las restricciones técnicas, si desarrollo tiene ownership real del ciclo de vida…  
entonces sí estamos construyendo algo que puede evolucionar.

---

## El verdadero punto de partida

Modernizar no es solo moverse a la nube, ni adoptar microservicios, ni tener más YAMLs.

Modernizar es detenerte un momento y preguntarte:

- ¿Qué problema estamos resolviendo?
- ¿Qué tan listos estamos para este cambio?
- ¿Qué necesitamos habilitar para que esto funcione a largo plazo?

Y esas preguntas **no se responden desde una sola área.**  
Se responden colaborando: producto, plataforma, desarrollo, negocio, todos con la misma intención.

---

Gracias por seguir esta serie.  
Si en algún punto te hizo cuestionarte algo una práctica, una decisión, una idea que dabas por sentada  
entonces ya cumplió su objetivo.

## Referencias

- [AWS Prescriptive Guidance – Strategy for Modernizing Applications](https://docs.aws.amazon.com/prescriptive-guidance/latest/strategy-modernizing-applications/welcome.html)
- [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)
- [AWS CAF – Operations Perspective](https://docs.aws.amazon.com/whitepapers/latest/aws-caf-operations-perspective/aws-caf-operations-perspective.html)
- [The Frugal Architect](https://thefrugalarchitect.com/laws/)
- [Martin Fowler – Legacy Modernization with Generative AI](https://martinfowler.com/articles/legacy-modernization-gen-ai.html)

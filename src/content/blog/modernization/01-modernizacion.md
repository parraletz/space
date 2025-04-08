---
title: ¿Por dónde empiezo? Estrategia de modernización desde la perspectiva de un Platform Engineer
excerpt: 'Modernizar no es solo usar Kubernetes o romper monolitos. Desde la trinchera de un Platform Engineer, modernizar significa entender por qué, planear cómo y habilitar el cambio sin poner en riesgo la operación. En este post exploramos las fases estratégicas de modernización y cómo traducirlas en acciones reales desde plataforma, con ejemplos prácticos, herramientas open source y aprendizajes aplicables al día a día.'
publishDate: '2025-04-02'
language: 'es'
tags:
  - modernization
  - platform-engineering
  - aws-community-builder
  - spanish
isFeatured: true
seo:
  image:
    src: '/01-modernization.webp'
    alt: 'Evolución de una arquitectura monolítica hacia una plataforma moderna'
---

> Modernizar aplicaciones suena bien en presentaciones. Pero si eres tú quien mantiene la infraestructura, el CI/CD y la estabilidad del sistema… sabes que la historia es muy diferente.

Como Platform Engineers, no solo construimos sistemas: creamos el terreno para que otros equipos puedan desarrollar sin fricciones. Y cuando se lanza la iniciativa de _"vamos a modernizar"_, nuestro rol va más allá de ejecutar una migración. Se trata de trazar el camino, evitar baches técnicos y alinear cada decisión con lo que necesita el negocio.

Pero… ¿Por dónde se empieza realmente?

---

## Modernizar ≠ solo cambiar tecnología

Modernizar no es simplemente reemplazar EC2 por Lambda o romper un monolito porque "ya toca". Es un enfoque estratégico para hacer que las aplicaciones y el entorno que las soporta sean más ágiles, escalables, observables, seguras y fáciles de operar.

Desde la perspectiva de AWS, el proceso se puede dividir en cuatro fases principales:

1. **Evaluar**
2. **Planificar**
3. **Habilitar**
4. **Implementar**

Como Platform Engineers, estamos involucrados en todas. Entenderlas a fondo nos permite aportar más valor que simplemente ejecutar tareas de infraestructura. Nos convertimos en habilitadores del cambio.

---

## Evaluar: entender el _porqué_

Antes de mover una línea de código o levantar un nuevo clúster, necesitamos responder una pregunta básica, pero poderosa: **¿por qué queremos modernizar?**

### Algunas señales típicas:

- El ciclo de desarrollo es lento, lleno de pasos manuales y aprobaciones.
- No hay visibilidad real del estado del sistema en producción.
- Las actualizaciones causan más miedo que confianza.
- Hay dependencias críticas difíciles de escalar o migrar.

Y también: ¿qué está buscando el negocio? ¿Reducir costos? ¿Acelerar time-to-market? ¿Cumplir requisitos de compliance?

Modernizar sin un propósito claro es una receta para la frustración. Esta etapa nos invita a entender el contexto completo, no solo el stack.

---

## Planificar: alinear expectativas y trazar el mapa

Una vez que hay claridad en el _porqué_, toca definir el _cómo_. En esta fase nos hacemos preguntas como:

- ¿Qué componentes modernizamos primero?
- ¿Qué estrategia aplica mejor para cada caso: rehost, replatform, refactor?
- ¿Cómo evitamos que la modernización se convierta en un proyecto eterno?

Aquí es donde el equipo de plataforma tiene mucho que aportar:

- Levantando restricciones técnicas y riesgos tempranos.
- Proponiendo soluciones sostenibles y seguras.
- Ayudando a estimar esfuerzos con base en datos reales.

No se trata de prometer lo imposible, sino de construir un camino claro, iterativo y medible.

---

## Ejemplo práctico: el dilema del monolito

Imagina un sitio web que ha sido construido y mantenido con las mismas prácticas de hace 10 años. Todo está en un gran monolito: backend, frontend, jobs batch, todo junto. La arquitectura no ha evolucionado, y aunque el negocio sigue operando, cada cambio se siente como una cirugía de alto riesgo.

La aplicación está desplegada en la nube, pero operada como si estuviera en un datacenter tradicional:

- Los entornos se configuran a mano.
- No hay separación clara entre dev, staging y producción.
- Las instancias viven por meses, corriendo sistemas operativos no optimizados para la nube (sin hardening, sin autoescalado, sin integración con el ecosistema cloud).
- El monitoreo es limitado, reactivo y difícil de accionar.

Los despliegues:

- Toman horas.
- Requieren pasos manuales y validaciones por correo.
- Están completamente controlados por el equipo de "infraestructura".
- Solo se hacen fuera del horario laboral... _por si algo falla_.

### ¿Qué podría hacer una estrategia de modernización?

- **Evaluación:** Se identifican los principales dolores: tiempos de despliegue lentos, falta de visibilidad, operación manual, y arquitectura acoplada.
- **Planificación:** Se decide modernizar de forma incremental. No se reescribe todo, pero sí se extraen componentes clave como autenticación o procesamiento de pagos.
- **Habilitación:** El equipo de plataforma automatiza la infraestructura con Terraform, introduce GitOps con ArgoCD, y habilita observabilidad con stack open source:

  - **Grafana** para visualización,
  - **Mimir** para métricas,
  - **Tempo** para trazas,
  - **Loki** para logs,
  - **Alloy** como colector unificado.

  Todo con validaciones en PRs, testing automatizado y ambientes reproducibles.

- **Implementación:** Se activa mirroring de tráfico para probar servicios nuevos en paralelo, se introducen deployments canary y los despliegues pasan a ser frecuentes, predecibles y sin drama.

Con cada iteración, el equipo gana confianza, acelera el delivery y reduce riesgos. El sistema sigue funcionando, pero ahora sobre una base más saludable, observable y preparada para escalar sin miedo.

---

## Plataforma: de ejecutor a habilitador

Una plataforma moderna no solo expone clústeres y pipelines. Habilita a los equipos para construir, experimentar y desplegar con seguridad y velocidad.

Como Platform Engineers, somos responsables de:

- Crear entornos consistentes, seguros y repetibles.
- Automatizar hasta donde tenga sentido (sin matar la flexibilidad).
- Proveer visibilidad y métricas desde el inicio (no al final).
- Colaborar activamente con desarrollo, QA, seguridad y negocio.

Modernizar sin involucrar al equipo de plataforma desde el inicio es como rediseñar una ciudad sin hablar con quienes construyen sus calles.

---

## ¿Y ahora qué?

Si estás por iniciar un proceso de modernización, tómate una pausa antes de abrir la consola.

Hazte estas preguntas:

- ¿Sabemos por qué estamos modernizando?
- ¿Qué valor esperamos generar (y cómo lo vamos a medir)?
- ¿Qué tan preparados estamos, como plataforma, para soportar ese cambio?

La verdadera modernización no empieza con Kubernetes ni termina con microservicios. Empieza con contexto, estrategia y colaboración.

---

👉 **En el próximo post:** _Cómo evaluar tu portafolio de aplicaciones para priorizar con cabeza fría y sin dejarte llevar por modas._

---

## Referencias

- [AWS Prescriptive Guidance – Strategy for Modernizing Applications](https://docs.aws.amazon.com/prescriptive-guidance/latest/strategy-modernizing-applications/welcome.html)
- [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)
- [AWS CAF – Operations Perspective](https://docs.aws.amazon.com/whitepapers/latest/aws-caf-operations-perspective/aws-caf-operations-perspective.html)
- [The Frugal Architect](https://thefrugalarchitect.com/laws/)
- [Martin Fowler – Legacy Modernization with Generative AI](https://martinfowler.com/articles/legacy-modernization-gen-ai.html)

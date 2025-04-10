---
title: "Manos a la obra: habilitación y ejecución con un mindset de plataforma"
excerpt: 'Modernizar no siempre es reescribir en Go y meter todo en Kubernetes.'
publishDate: '2025-04-10'
language: 'es'
tags:
  - modernization
  - platform-engineering
  - aws-community-builder
  - spanish
isFeatured: true
seo:
  image:
    src: '/modernization/02.png'
    alt: 'Evolución de una arquitectura monolítica hacia una plataforma moderna'
---

> Modernizar todo no siempre es la mejor decisión. Saber qué mover primero puede marcar la diferencia entre el caos y el progreso.

Como Platform Engineers, no solo ayudamos a ejecutar modernización, también podemos influir en **qué** se moderniza primero.  
Porque seamos honestos: **no todo vale la pena mover, reescribir o romper en microservicios.** Y si tratamos de hacer todo al mismo tiempo, el resultado puede ser más caos que mejora.

---

## La trampa de migrar todo (solo porque sí)

Es tentador pensar que modernizar = cambiar todo. Pero ese enfoque puede ser costoso, lento y, en muchos casos, innecesario.

Hay sistemas que están bien como están. Otros que son demasiado críticos para tocarlos sin una estrategia sólida. Y otros más que simplemente… _no lo valen_.

**Desde plataforma, podemos hacer una gran diferencia si ayudamos a separar lo urgente, lo importante y lo que simplemente puede esperar.**

---

## Cómo evaluar con cabeza fría: criterios clave

Aquí van algunos factores que podemos usar para evaluar y priorizar aplicaciones o componentes antes de modernizarlos:

### 1. Valor al negocio

- ¿La app soporta un proceso core o es de soporte?
- ¿Impacta directamente la experiencia del usuario?

### 2. Dolor técnico

- ¿Es difícil de mantener, escalar o monitorear?
- ¿El despliegue es manual, lento o riesgoso?
- ¿No hay testing ni control de versiones?

### 3. Frecuencia de cambio

- ¿Es un componente activo, que se actualiza seguido?
- ¿O está casi en modo "mantenimiento"?

### 4. Riesgo operacional

- ¿Es fuente frecuente de incidentes?
- ¿Es parte de rutas críticas como login, checkout, pagos?

### 5. Dependencias cruzadas

- ¿Está acoplado a otras piezas del sistema?
- ¿Su cambio impacta a muchos otros equipos?

Puedes incluso poner estos criterios en una matriz de priorización sencilla (valor vs esfuerzo), y empezar por los quick wins o los grandes dolores.

---

## Señales desde plataforma que no debes ignorar

A veces no necesitas una auditoría formal para detectar que algo debería modernizarse. Algunas señales evidentes que podemos ver desde el día a día:

- **Pipelines con muchos pasos manuales o rotos.**  
  Ejemplo: después de hacer merge, hay que ejecutar scripts a mano en Jenkins y avisar por Correo para continuar.

- **Monitoreo inexistente, logs duplicados, sin trazabilidad.**  
  Ejemplo: se cae un servicio y nadie sabe qué pasó porque solo hay logs locales en la instancia.

- **Deployments con miedo, programados a medianoche "por si algo explota".**  
  Ejemplo: solo el líder técnico puede hacer deploy… y solo lo hace los viernes a las 11 PM.

- **Apps con cero commits en el último año… pero que siguen en producción.**  
  Ejemplo: una API interna que aún maneja pagos, sin cambios desde 2021 y con dependencias vulnerables.

- **Manuales de despliegue en PDF o en wikis olvidadas.**  
  Ejemplo: el paso 3 dice "abrir cliente RDP y correr deploy-final.bat".

- **El clásico: "nadie sabe bien cómo funciona, solo Juan".**  
  Ejemplo: cualquier duda técnica sobre ese sistema se responde con "pregúntale a Juan, él fue quien lo armó".

- **Un servicio interno centraliza los cambios y bloquea la automatización.**  
  Ejemplo: en lugar de tener GitOps o pipelines por PR, todos los cambios deben pasar por una app interna donde alguien aprueba manualmente los deploys.

Estos puntos no siempre aparecen en roadmaps, porque en algunos caso suelen omirse del plan estrategico porque "si asi funciona, para que le movemos"... pero son oro puro para priorizar modernización con impacto real.

---

## Herramientas que pueden ayudarte

Desde el equipo de plataforma, tenemos acceso a muchas fuentes de datos que pueden alimentar una evaluación más objetiva:

- **Grafana dashboards:** métricas de errores, tráfico, tiempos de respuesta, uso real.
- **Repositorios Git:** frecuencia de cambios, número de contribuidores, historial de incidentes.
- **CI/CD pipelines:** duración, tasa de fallos, procesos manuales.
- **Observabilidad:** trazas con Tempo, logs con Loki, métricas con Mimir.
- **Well-Architected Tool de AWS:** revisión estructurada de riesgos y oportunidades.

La clave es transformar datos en decisiones. No modernizar por moda, sino por necesidad.

---

## Rol de plataforma en esta fase

Como Platform Engineers, tenemos una posición privilegiada para facilitar este análisis, no para decidir por todos, pero sí para:

- Brindar visibilidad técnica clara a negocio y producto.
- Proveer contexto desde operaciones, seguridad, despliegue y monitoreo.
- Documentar recomendaciones basadas en evidencia.
- Diseñar una estrategia de modernización escalonada, sin bloquear a los equipos.

> Nuestro superpoder es convertir caos técnico en una conversación estratégica.

---

## ¿Y ahora qué?

Si ya sabes qué duele más y qué mueve más valor… ahí es donde debes empezar.  
No necesitas migrar todo para tener impacto. Prioriza, enfoca y entrega valor en ciclos cortos.

> Modernizar no es rehacerlo todo. Es elegir qué mejorar primero para avanzar sin romper lo que ya funciona.

---

👉 En el siguiente post: _cómo ejecutar una modernización efectiva desde plataforma, sin caer en parálisis o caos._

---

## Referencias

- [AWS Prescriptive Guidance – Strategy for Modernizing Applications](https://docs.aws.amazon.com/prescriptive-guidance/latest/strategy-modernizing-applications/welcome.html)
- [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)
- [AWS CAF – Operations Perspective](https://docs.aws.amazon.com/whitepapers/latest/aws-caf-operations-perspective/aws-caf-operations-perspective.html)
- [The Frugal Architect](https://thefrugalarchitect.com/laws/)
- [Martin Fowler – Legacy Modernization with Generative AI](https://martinfowler.com/articles/legacy-modernization-gen-ai.html)

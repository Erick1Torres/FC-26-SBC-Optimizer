# Agile y su importancia en el software

## ¿Que es agiles?

Agiles es una metodología que su enfoque divide el trabajo en fases y que hace hincapié en la mejora y la entrega continua, agil beneficia a los equipos al permitir la planicación adaptativa, la ejecución rapira y la evaluación continua, lo que lleva a mejores resultados.

El enfoque tradicional **en cascada** conlleva que cada equipo trabaje en un proyecto por separado y luego lo entregue al siguiente grupo. En cambio, agil se se basa en equipos colavorativos e interdiciplinares y hace hincapié en la comuicación abierta, el trabajo en equipo la capacidad de adaptación y la confianza.

En pocas palabras agil es una filosofia de trabajo que busca entregar valor de forma rapida y constante es un no parar, en lugar de planearlo todo el año y luego programarlo esta filosofia hace grupos pequeños pero efisientes para poder corregir errores y sobre la marcha.

-----

## Scrum

En pocas palabras scrum es un marco de trabajo(Framework) agil diseñado para ayudar a equipos y organizaciones a generar valor mediante soluciones adaptables a problemas complejos.

Basicamente **Scrum** es un esquema liviano basado en aprender de la experiencia y reducir el desperdicio de tiempo.

------

### 1.Roles
Ya que el equipo es pequeño(generalmente es un aproximado de 10 a 15 personas) y es tambien autogestionado. esto hace que no exista la jerarquia interna en el grupo.

- **Proct Owner(Dueño del producto):** Es el responsable de maximizar el valor del producto. Este se encarga de gestionar el **Product blacklog** que es lo mas importante para el cliente y de el negocio.

- **Scrum Master:** Es un lider que sirve al equipo. Su mision es el asegurarle al grupo el el entendimiento y como aplicar el scrum, eliminando impedimentos que bloquean el proceso del equipo.

- **Developers(Desarrolladores):** Basicamente los desarrolladores son personas multifuncionales y comprometidas a crear cualquiere aspecto de incremento utilizable de cada sprint, basicamente tienen odas las habilidades necesarias para hacer el trabajo.

------

### 2.Los sprint: El corazon de Scrum.

Un Sprint es un contenedor de tiempo (time-box) de un mes o menos (comunmente 2 semanas) en el que se crea un incremento de producto "terminado". Tan pronto como termina un Sprint, comienza el siguiente.

Dentro de un Sprint ocurren los siguientes eventos:

- Sprint Planning: Se define qué se va a hacer y cómo se va a lograr el objetivo.

- Daily Scrum: Reunión diaria de 15 minutos para que los desarrolladores inspeccionen el progreso hacia el objetivo del Sprint.

- Sprint Review: Al final del Sprint, se presenta el trabajo realizado a los interesados (stakeholders) para recibir retroalimentación.

- Sprint Retrospective: El equipo analiza qué tal fue el Sprint en cuanto a personas, relaciones y herramientas, y planifica mejoras para el siguiente.

------

### 3.Artefactos y Backlogs.

| Artefacto | Descripción | Compromiso asociado |
| :--- | :--- | :--- |
| **Product Backlog** | Lista ordenada de todo lo que se necesita en el producto (funcionalidades, mejoras, correcciones). | **Objetivo del Producto:** La meta a largo plazo. |
| **Sprint Backlog** | El conjunto de elementos del Product Backlog seleccionados para el Sprint actual, más el plan para entregarlos. | **Objetivo del Sprint:** Por qué el Sprint es valioso. |
| **Incremento** | Es la suma de todos los elementos del Product Backlog completados durante el Sprint que cumplen con la "Definición de Hecho". | **Definición de Hecho (DoD):** Estándar de calidad que debe cumplir el trabajo. |

------

### 4.Los Tres Pilares de Scrum
Para que este sistema funcione, el equipo debe vivir bajo tres conceptos clave:

1. Transparencia: El proceso y el trabajo deben ser visibles para quienes lo realizan y quienes lo reciben.

2. Inspección: El progreso debe revisarse con frecuencia para detectar variaciones indeseadas.

3. Adaptación: Si algo se desvía, el proceso o los materiales deben ajustarse de inmediato.

-------

## Kanban y cómo se usa para organizar tareas

**Kanban** es un método visual de gestión de proyectos que permite a los equipos visualizar su trabajo, limitar el trabajo en curso y maximizar la eficiencia (o el flujo). Se basa en la mejora continua y en la entrega constante de valor.

**Conceptos de Kanban**

1. **Tablero Kanban:** Es la herramienta visual que representa el proceso de trabajo. Se divide en columnas que muestran las diferentes etapas por las que pasa una tarea.

2. **Tarjetas (Cards):** Cada tarea se representa mediante una tarjeta que contiene información relevante (título, descripción, responsable, fecha de entrega).

3. **Columnas:** Representan los estados del flujo de trabajo. Un flujo básico incluye:

- Por hacer (To Do): Tareas pendientes de iniciar.

- En proceso (Doing): Tareas que se están realizando en el momento.

- Hecho (Done): Tareas completadas con éxito.

4. **WIP (Work In Progress):** Es el límite de trabajo en curso. Se establece un número máximo de tareas que pueden estar en una columna al mismo tiempo para evitar cuellos de botella y saturación del equipo.

-----

### Uso para la organización de tareas:

- Paso 1: **Visualizar el flujo de trabajo.** Se mapean todas las etapas desde que surge una idea hasta que se entrega.

- Paso 2: **Definir el WIP.** Se decide cuántas tareas puede manejar el equipo simultáneamente en cada fase. Por ejemplo, si el límite de la columna "En proceso" es 3, nadie puede añadir una nueva tarea hasta que una de las actuales pase a la siguiente columna.

- Paso 3: **Mover las tareas.** A medida que el equipo tiene capacidad, "tira" de la tarea más prioritaria de la columna de la izquierda hacia la derecha.

- Paso 4: **Gestionar el flujo.** El equipo revisa el tablero para detectar dónde se acumulan las tareas (cuellos de botella) y ajusta el proceso para que el trabajo fluya de manera constante.

- Paso 5: **Mejora continua.** Kanban no es estático; el proceso se evalúa regularmente para añadir o eliminar columnas según la necesidad real del proyecto.

-----

## Diferencias entre Scrum y Kanban.

Si bien ambos son marcos de trabajo agiles **Scrum y Kanban** tienen un enfoque totanmente distinto sobre todo en lo que he investigado es en la organizacion de los equipos y el como se entregan los trabajos.

Tabla conparativa de Kanban y Scrum.

### Tabla Comparativa: Scrum vs. Kanban

| Característica | **Scrum** | **Kanban** |
| :--- | :--- | :--- |
| **Cadencia** | Ciclos fijos y regulares (Sprints de 1 a 4 semanas). | Flujo continuo. No hay ciclos fijos. |
| **Entrega de valor** | Al final de cada Sprint. | Entrega continua (según se terminan tareas). |
| **Roles definidos** | Roles específicos: Product Owner, Scrum Master y Desarrolladores. | No hay roles predefinidos (se adaptan a los existentes). |
| **Métrica clave** | *Velocity* (cuánto trabajo se completa por Sprint). | *Cycle Time* (cuánto tarda una tarea de inicio a fin). |
| **Cambios** | No se permiten cambios durante el Sprint actual. | Los cambios pueden ocurrir en cualquier momento. |
| **Límite de trabajo** | Limitado por la capacidad del equipo en el Sprint. | Limitado por columna mediante los **WIP Limits**. |

----

sus diferencias claves explicadas mas detallas he importantes son:

1. Planificación y Tiempos
En Scrum, el tiempo está dividido en bloques cerrados llamados Sprints. Todo lo que se planea al inicio del Sprint debe terminarse antes de que este acabe. En Kanban, no hay planificación por bloques; las tareas se van seleccionando de una lista de prioridades a medida que el equipo tiene capacidad libre.

2. Gestión del Cambio

- **Scrum es más rígido durante el ciclo de trabajo:** una vez empieza el Sprint, el equipo se enfoca en el objetivo pactado y no debería aceptar nuevas tareas.

- **Kanban es extremadamente flexible:** si surge una urgencia, se coloca en la parte superior de la lista de tareas pendientes y será la siguiente en ser procesada.

3. Roles y Responsabilidades

- **Scrum** requiere una estructura específica con responsabilidades muy claras para cada miembro.

- **Kanban** es un método que se "superpone" a lo que ya tienes. No exige que nadie cambie su título de trabajo; simplemente busca optimizar el flujo actual.

4. Indicadores de Éxito
Mientras que en Scrum el equipo mira hacia atrás para ver cuántos puntos o tareas completó en el Sprint anterior para planificar el siguiente, en Kanban el foco está en el tiempo. El objetivo es reducir el tiempo que una tarea pasa `atascada` en el tablero desde que entra hasta que se marca como hecha.

Cual es la mejor eleccion?

pues depende mucho de que si necesitas estructura, un proyecto con entregas incrementales claras y un equipo donde puedes trabajar sin interrupciones constantes **Scrum es mejor** pero si quieres un trabajo mas reactivo como soportes tecnicos o mantenimuentos y si prefieres un sistema de mejora continua sin presion de los plazos de sprint es **mucho mejor Kanban.**

----

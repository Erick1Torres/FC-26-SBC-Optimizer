# Conectando los dos mundos (Capa de Red)

Aquí es donde el Frontend y el Backend se dan la mano. He configurado una capa de red que usa la **Fetch API** de JavaScript para pedir los datos al servidor.

### Desafíos superados:
* **CORS:** Tuve que configurar el servidor para que permitiera que mi web de React le hiciera preguntas. Fue un reto entender por qué al principio el navegador bloqueaba las llamadas, pero lo solucioné con el middleware de CORS.
* **Estados de carga:** He añadido un sistema para que aparezca un mensaje de "Consultando al servidor..." mientras los datos viajan. Así el usuario nunca piensa que la web se ha quedado colgada.
* **Despliegue en Vercel:** Logré configurar la app para que funcione tanto en mi ordenador (localhost) como en internet, usando rutas relativas que se adaptan al entorno.
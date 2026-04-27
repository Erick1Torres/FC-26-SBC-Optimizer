# Puebas y testing

Este documento detallara las prebas realizadas para asegurar la estabilidad, conectividad y precision de optimizador de SBC

## 1. Las puebas de integracion
**Fronted y Backend**

se han realizado pruebas del flujo completo osea end-to-end para verificar que el cliente **React** consume correctamente los datos de la API en node.js.

------

## 2. Puebas de API 
**Backend**

se ha verificado los endpoints de una forma aislada para asi asegurar que la logica de negocio es correcta.

| Endpoint | Descripción | Resultado |
| :--- | :--- | :--- |
| `GET /api/v1/health` | Verifica el estado del servidor | 200 OK |
| `GET /api/v1/recipes/90` | Obtiene receta para media 90 | 200 OK |
| `GET /api/v1/recipes/99` | Media inexistente | 404 Not Found |


-----

## 3. Puebas de desplieque 
**vercel**

para mi esta fue la prueba mas complicada de todas ya que vercel igniraba por completo los carpetas que necesitaba que vea ya que debido a la complejidad del entorno monorepo, por ello se realizaron pruebas especificas de infraestructura:

- **Cors testing:** Verifique que el dominio de vercel permitiera peticiones entre el front y la funcion serverless.
- **Cors star testing:** Verificación del tiempo de respuesta inicial de las funciones de Vercel.
- **Cache Control:** Se testeo que las respuestas no queden cacheadas erróneamente (Error 304) mediante la configuración de headers en `vercel.json`.

----

## 4. Pruebas de Error y Robustez
- **Simulación de Servidor Caído:** Se verifico que el Frontend muestra el mensaje de error *"¿El servidor está encendido?"* cuando la API no responde.
- **Validación de Datos:** Se comprobo que el servidor realiza el `parseInt()` de los parametros de la URL para evitar errores de tipo.

----

## 5. Herramientas Utilizadas
- **Chrome DevTools (Network Tab):** Para monitorizar las peticiones, tiempos de respuesta y codigos de estado (200, 304, 404, 500).
- **Vercel Runtime Logs:** Para depurar errores de importacion y ejecucion en el servidor de produccion.
- **Postman:** Para pruebas aisladas de los controladores de la API.
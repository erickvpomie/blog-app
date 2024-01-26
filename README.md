# Blog Challenge (México Blog)

Este proyecto es un blog desarrollado en React, diseñado para ofrecer una experiencia de lectura fácil y agradable. A continuación, se proporciona información sobre la estructura del proyecto, cómo ejecutarlo y las tecnologías utilizadas.




## Requisitos

Asegúrate de tener instalado lo siguiente antes de ejecutar el proyecto:

- Node.js
- npm (Node Package Manager)


## Instalación

Para poder instalar el proyecto de manera local sigue los siguientes pasos:

- Clona este repositorio
- Instala las dependencias
```bash
  yarn install
```
- Crea una variable de entorno en la raiz del proyecto con el siguiente valor (.ENV)

```bash
  BLOG_API_URL=http://localhost:3000/api
```
- Asegurate de haber descargado el repositorio blog-api y haberlo ejecutado en el puerto 3000
- Ejecutar este proyecto con el siguiente comando:

```bash
  yarn dev
```
- Tendremos el proyecto corriendo en el puerto 5173
## Tecnologías utilizadas

Con la intención de utilizar sólo los recursos necesarios en este proyecto, se contaron con las siguientes librerias.

- tailwindCSS: Para el manejo de estilos
- zustand: Para el manejo de estados
- lucide-react: Integra iconos svg
- react-router: Para el manejo de rutas

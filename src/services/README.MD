# Talento Tech - API de Productos

Proyecto final del curso **Node.js** para administrar productos con **Firestore** y autenticación **JWT**.

## Autora

Gisela Gindelli

## Tecnologías

- Node.js
- Express
- Firebase Firestore
- JSON Web Token (JWT)
- dotenv
- body-parser
- cors

## Uso

1. Configurar las variables de entorno en el archivo `.env`.
2. Ejecutar `npm install` para instalar dependencias.
3. Ejecutar `npm run start` para iniciar el servidor.
4. Usar Postman o cualquier cliente HTTP para probar los endpoints.

## Endpoints principales

| Método | Ruta                     | Descripción                      | Requiere Token |
|--------|--------------------------|---------------------------------|---------------|
| POST   | `/auth/login`             | Login con usuario y contraseña   | No            |
| GET    | `/api/products`           | Obtener todos los productos      | Sí            |
| GET    | `/api/products/:id`       | Obtener producto por ID          | Sí            |
| POST   | `/api/products/create`    | Crear un nuevo producto          | Sí            |
| DELETE | `/api/products/:id`       | Eliminar producto por ID         | Sí            |

---

¡Gracias por revisar el proyecto! 

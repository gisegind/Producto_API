🚀 API REST de Productos | Talento Tech

 

**Proyecto Final - Curso Node.js TALENTO TECH** 

📅 Julio 2025 

👩‍💻 Autora: Gisela Gindelli 

✍️ Profesor : Jean Paul Ferreira

---

 

📝 **Descripción del Proyecto**

 

API RESTful diseñada para administrar un catálogo de productos. 

🔐 Protegida mediante autenticación por token (JWT) 

☁️ Conectada a una base de datos NoSQL en **Firebase Firestore**.

 

Permite realizar operaciones CRUD:

- **GET** productos

- **POST** nuevo producto

- **DELETE** por ID

- **GET** por ID 

Además, gestiona errores 404, 401/403 y 500 según corresponda.

 

📌 La arquitectura del proyecto está organizada en capas:

- `routes/`: define las rutas de productos y login.

- `controllers/`: recibe las peticiones HTTP.

- `services/`: contiene la lógica de negocio.

- `models/`: accede a la base de datos en Firebase.

 

---

 

🔗 **API desplegada:** 

https://producto-api.vercel.app

 

🛠 Para probar el login y las rutas protegidas, se requiere token (Bearer Token) generado tras iniciar sesión.

 

---

 

🧰 **Tecnologías Utilizadas**

 

- ⚙️ **Node.js + Express**

- 🔐 **JWT** (JSON Web Tokens)

- ☁️ **Firebase Firestore**

- 🌐 **CORS**

- 🧪 **Postman** (testing)

- ⚙️ **dotenv**

- 📦 **body-parser**

- 📁 **Git + GitHub**

- 🚀 **Vercel** (deploy)

 

---

 

💬 Para más detalles o pruebas: 

📁 [Repositorio en GitHub](https://github.com/gisegind/Producto_API)
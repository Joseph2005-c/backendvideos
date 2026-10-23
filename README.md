# Backend Videos

API REST hecha con **Node.js**, **Express** y **MongoDB (Mongoose)**.
Incluye conexión a MongoDB Atlas, modelo, controlador y rutas con las operaciones GET, POST, PUT y DELETE.

## Estructura

```
backendvideos/
├── index.js                      # Punto de entrada: inicia el servidor
├── server.js                     # Clase Server (Express, middlewares y rutas)
├── database/cnn_mongodb.js       # Conexión a MongoDB Atlas
├── models/ejemplo.model.js       # Modelo de Mongoose
├── controllers/ejemplo.controller.js
├── routes/ejemplo.routes.js
├── .env.example                  # Plantilla de variables de entorno
└── package.json
```

## Instalación

1. Clonar el repositorio e instalar dependencias:

   ```bash
   git clone https://github.com/Joseph2005-c/backendvideos.git
   cd backendvideos
   npm install
   ```

2. Crear el archivo `.env` copiando `.env.example` y poniendo tus datos de MongoDB Atlas:

   ```
   PORT=3000
   URI=mongodb+srv://USUARIO:CONTRASENA@TU_CLUSTER.mongodb.net/mis_apis
   ```

3. Iniciar el servidor:

   ```bash
   npm start
   ```

   Para desarrollo (se reinicia al guardar cambios): `npm run dev`

## Endpoints

Ruta base: `/api/ejemplo`

| Método | Ruta              | Descripción                  | Códigos de estado |
|--------|-------------------|------------------------------|-------------------|
| GET    | `/api/ejemplo`    | Lista todos los registros    | 200, 500          |
| GET    | `/api/ejemplo/:id`| Obtiene un registro por id   | 200, 400, 404, 500|
| POST   | `/api/ejemplo`    | Crea un registro             | 201, 400, 500     |
| PUT    | `/api/ejemplo/:id`| Actualiza un registro        | 200, 400, 404, 500|
| DELETE | `/api/ejemplo/:id`| Elimina un registro          | 200, 400, 404, 500|

Cualquier otra ruta responde `404` con `{ "message": "Ruta no encontrada" }`.

### Ejemplo de cuerpo (POST / PUT)

```json
{
  "nombre": "Mi primer registro",
  "descripcion": "Texto opcional",
  "activo": true
}
```

## Códigos de estado usados

- **200 OK:** consulta, actualización o eliminación correcta.
- **201 Created:** registro creado.
- **400 Bad Request:** datos faltantes o id no válido.
- **404 Not Found:** el registro o la ruta no existe.
- **500 Internal Server Error:** error inesperado del servidor o de la base de datos.

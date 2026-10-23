import express from 'express';
import * as db from './database/cnn_mongodb.js';
import ejemploRoutes from './routes/ejemplo.routes.js';

export default class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.conectarDB();
    this.middlewares();
    this.routes();
  }

  async conectarDB() {
    if (!db.isConnected) {
      await db.conectarADB();
    }
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use('/api/ejemplo', ejemploRoutes);

    // Cualquier ruta no definida
    this.app.use((req, res) => {
      res.status(404).json({ message: 'Ruta no encontrada' });
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`.yellow);
    });
  }
}
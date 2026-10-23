import mongoose from 'mongoose';
import 'colors';

// server.js revisa esta variable para no conectar dos veces
export let isConnected = false;

export const conectarADB = async () => {
  try {
    await mongoose.connect(process.env.URI);
    isConnected = true;
    console.log('Conectado a MongoDB Atlas'.green);
  } catch (error) {
    console.log('Error al conectar a MongoDB:'.red, error.message);
  }
};

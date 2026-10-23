import { Schema, model } from 'mongoose';

const EjemploSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, 'El nombre es obligatorio'],
      trim: true,
    },
    descripcion: {
      type: String,
      trim: true,
      default: '',
    },
    activo: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // agrega createdAt y updatedAt
    versionKey: false,
  }
);

export default model('Ejemplo', EjemploSchema);

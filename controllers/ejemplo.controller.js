import mongoose from 'mongoose';
import Ejemplo from '../models/ejemplo.model.js';

const idValido = (id) => mongoose.Types.ObjectId.isValid(id);

// GET /api/ejemplo  -> lista todos los registros
export const obtenerEjemplos = async (req, res) => {
  try {
    const ejemplos = await Ejemplo.find();
    return res.status(200).json(ejemplos);
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error al obtener los registros', error: error.message });
  }
};

// GET /api/ejemplo/:id  -> busca un registro por su id
export const obtenerEjemploPorId = async (req, res) => {
  try {
    const { id } = req.params;
    if (!idValido(id)) {
      return res.status(400).json({ message: 'El id no es válido' });
    }

    const ejemplo = await Ejemplo.findById(id);
    if (!ejemplo) {
      return res.status(404).json({ message: 'Registro no encontrado' });
    }
    return res.status(200).json(ejemplo);
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error al obtener el registro', error: error.message });
  }
};

// POST /api/ejemplo  -> crea un registro
export const crearEjemplo = async (req, res) => {
  try {
    const { nombre, descripcion, activo } = req.body ?? {};
    if (!nombre) {
      return res.status(400).json({ message: 'El nombre es obligatorio' });
    }

    const nuevo = await Ejemplo.create({ nombre, descripcion, activo });
    return res.status(201).json(nuevo);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    return res
      .status(500)
      .json({ message: 'Error al crear el registro', error: error.message });
  }
};

// PUT /api/ejemplo/:id  -> actualiza un registro
export const actualizarEjemplo = async (req, res) => {
  try {
    const { id } = req.params;
    if (!idValido(id)) {
      return res.status(400).json({ message: 'El id no es válido' });
    }

    const { nombre, descripcion, activo } = req.body ?? {};
    const cambios = {};
    if (nombre !== undefined) cambios.nombre = nombre;
    if (descripcion !== undefined) cambios.descripcion = descripcion;
    if (activo !== undefined) cambios.activo = activo;

    if (Object.keys(cambios).length === 0) {
      return res.status(400).json({ message: 'No hay datos para actualizar' });
    }

    const actualizado = await Ejemplo.findByIdAndUpdate(id, cambios, {
      new: true,
      runValidators: true,
    });
    if (!actualizado) {
      return res.status(404).json({ message: 'Registro no encontrado' });
    }
    return res.status(200).json(actualizado);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    return res
      .status(500)
      .json({ message: 'Error al actualizar el registro', error: error.message });
  }
};

// DELETE /api/ejemplo/:id  -> elimina un registro
export const eliminarEjemplo = async (req, res) => {
  try {
    const { id } = req.params;
    if (!idValido(id)) {
      return res.status(400).json({ message: 'El id no es válido' });
    }

    const eliminado = await Ejemplo.findByIdAndDelete(id);
    if (!eliminado) {
      return res.status(404).json({ message: 'Registro no encontrado' });
    }
    return res.status(200).json({ message: 'Registro eliminado correctamente' });
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error al eliminar el registro', error: error.message });
  }
};

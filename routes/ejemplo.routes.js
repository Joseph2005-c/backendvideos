import { Router } from 'express';
import {
  obtenerEjemplos,
  obtenerEjemploPorId,
  crearEjemplo,
  actualizarEjemplo,
  eliminarEjemplo,
} from '../controllers/ejemplo.controller.js';

const router = Router();

router.get('/', obtenerEjemplos);
router.get('/:id', obtenerEjemploPorId);
router.post('/', crearEjemplo);
router.put('/:id', actualizarEjemplo);
router.delete('/:id', eliminarEjemplo);

export default router;

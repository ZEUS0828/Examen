import { Router } from 'express';
import { 
    getEquipos, 
    getEquipoPorId, 
    postEquipo, 
    putEquipo, 
    patchEquipo, 
    deleteEquipo 
} from '../controladores/EquipoCtrl.js';

const router = Router();

// Rutas para el manejo de Equipo
router.get('/equipo', getEquipos);  // Obtener todos los registros de Equipo
router.get('/equipo/:id', getEquipoPorId);  // Obtener un registro de Equipo por ID
router.post('/equipo', postEquipo);  // Crear un nuevo registro de Equipo
router.put('/equipo/:id', putEquipo);  // Actualizar un registro de Equipo por ID
router.patch('/equipo/:id', patchEquipo);  // Actualizar parcialmente un registro de Equipo por ID
router.delete('/equipo/:id', deleteEquipo);  // Eliminar un registro de Equipo por ID

// Exportar las rutas
export default router;

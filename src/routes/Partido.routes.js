import { Router } from 'express';
import { 
    getPartidos, 
    getPartidoPorId, 
    postPartido, 
    putPartido, 
    patchPartido, 
    deletePartido 
} from '../controladores/PartidoCtrl.js';  // Asegúrate de que la ruta sea correcta

const router = Router();

// Rutas para el manejo de Partido
router.get('/partido', getPartidos);  // Obtener todos los registros de Partido
router.get('/partido/:id', getPartidoPorId);  // Obtener un registro de Partido por ID
router.post('/partido', postPartido);  // Crear un nuevo registro de Partido
router.put('/partido/:id', putPartido);  // Actualizar un registro de Partido por ID
router.patch('/partido/:id', patchPartido);  // Actualizar parcialmente un registro de Partido por ID
router.delete('/partido/:id', deletePartido);  // Eliminar un registro de Partido por ID

// Exportar las rutas
export default router;

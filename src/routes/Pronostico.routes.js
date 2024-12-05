import { Router } from 'express';
import { 
    getPronosticos, 
    getPronosticoPorId, 
    postPronostico, 
    putPronostico, 
    patchPronostico, 
    deletePronostico 
} from '../controladores/PronosticoCtrl.js';

const router = Router();

// Rutas para el manejo de Pronóstico
router.get('/pronostico', getPronosticos);  // Obtener todos los registros de Pronóstico
router.get('/pronostico/:id', getPronosticoPorId);  // Obtener un registro de Pronóstico por ID
router.post('/pronostico', postPronostico);  // Crear un nuevo registro de Pronóstico
router.put('/pronostico/:id', putPronostico);  // Actualizar un registro de Pronóstico por ID
router.patch('/pronostico/:id', patchPronostico);  // Actualizar parcialmente un registro de Pronóstico por ID
router.delete('/pronostico/:id', deletePronostico);  // Eliminar un registro de Pronóstico por ID

// Exportar las rutas
export default router;

import { Router } from 'express';
import { 
    getResultados, 
    getResultadoPorId, 
    postResultado, 
    putResultado, 
    patchResultado, 
    deleteResultado 
} from '../controladores/ResultadoCtrl.js';

const router = Router();

// Rutas para el manejo de Resultado
router.get('/resultado', getResultados);  // Obtener todos los registros de Resultado
router.get('/resultado/:id', getResultadoPorId);  // Obtener un registro de Resultado por ID
router.post('/resultado', postResultado);  // Crear un nuevo registro de Resultado
router.put('/resultado/:id', putResultado);  // Actualizar un registro de Resultado por ID
router.patch('/resultado/:id', patchResultado);  // Actualizar parcialmente un registro de Resultado por ID
router.delete('/resultado/:id', deleteResultado);  // Eliminar un registro de Resultado por ID

// Exportar las rutas
export default router;

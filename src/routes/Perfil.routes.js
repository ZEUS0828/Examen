import { Router } from 'express';
import { 
    getPerfiles, 
    getPerfilPorId, 
    postPerfil, 
    putPerfil, 
    patchPerfil, 
    deletePerfil 
} from '../controladores/PerfilCtrl.js';

const router = Router();

// Rutas para el manejo de Perfil
router.get('/perfil', getPerfiles);  // Obtener todos los registros de Perfil
router.get('/perfil/:id', getPerfilPorId);  // Obtener un registro de Perfil por ID
router.post('/perfil', postPerfil);  // Crear un nuevo registro de Perfil
router.put('/perfil/:id', putPerfil);  // Actualizar un registro de Perfil por ID
router.patch('/perfil/:id', patchPerfil);  // Actualizar parcialmente un registro de Perfil por ID
router.delete('/perfil/:id', deletePerfil);  // Eliminar un registro de Perfil por ID

// Exportar las rutas
export default router;

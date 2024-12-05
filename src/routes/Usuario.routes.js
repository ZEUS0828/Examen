import express from 'express';
import { 
    getUsuarios, 
    getUsuarioPorId, 
    postUsuario, 
    putUsuario, 
    patchUsuario, 
    deleteUsuario 
} from '../controladores/UsuarioCtrl.js'; // Asegúrate de que la ruta al archivo del controlador sea correcta

const router = express.Router();

// Rutas para manejar los usuarios
router.get('/usuario', getUsuarios);  // Obtener todos los registros de Usuario
router.get('/usuario/:id', getUsuarioPorId);  // Obtener un registro de Usuario por ID
router.post('/usuario', postUsuario);  // Crear un nuevo registro de Usuario
router.put('/usuario/:id', putUsuario);  // Actualizar un registro de Usuario por ID
router.patch('/usuario/:id', patchUsuario);  // Actualizar parcialmente un registro de Usuario por ID
router.delete('/usuario/:id', deleteUsuario);  // Eliminar un registro de Usuario por ID

// Exportar las rutas
export default router;

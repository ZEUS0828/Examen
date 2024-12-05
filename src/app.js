import express from 'express';
import pronosticoRoutes from './routes/Pronostico.routes.js';  // Rutas de Pronóstico
import resultadoRoutes from './routes/Resultado.routes.js';    // Rutas de Resultado
import usuarioRoutes from './routes/Usuario.routes.js';        // Rutas de Usuario
import equipoRoutes from './routes/Equipo.routes.js';           // Rutas de Equipo
import perfilRoutes from './routes/Perfil.routes.js';           // Rutas de Perfil
import partidoRoutes from './routes/Partido.routes.js';         // Rutas de Partido

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas para Pronóstico
app.use('/api', pronosticoRoutes);  // Asigna las rutas de Pronóstico bajo el prefijo '/api'

// Rutas para Resultado
app.use('/api', resultadoRoutes);   // Asigna las rutas de Resultado bajo el mismo prefijo '/api'

// Rutas para Usuario
app.use('/api', usuarioRoutes);     // Asigna las rutas de Usuario bajo el mismo prefijo '/api'

// Rutas para Equipo
app.use('/api', equipoRoutes);      // Asigna las rutas de Equipo bajo el mismo prefijo '/api'

// Rutas para Perfil
app.use('/api', perfilRoutes);      // Asigna las rutas de Perfil bajo el mismo prefijo '/api'

// Rutas para Partido
app.use('/api', partidoRoutes);     // Asigna las rutas de Partido bajo el mismo prefijo '/api'

// Manejo de errores o rutas no encontradas
app.use((req, res) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});

export default app;

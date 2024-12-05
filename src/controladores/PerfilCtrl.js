import { conmysql } from '../db.js';

// Obtener todos los registros de Perfil
export const getPerfiles = async (req, res) => {
    try {
        const [result] = await conmysql.query('SELECT * FROM perfil');
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: 'Error al consultar registros de Perfil' });
    }
};

// Obtener un registro de Perfil por ID
export const getPerfilPorId = async (req, res) => {
    try {
        const [result] = await conmysql.query('SELECT * FROM perfil WHERE per_id = ?', [req.params.id]);
        if (result.length <= 0) {
            return res.status(404).json({
                id: 0,
                message: 'Registro de Perfil no encontrado',
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: 'Error al consultar el perfil' });
    }
};

// Crear un nuevo registro de Perfil
export const postPerfil = async (req, res) => {
    try {
        const { descripcion, estado } = req.body;
        const [rows] = await conmysql.query(
            'INSERT INTO perfil (descripcion, estado) VALUES (?, ?)',
            [descripcion, estado]
        );
        res.status(201).send({ id: rows.insertId, descripcion, estado });
    } catch (error) {
        return res.status(500).json({ message: 'Error al crear el perfil' });
    }
};

// Actualizar un registro de Perfil
export const putPerfil = async (req, res) => {
    try {
        const { id } = req.params;
        const { descripcion, estado } = req.body;
        const [result] = await conmysql.query(
            'UPDATE perfil SET descripcion = ?, estado = ? WHERE per_id = ?',
            [descripcion, estado, id]
        );

        if (result.affectedRows <= 0) {
            return res.status(404).json({ message: 'Registro de Perfil no encontrado' });
        }

        const [rows] = await conmysql.query('SELECT * FROM perfil WHERE per_id = ?', [id]);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: 'Error al actualizar el perfil' });
    }
};

// Actualizar parcialmente un registro de Perfil
export const patchPerfil = async (req, res) => {
    try {
        const { id } = req.params;
        const { descripcion, estado } = req.body;
        const [result] = await conmysql.query(
            `UPDATE perfil SET
                descripcion = IFNULL(?, descripcion),
                estado = IFNULL(?, estado)
            WHERE per_id = ?`,
            [descripcion, estado, id]
        );

        if (result.affectedRows <= 0) {
            return res.status(404).json({ message: 'Registro de Perfil no encontrado' });
        }

        const [rows] = await conmysql.query('SELECT * FROM perfil WHERE per_id = ?', [id]);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: 'Error al actualizar el perfil' });
    }
};

// Eliminar un registro de Perfil
export const deletePerfil = async (req, res) => {
    try {
        const [rows] = await conmysql.query('DELETE FROM perfil WHERE per_id = ?', [req.params.id]);
        if (rows.affectedRows <= 0) {
            return res.status(404).json({
                id: 0,
                message: 'No se pudo eliminar el perfil',
            });
        }
        res.sendStatus(202);
    } catch (error) {
        return res.status(500).json({ message: 'Error al eliminar el perfil' });
    }
};

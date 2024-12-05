import { conmysql } from '../db.js';

// Obtener todos los registros de Resultado
export const getResultados = async (req, res) => {
    try {
        const [result] = await conmysql.query('SELECT * FROM resultado');
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: "Error al consultar registros de Resultado" });
    }
};

// Obtener un registro de Resultado por ID
export const getResultadoPorId = async (req, res) => {
    try {
        const [result] = await conmysql.query('SELECT * FROM resultado WHERE id_res = ?', [req.params.id]);
        if (result.length <= 0) return res.status(404).json({
            id: 0,
            message: "Registro de Resultado no encontrado"
        });
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: 'Error del lado del servidor' });
    }
};

// Crear un nuevo registro de Resultado
export const postResultado = async (req, res) => {
    try {
        const { descripcion_res } = req.body;
        const [rows] = await conmysql.query(
            'INSERT INTO resultado (descripcion_res) VALUES (?)',
            [descripcion_res]
        );
        res.send({ id_res: rows.insertId });
    } catch (error) {
        return res.status(500).json({ message: 'Error del lado del servidor' });
    }
};

// Actualizar un registro de Resultado
export const putResultado = async (req, res) => {
    try {
        const { id } = req.params;
        const { descripcion_res } = req.body;
        const [result] = await conmysql.query(
            'UPDATE resultado SET descripcion_res = ? WHERE id_res = ?',
            [descripcion_res, id]
        );

        if (result.affectedRows <= 0) return res.status(404).json({ message: "Registro de Resultado no encontrado" });
        const [rows] = await conmysql.query('SELECT * FROM resultado WHERE id_res = ?', [id]);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: 'Error del lado del servidor' });
    }
};

// Actualizar parcialmente un registro de Resultado
export const patchResultado = async (req, res) => {
    try {
        const { id } = req.params;
        const { descripcion_res } = req.body;
        const [result] = await conmysql.query(
            `UPDATE resultado SET 
                descripcion_res = IFNULL(?, descripcion_res)
            WHERE id_res = ?`,
            [descripcion_res, id]
        );

        if (result.affectedRows <= 0) return res.status(404).json({ message: "Registro de Resultado no encontrado" });
        const [rows] = await conmysql.query('SELECT * FROM resultado WHERE id_res = ?', [id]);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: 'Error del lado del servidor' });
    }
};

// Eliminar un registro de Resultado
export const deleteResultado = async (req, res) => {
    try {
        const [rows] = await conmysql.query('DELETE FROM resultado WHERE id_res = ?', [req.params.id]);
        if (rows.affectedRows <= 0) return res.status(404).json({
            id_res: 0,
            message: "No se pudo eliminar el registro de Resultado"
        });
        res.sendStatus(202);
    } catch (error) {
        return res.status(500).json({ message: "Error del lado del servidor" });
    }
};

import { conmysql } from '../db.js';

// Obtener todos los registros de Pronóstico
export const getPronosticos = async (req, res) => {
    try {
        const [result] = await conmysql.query('SELECT * FROM pronostico');
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: "Error al consultar registros de Pronóstico" });
    }
};

// Obtener un registro de Pronóstico por ID
export const getPronosticoPorId = async (req, res) => {
    try {
        const [result] = await conmysql.query('SELECT * FROM pronostico WHERE id_pron = ?', [req.params.id]);
        if (result.length <= 0) return res.status(404).json({
            id: 0,
            message: "Registro de Pronóstico no encontrado"
        });
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: 'Error del lado del servidor' });
    }
};

// Crear un nuevo registro de Pronóstico
export const postPronostico = async (req, res) => {
    try {
        const { id_usr, id_par, id_res, valor, fecha_registro } = req.body;
        const [rows] = await conmysql.query(
            'INSERT INTO pronostico (id_usr, id_par, id_res, valor, fecha_registro) VALUES (?, ?, ?, ?, ?)',
            [id_usr, id_par, id_res, valor, fecha_registro]
        );
        res.send({ id: rows.insertId });
    } catch (error) {
        return res.status(500).json({ message: 'Error del lado del servidor' });
    }
};

// Actualizar un registro de Pronóstico
export const putPronostico = async (req, res) => {
    try {
        const { id } = req.params;
        const { id_usr, id_par, id_res, valor, fecha_registro } = req.body;
        const [result] = await conmysql.query(
            'UPDATE pronostico SET id_usr = ?, id_par = ?, id_res = ?, valor = ?, fecha_registro = ? WHERE id_pron = ?',
            [id_usr, id_par, id_res, valor, fecha_registro, id]
        );

        if (result.affectedRows <= 0) return res.status(404).json({ message: "Registro de Pronóstico no encontrado" });
        const [rows] = await conmysql.query('SELECT * FROM pronostico WHERE id_pron = ?', [id]);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: 'Error del lado del servidor' });
    }
};

// Actualizar parcialmente un registro de Pronóstico
export const patchPronostico = async (req, res) => {
    try {
        const { id } = req.params;
        const { id_usr, id_par, id_res, valor, fecha_registro } = req.body;
        const [result] = await conmysql.query(
            `UPDATE pronostico SET 
                id_usr = IFNULL(?, id_usr), 
                id_par = IFNULL(?, id_par), 
                id_res = IFNULL(?, id_res), 
                valor = IFNULL(?, valor), 
                fecha_registro = IFNULL(?, fecha_registro) 
            WHERE id_pron = ?`,
            [id_usr, id_par, id_res, valor, fecha_registro, id]
        );

        if (result.affectedRows <= 0) return res.status(404).json({ message: "Registro de Pronóstico no encontrado" });
        const [rows] = await conmysql.query('SELECT * FROM pronostico WHERE id_pron = ?', [id]);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: 'Error del lado del servidor' });
    }
};

// Eliminar un registro de Pronóstico
export const deletePronostico = async (req, res) => {
    try {
        const [rows] = await conmysql.query('DELETE FROM pronostico WHERE id_pron = ?', [req.params.id]);
        if (rows.affectedRows <= 0) return res.status(404).json({
            id: 0,
            message: "No se pudo eliminar el registro de Pronóstico"
        });
        res.sendStatus(202);
    } catch (error) {
        return res.status(500).json({ message: "Error del lado del servidor" });
    }
};

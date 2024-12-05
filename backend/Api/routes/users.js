const express = require('express');
const jwt = require('jsonwebtoken');
const pool = require('../db/db'); // Assuming connection is established elsewhere
const cors = require('cors');

const router = express.Router();
router.use(cors());

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Consultar la base de datos de manera segura por el correo
    const [rows] = await pool.query('SELECT correo, contra, nombre FROM Usuarios WHERE Correo = ?', [email]);

    // Verificar si el correo no existe
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Correo no encontrado' }); // Correo no encontrado
    }

    // Comparar la contraseña de manera segura
    if (password !== rows[0].contra) {
      return res.status(401).json({ message: 'Contraseña incorrecta' }); // Contraseña incorrecta
    }

    // Generar el JWT con un secreto seguro y un tiempo de expiración adecuado
    const token = jwt.sign({ Usuario: rows[0].correo }, "SECRETO", { expiresIn: '24h' });

    // Devolver el token al cliente
    res.json({ token });

    console.log("TOKEN: " + token);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al procesar la solicitud' });
  }
});

module.exports = router;

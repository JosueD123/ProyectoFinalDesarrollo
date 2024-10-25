const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const users = []; // Base de datos simulada

exports.register = async (req, res) => {
    const { numeroColegiado, nombre, correo, dpi, fechaNacimiento, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ numeroColegiado, nombre, correo, dpi, fechaNacimiento, password: hashedPassword });
    res.status(201).send('Usuario registrado con éxito');
};

exports.login = async (req, res) => {
    const { numeroColegiado, dpi, fechaNacimiento, password } = req.body;
    const user = users.find(u => u.numeroColegiado === numeroColegiado && u.dpi === dpi && u.fechaNacimiento === fechaNacimiento);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).send('Credenciales inválidas');
    }
    const token = jwt.sign({ numeroColegiado }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
};

import React, { useState } from 'react';
import axios from 'axios';
import './styles/register.scss';

const Register = () => {
    const [formData, setFormData] = useState({
        numeroColegiado: '',
        nombre: '',
        correo: '',
        dpi: '',
        fechaNacimiento: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/register', formData);
            alert('Registrado con éxito');
        } catch (error) {
            console.error('Error al registrar:', error);
        }
    };

    return (
        <div className="register-container">
            <h2>Registro</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <input type="text" name="numeroColegiado" placeholder="Número de Colegiado" onChange={handleChange} required />
                <input type="text" name="nombre" placeholder="Nombre Completo" onChange={handleChange} required />
                <input type="email" name="correo" placeholder="Correo Electrónico" onChange={handleChange} required />
                <input type="text" name="dpi" placeholder="DPI" onChange={handleChange} required />
                <input type="date" name="fechaNacimiento" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default Register;


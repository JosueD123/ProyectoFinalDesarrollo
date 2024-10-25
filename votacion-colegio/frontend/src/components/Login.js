import React, { useState } from 'react';
import axios from 'axios';
import './styles/login.scss';

const Login = () => {
    const [formData, setFormData] = useState({
        numeroColegiado: '',
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
            const response = await axios.post('http://localhost:5000/login', formData);
            localStorage.setItem('token', response.data.token); // Guardar el JWT
            alert('Inicio de sesión exitoso');
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    return (
        <div className="login-container">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <input type="text" name="numeroColegiado" placeholder="Número de Colegiado" onChange={handleChange} required />
                <input type="text" name="dpi" placeholder="DPI" onChange={handleChange} required />
                <input type="date" name="fechaNacimiento" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;


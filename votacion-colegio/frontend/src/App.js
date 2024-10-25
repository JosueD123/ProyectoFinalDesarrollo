import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import './App.css'; // Asegúrate de que la ruta sea correcta

const App = () => {
    return (
        <Router>
            <header className="app-header">
                <nav className="navbar">
                    <ul>
                        <li><Link className="nav-link" to="/">Inicio</Link></li>
                        <li><Link className="nav-link" to="/register">Registrar</Link></li>
                        <li><Link className="nav-link" to="/login">Iniciar Sesión</Link></li>
                        <li><Link className="nav-link" to="/admin">Panel de Administración</Link></li>
                    </ul>
                </nav>
                <h1 className="app-title">Bienvenido a la Aplicación</h1>
            </header>
            <main>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin" element={<AdminPanel />} />
                    <Route path="/" element={<h2>Página de Inicio</h2>} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;




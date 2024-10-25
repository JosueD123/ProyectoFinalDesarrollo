import React, { useState } from 'react';
import axios from 'axios';
import './styles/adminPanel.scss';

const AdminPanel = () => {
    const [campaignData, setCampaignData] = useState({
        title: '',
        description: '',
        status: 'habilitada', 
    });

    const handleChange = (e) => {
        setCampaignData({ ...campaignData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            await axios.post('http://localhost:5000/campaigns/create', campaignData, {
                headers: { Authorization: token }
            });
            alert('Campaña creada con éxito');
        } catch (error) {
            console.error('Error al crear campaña:', error);
        }
    };

    return (
        <div className="admin-container">
            <h2>Panel de Administración</h2>
            <form onSubmit={handleSubmit} className="admin-form">
                <input type="text" name="title" placeholder="Título de la Campaña" onChange={handleChange} required />
                <input type="text" name="description" placeholder="Descripción" onChange={handleChange} required />
                <select name="status" onChange={handleChange}>
                    <option value="habilitada">Habilitada</option>
                    <option value="deshabilitada">Deshabilitada</option>
                </select>
                <button type="submit">Crear Campaña</button>
            </form>
        </div>
    );
};

export default AdminPanel;


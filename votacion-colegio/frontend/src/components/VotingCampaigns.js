import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './VotingCampaigns.scss';

const VotingCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
                const response = await axios.get('http://localhost:5000/campaigns');
                setCampaigns(response.data);
            } catch (error) {
                console.error('Error fetching campaigns:', error);
            }
        };

        fetchCampaigns();
    }, []);

    return (
        <div className="campaigns-container">
            <h1>Campañas de Votación</h1>
            <div className="campaign-list">
                {campaigns.length === 0 ? (
                    <p>No hay campañas disponibles.</p>
                ) : (
                    campaigns.map(campaign => (
                        <div key={campaign.id} className="campaign-card">
                            <h2>{campaign.title}</h2>
                            <p>{campaign.description}</p>
                            <p>Fecha de inicio: {new Date(campaign.startDate).toLocaleDateString()}</p>
                            <p>Fecha de fin: {new Date(campaign.endDate).toLocaleDateString()}</p>
                            <button>Votar</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default VotingCampaigns;

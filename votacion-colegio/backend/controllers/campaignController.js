let campaigns = []; // Base de datos simulada

exports.createCampaign = (req, res) => {
    const { title, description, status } = req.body;
    campaigns.push({ title, description, status });
    res.status(201).send('Campaña creada con éxito');
};

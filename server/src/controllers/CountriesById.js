const { Country, Activity } = require('../db');

const countryDetail = async (req, res) => {
  const { idPais } = req.params;

  try {
    const country = await Country.findByPk(idPais, {
      include: Activity, 
      
    });

    if (!country) {
    
      return res.status(404).json({ error: 'No se encontró un país con el ID proporcionado.' });
    }

    res.json(country); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error al obtener el detalle del país.' });
  }
};

module.exports = {
  countryDetail,
};

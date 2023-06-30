

const { Op } = require('sequelize');
const { Country } = require('../db');

const countryByName = async (req, res) => {
  const { name } = req.query;
  console.log(name);
  try {
    const countries = await Country.findAll({
      where: {
        Nombre: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });

    if (countries.length === 0) {
      return res.status(404).json({ error: 'No se encontraron países con el nombre proporcionado.' });
    }

    res.json(countries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error al buscar países por nombre.' });
  }
};


module.exports = {
    countryByName,
};
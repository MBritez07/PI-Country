const axios = require('axios');
const { Model } = require('sequelize');
require('dotenv').config();
const { Country,Activity } = require('../db');

const Countries = async (req, res) => {
  try {
    const countries = await Country.findAll({ 
include:{
  model:Activity,
  attributes:[ "ID","Nombre","Dificultad", "Duracion","Temporada"],
}});


    res.json(countries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error al obtener los países.' });
  }
};



module.exports = {
  Countries,
 
};

//Una vez realizado el controlador, se debe importar la funcion y crearle la ruta en el archivo routes/index 
//ej de la ruta:     
//router.get('/countries',Countries);
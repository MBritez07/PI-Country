const axios = require("axios");
const { Country } = require("../db");




const Api_A_DB = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 2000)); 
    const { data } = await axios.get("http://localhost:5000/countries");

    
    const createCountryDB = data.map(countryData => {
      const capital = Array.isArray(countryData.capital) ? countryData.capital[0] : "";

      return {
        Id: countryData.cca3,
        Nombre: countryData.name.common,
        Imagen_de_la_bandera: countryData.flags.png,
        Continente: countryData.continents[0],
        Capital: capital,
        Subregion: countryData.subregion,
        Area: countryData.area,
        Poblacion: countryData.population,
      };
    });

    await Country.bulkCreate(createCountryDB, { ignoreDuplicates: true });
    console.log("Guardado de API a DB:");

  } catch (error) {
    console.error("Error al obtener los países desde la API:", error);
  }
};

Api_A_DB();

const verificarPaisesEnDB = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000)); 

  try {
    const paises = await Country.findAll({ limit: 3 }); 
    if (paises.length > 0) {
      console.log("Países en la base de datos:");
      paises.forEach(pais => {
        console.log(`- ${pais.Nombre}`);})      
        console.log(`y Muchos más........`);

    } else {
      console.log("No se encontraron países en la base de datos.");
    }
  } catch (error) {
    console.error("Error al verificar los países en la base de datos:", error);
    next(error);
  }
};

verificarPaisesEnDB()

module.exports =  verificarPaisesEnDB,Api_A_DB;


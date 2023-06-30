const { Activity,Country } = require("../db");
const {Op} =require ("sequelize")

const createActivity = async (req, res) => {
  try {
    const { Nombre, Dificultad, Duracion, Temporada, countries } = req.body;

    // Verificar si la actividad ya existe para algún país
    const existingActivity = await Activity.findOne({
      where: { Nombre },
      include: { model: Country, where: { Nombre: countries } }
    });

    if (existingActivity) {
      return res.status(400).json({ error: "La actividad ya existe para este país." });
    }
  
      const NewActivity = await Activity.create({
        Nombre,
        Dificultad,
        Duracion,
        Temporada,
      });

    const relacion= await Country.findAll({
      where:{
        Nombre:{
        [Op.in]:countries,
      }},
    })
    

      await NewActivity.addCountries(relacion);
  
      res.status(201).json(NewActivity); 
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ocurrió un error al crear la actividad." });
    }
  };

module.exports = {
  createActivity,
};

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('Activity', {

    ID:{
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
Dificultad:{
  type: DataTypes.INTEGER,
  allowNull: false,
  validate :{
    min:1,
    max:5,
  },
},
Duracion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isHours(value) {
        if (value <= 0) {
          throw new Error('La duración debe ser mayor que 0.');
        }
      },
    },
  },
Temporada: {
    type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
    allowNull: false,
},
}, { timestamps: false });
};






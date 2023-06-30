const { Activity } = require("../db");

const getActivity = async (req, res) => {
    try {
      const activities = await Activity.findAll();
      res.json(activities);
    } catch (error) {
      console.error('Error al obtener las actividades:', error);
      res.status(500).json({ error: 'Error al obtener las actividades' });
    }
  };



module.exports = {
    getActivity,
};

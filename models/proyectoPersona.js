const Sequelize = require("sequelize");

const ProyectoPersona = (sequelize) => {
  sequelize.define("proyectopersona", {
    estado: Sequelize.STRING(20),
  });
};

module.exports = ProyectoPersona;

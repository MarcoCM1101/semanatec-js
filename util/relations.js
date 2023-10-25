function applyRelations(sequelize) {
  console.log(sequelize.models);
  const Proyecto = sequelize.models.proyecto;
  const Persona = sequelize.models.persona;
  const ProyectoPersona = sequelize.models.proyectopersona;

  //Un proyecto pueden estar muchas personas
  Proyecto.belongsToMany(Persona, { through: ProyectoPersona });

  //Una persona puede participar en muchos proyectos
  Persona.belongsToMany(Proyecto, { through: ProyectoPersona });
}

module.exports = { applyRelations };

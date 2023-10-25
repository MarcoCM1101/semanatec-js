const Sequelize = require("sequelize");
const { applyRelations } = require("./relations");

//Configurar la conexión
//mysql -u admin -h -P 3306 -p

const sequelize = new Sequelize("semanatec", "admin", "password", {
  dialect: "mysql",
  host: "database-1.cjzv23n1pw0i.us-east-1.rds.amazonaws.com",
  define: {
    //Evitar que nos pongamos createdAt y updateAt
    timestamps: false,
    //Pluralizar
    freezeTableName: true,
  },
});

//Cargar modelos
const modelDefiners = [
  require("../models/persona"),
  require("../models/proyecto"),
  require("../models/proyectoPersona"),
];

//Vincular el modelo con el objeto de conexión
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

//Construir las relaciones
applyRelations(sequelize);

//exportar el elemento de conexion
module.exports = sequelize;

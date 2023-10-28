const express = require('express');
const router = express.Router();
const proyectoController = require("../controllers/proyecto");

// Rutas de mi Controller
router.post('/agregarProyecto', proyectoController.postAgregarProyecto);

router.get("/consultarProyectos", proyectoController.getconsultarProyectos);


module.exports = router;
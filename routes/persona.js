const express = require('express');
const router = express.Router();
const personaController = require("../controllers/persona");

// Rutas de mi Controller
router.post('/agregarPersona', personaController.postAgregarPersona);

router.get("/consultarPersona", personaController.getconsultarPersonas)


module.exports = router;
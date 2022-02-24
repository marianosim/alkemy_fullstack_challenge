const express = require('express');
const router = express.Router();
const activitiesAPIController = require('../../controllers/API/activitiesAPIController');

//Rutas
//Listado de movimientos
router.get('/', activitiesAPIController.list);


module.exports = router;
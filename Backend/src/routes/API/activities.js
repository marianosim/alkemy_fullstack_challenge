const express = require('express');
const router = express.Router();
const activitiesAPIController = require('../../controllers/API/activitiesAPIController');

//Rutas
//Listado de movimientos
router.get('/api/activities', activitiesAPIController.list);


module.exports = router;
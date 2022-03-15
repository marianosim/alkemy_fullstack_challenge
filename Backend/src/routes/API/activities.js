const express = require('express');
const router = express.Router();
const activitiesAPIController = require('../../controllers/API/activitiesAPIController');

//Rutas
//Listado de movimientos
router.get('/api/activities', activitiesAPIController.list);

//Crear movimiento nuevo
router.post('/api/activities/create', activitiesAPIController.create);

//Modificar movimiento
router.put('/api/activities/edit/:id', activitiesAPIController.update);

//Borrar registro
router.delete('/api/activities/delete/:id', activitiesAPIController.destroy);


module.exports = router;
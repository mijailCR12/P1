/*const express = require('express');
const router = express.Router();
const avionesService = require('../services/aviones-service'); // Asegúrate de que el archivo service sea correcto

// Obtener todos los aviones
router.get('/aviones', (req, res) => {
  const aviones = avionesService.getAviones();
  res.json(aviones);
});

// Obtener un avión por ID
router.get('/aviones/:id', (req, res) => {
  const avionId = parseInt(req.params.id);
  const avion = avionesService.getAvionById(avionId);
  if (avion) {
    res.json(avion);
  } else {
    res.status(404).json({ message: 'Avion not found' });
  }
});

// Crear un nuevo avión
router.post('/aviones', (req, res) => {
  const newAvion = req.body;
  const createdAvion = avionesService.createAvion(newAvion);
  res.status(201).json(createdAvion);
});

// Actualizar un avión por ID
router.put('/aviones/:id', (req, res) => {
  const avionId = parseInt(req.params.id);
  const updatedAvion = req.body;
  const result = avionesService.updateAvionById(avionId, updatedAvion);
  if (result) {
    res.json(updatedAvion);
  } else {
    res.status(404).json({ message: 'Avion not found' });
  }
});

// Eliminar un avión por ID
router.delete('/aviones/:id', (req, res) => {
  const avionId = parseInt(req.params.id);
  const result = avionesService.deleteAvionById(avionId);
  if (result) {
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Avion not found' });
  }
});

module.exports = router;
*/

const express = require('express');
const router = express.Router();
const avionesService = require('../services/aviones-service'); // Asegúrate de que el archivo de servicio sea correcto

// Obtener todos los aviones
router.get('/aviones', (req, res) => {
  const aviones = avionesService.getAviones();
  res.json(aviones);
});

// Obtener un avión por ID
router.get('/aviones/:id', (req, res) => {
  const avionId = parseInt(req.params.id);
  const avion = avionesService.getAvionById(avionId);
  if (avion) {
    res.json(avion);
  } else {
    res.status(404).json({ message: 'Avion not found' });
  }
});

// Crear un nuevo avión
router.post('/aviones', (req, res) => {
  const newAvion = req.body;
  const createdAvion = avionesService.createAvion(newAvion);
  res.status(201).json(createdAvion);
});

// Actualizar un avión por ID
router.put('/aviones/:id', (req, res) => {
  const avionId = parseInt(req.params.id);
  const updatedAvion = req.body;
  const result = avionesService.updateAvionById(avionId, updatedAvion);
  if (result) {
    res.json(updatedAvion);
  } else {
    res.status(404).json({ message: 'Avion not found' });
  }
});

// Eliminar un avión por ID
router.delete('/aviones/:id', (req, res) => {
  const avionId = parseInt(req.params.id);
  const result = avionesService.deleteAvionById(avionId);
  if (result) {
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Avion not found' });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const aerolineasService = require('../services/aerolineas-service'); // Asegúrate de que el archivo de servicio sea correcto

// Obtener todas las aerolíneas
router.get('/aerolineas', (req, res) => {
  const aerolineas = aerolineasService.getAerolineas();
  res.json(aerolineas);
});

// Obtener una aerolínea por ID
router.get('/aerolineas/:id', (req, res) => {
  const aerolineaId = parseInt(req.params.id);
  const aerolinea = aerolineasService.getAerolineaById(aerolineaId);
  if (aerolinea) {
    res.json(aerolinea);
  } else {
    res.status(404).json({ message: 'Aerolinea not found' });
  }
});

// Crear una nueva aerolínea
router.post('/aerolineas', (req, res) => {
  const newAerolinea = req.body;
  const createdAerolinea = aerolineasService.createAerolinea(newAerolinea);
  res.status(201).json(createdAerolinea);
});

// Actualizar una aerolínea por ID
router.put('/aerolineas/:id', (req, res) => {
  const aerolineaId = parseInt(req.params.id);
  const updatedAerolinea = req.body;
  const result = aerolineasService.updateAerolineaById(aerolineaId, updatedAerolinea);
  if (result) {
    res.json(updatedAerolinea);
  } else {
    res.status(404).json({ message: 'Aerolinea not found' });
  }
});

// Eliminar una aerolínea por ID
router.delete('/aerolineas/:id', (req, res) => {
  const aerolineaId = parseInt(req.params.id);
  const result = aerolineasService.deleteAerolineaById(aerolineaId);
  if (result) {
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Aerolinea not found' });
  }
});

module.exports = router;

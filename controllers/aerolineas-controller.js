const express = require('express');
const router = express.Router();
const aerolineasService = require('../services/aerolineas-service'); // Asegúrate de que el archivo de servicio sea correcto
const multer = require('multer'); // Asegúrate de que tengas instalada la librería 'multer'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/'); // Cambia esto a la ruta donde deseas guardar las imágenes
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Puedes personalizar el nombre del archivo si lo deseas
  },
});
const upload = multer({ storage: storage });


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
router.post('/aerolineas',upload.single('imagen'), (req, res) => {
  try {
    const aerolineaData = req.body;
    const imagenFilename = req.file.filename;
    aerolineaData.imagen = imagenFilename
    const nuevoAerolinea = aerolineasService.createAerolinea(aerolineaData);
    res.status(201).json(nuevoAerolinea);
  } catch(error){
    console.error('Error al crear la aerolinea:', error);
    res.status(500).json({ error: 'Hubo un error al crear la aerolinea.' });
  }
  
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

const express = require('express');
const router = express.Router();
const fabricantesService = require('../services/fabricantes-service'); // Asegúrate de que el archivo de servicio sea correcto
const multer = require('multer'); // Asegúrate de que tengas instalada la librería 'multer'

// Obtener todos los fabricantes
router.get('/fabricantes', (req, res) => {
  const fabricantes = fabricantesService.getFabricantes();
  res.json(fabricantes);
});

// Obtener un fabricante por ID
router.get('/fabricantes/:id', (req, res) => {
  const fabricanteId = parseInt(req.params.id);
  const fabricante = fabricantesService.getFabricanteById(fabricanteId);
  if (fabricante) {
    res.json(fabricante);
  } else {
    res.status(404).json({ message: 'Fabricante not found' });
  }
});

// Crear un nuevo fabricante
// router.post('/fabricantes', upload.single('imagen'),(req, res) => {
  router.post('/fabricantes',(req, res) => {
  try {
    const fabricanteData = req.body;
    const imagenFilename = req.file.filename; // Nombre del archivo de imagen cargado
    // Agrega el nombre de la imagen al objeto fabricanteData
    fabricanteData.imagen = imagenFilename;
    // Crea el nuevo fabricante en la base de datos (usando tu función createFabricante)
const nuevoFabricante = fabricantesService.createFabricante(fabricanteData);
  
    res.status(201).json(nuevoFabricante);
  } catch (error) {
    console.error('Error al crear el fabricante:', error);
    res.status(500).json({ error: 'Hubo un error al crear el fabricante.' });
  }
});

// Configuración de multer para manejar la carga de imágenes
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'ruta/donde/guardar/imagenes'); // Cambia esto a la ruta donde deseas guardar las imágenes
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Puedes personalizar el nombre del archivo si lo deseas
  },
});

const upload = multer({ storage: storage });

// Actualizar un fabricante por ID
router.put('/fabricantes/:id', (req, res) => {
  const fabricanteId = parseInt(req.params.id);
  const updatedFabricante = req.body;
  const result = fabricantesService.updateFabricanteById(fabricanteId, updatedFabricante);
  if (result) {
    res.json(updatedFabricante);
  } else {
    res.status(404).json({ message: 'Fabricante not found' });
  }
});

// Eliminar un fabricante por ID
router.delete('/fabricantes/:id', (req, res) => {
  const fabricanteId = parseInt(req.params.id);
  const result = fabricantesService.deleteFabricanteById(fabricanteId);
  if (result) {
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Fabricante not found' });
  }
});

module.exports = router;

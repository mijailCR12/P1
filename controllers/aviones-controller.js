
// ////////////////////////////////////////////////////////////////////
// const express = require('express');
// const router = express.Router();
// const avionesService = require('../services/aviones-service'); // Asegúrate de que el archivo de servicio sea correcto
// const multer = require('multer'); // Asegúrate de que tengas instalada la librería 'multer'


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/images/'); // Cambia esto a la ruta donde deseas guardar las imágenes
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname); // Puedes personalizar el nombre del archivo si lo deseas
//   },
// });

// const upload = multer({ storage: storage });

// // Obtener todos los aviones
// router.get('/aviones', (req, res) => {
//   const aviones = avionesService.getAviones();
//   res.json(aviones);
// });

// // Obtener un avión por ID
// router.get('/aviones/:id', (req, res) => {
//   const avionId = parseInt(req.params.id);
//   const avion = avionesService.getAvionById(avionId);
//   if (avion) {
//     res.json(avion);
//   } else {
//     res.status(404).json({ message: 'Avion not found' });
//   }
// });

// // Crear un nuevo avión
// router.post('/aviones',upload.single('imagen'), (req, res) => {
//   try {
//     const avionData = req.body;
//     const imagenFilename = req.file.filename;
//     avionData.imagen = imagenFilename;
//     const nuevoAvion = avionesService.createAvion(avionData);
//     res.status(201).json(nuevoAvion);
//   } catch (error) {
//     console.error('Error al crear el avion:', error);
//     res.status(500).json({ error: 'Hubo un error al crear el avion.' });
//   }
  
// });

// // Actualizar un avión por ID
// router.put('/aviones/:id', (req, res) => {
//   const avionId = parseInt(req.params.id);
//   const updatedAvion = req.body;
//   const result = avionesService.updateAvionById(avionId, updatedAvion);
//   if (result) {
//     res.json(updatedAvion);
//   } else {
//     res.status(404).json({ message: 'Avion not found' });
//   }
// });

// // Eliminar un avión por ID
// router.delete('/aviones/:id', (req, res) => {
//   const avionId = parseInt(req.params.id);
//   const result = avionesService.deleteAvionById(avionId);
//   if (result) {
//     res.status(204).end();
//   } else {
//     res.status(404).json({ message: 'Avion not found' });
//   }
// });

// module.exports = router;

////////////////////////////////////////////////////////////////////


const express = require('express');
const router = express();
const multer = require('multer');
const avionesService = require('../services/aviones-service'); // Importa el archivo de servicio

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Configura multer para manejar el almacenamiento de archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images'); // Directorio donde se guardarán las imágenes
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg'); // Cambia la extensión según el tipo de archivo
  },
});

const upload = multer({ storage: storage });

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
router.post('/aviones',upload.single('imagen'), (req, res) => {
  try {
    const avionData = req.body;
    const imagenFilename = req.file.filename;
    avionData.imagen = imagenFilename;
    avionData.aerolineas_usuarias = JSON.parse(avionData.aerolineas_usuarias)
    
    const nuevoAvion = avionesService.createAvion(avionData);
    res.status(201).json(nuevoAvion);
  } catch (error) {
    console.error('Error al crear el avion:', error);
    res.status(500).json({ error: 'Hubo un error al crear el avion.' });
  }
  
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

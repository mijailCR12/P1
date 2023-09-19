// const fabricantes = require('../fabricantes.json'); // Asegúrate de que el archivo JSON contenga los datos de los fabricantes
// const multer = require('multer'); // Asegúrate de que tengas instalada la librería 'multer'

// // Obtener todos los fabricantes
// function getFabricantes() {
//   return fabricantes;
// }

// // Obtener un fabricante por ID
// function getFabricanteById(id) {
//   return fabricantes.find(fabricante => fabricante.id === id);
// }

// // Crear un nuevo fabricante
// function createFabricante(newFabricante) {
//   const fabricanteIds = fabricantes.map(fabricante => fabricante.id);
//   const newId = Math.max(...fabricanteIds) + 1;
//   newFabricante.id = newId;
//   fabricantes.push(newFabricante);
//   return newFabricante;
// }

// // function createFabricante(newFabricante) {
// //     const fabricanteIds = fabricantes.map(fabricante => fabricante.id);
// //     const newId = Math.max(...fabricanteIds) + 1;
// //     const fabricanteConId = { id: newId, ...newFabricante };
// //     fabricantes.push(fabricanteConId);
// //     return fabricanteConId;
// //   }

// // Actualizar un fabricante por ID
// function updateFabricanteById(id, updatedFabricante) {
//   const index = fabricantes.findIndex(fabricante => fabricante.id === id);
//   if (index !== -1) {
//     fabricantes[index] = { ...fabricantes[index], ...updatedFabricante };
//     return true;
//   }
//   return false;
// }

// // Eliminar un fabricante por ID
// function deleteFabricanteById(id) {
//   const index = fabricantes.findIndex(fabricante => fabricante.id === id);
//   if (index !== -1) {
//     fabricantes.splice(index, 1);
//     return true;
//   }
//   return false;
// }

// module.exports = {
//   getFabricantes,
//   getFabricanteById,
//   createFabricante,
//   updateFabricanteById,
//   deleteFabricanteById,
// };


const fs = require('fs');
const path = require('path');

const fabricantesFilePath = path.join(__dirname, '../fabricantes.json');

// Obtener todos los fabricantes
function getFabricantes() {
  try {
    const fabricantesData = fs.readFileSync(fabricantesFilePath, 'utf-8');
    return JSON.parse(fabricantesData);
  } catch (error) {
    console.error('Error al obtener fabricantes:', error);
    return [];
  }
}

// Obtener un fabricante por ID
function getFabricanteById(id) {
  const fabricantes = getFabricantes();
  return fabricantes.find(fabricante => fabricante.id === id);
}

// Crear un nuevo fabricante
function createFabricante(newFabricante) {
  const fabricantes = getFabricantes();
  const fabricanteIds = fabricantes.map(fabricante => fabricante.id);
  const newId = Math.max(...fabricanteIds) + 1;
  newFabricante.id = newId;
  fabricantes.push(newFabricante);

  try {
    fs.writeFileSync(fabricantesFilePath, JSON.stringify(fabricantes, null, 2));
    return newFabricante;
  } catch (error) {
    console.error('Error al crear un nuevo fabricante:', error);
    return null;
  }
}

// Actualizar un fabricante por ID
function updateFabricanteById(id, updatedFabricante) {
  const fabricantes = getFabricantes();
  const index = fabricantes.findIndex(fabricante => fabricante.id === id);

  if (index !== -1) {
    fabricantes[index] = { ...fabricantes[index], ...updatedFabricante };

    try {
      fs.writeFileSync(fabricantesFilePath, JSON.stringify(fabricantes, null, 2));
      return true;
    } catch (error) {
      console.error('Error al actualizar el fabricante:', error);
      return false;
    }
  }

  return false;
}

// Eliminar un fabricante por ID
function deleteFabricanteById(id) {
  const fabricantes = getFabricantes();
  const index = fabricantes.findIndex(fabricante => fabricante.id === id);

  if (index !== -1) {
    fabricantes.splice(index, 1);

    try {
      fs.writeFileSync(fabricantesFilePath, JSON.stringify(fabricantes, null, 2));
      return true;
    } catch (error) {
      console.error('Error al eliminar el fabricante:', error);
      return false;
    }
  }

  return false;
}

module.exports = {
  getFabricantes,
  getFabricanteById,
  createFabricante,
  updateFabricanteById,
  deleteFabricanteById,
};

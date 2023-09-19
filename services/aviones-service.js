// /*const aviones = require('../aviones.json'); // Asegúrate de que el archivo JSON contenga los datos de los aviones

// // Obtener todos los aviones
// function getAviones() {
//   return aviones;
// }

// // Obtener un avión por ID
// function getAvionById(id) {
//   return aviones.find(avion => avion.id === id);
// }
// /*
// // Crear un nuevo avión
// function createAvion(newAvion) {
//   const avionIds = aviones.map(avion => avion.id);
//   const newId = Math.max(...avionIds) + 1;
//   newAvion.id = newId;
//   aviones.push(newAvion);
//   return newAvion;
// }*/
// /*
// // Crear un nuevo avión
// function createAvion(newAvion) {
//     const avionIds = aviones.map(avion => avion.id);
//     const newId = Math.max(...avionIds) + 1;
//     newAvion.id = newId;
//     aviones.push(newAvion);
//     return newAvion;
//   }

// // Actualizar un avión por ID
// function updateAvionById(id, updatedAvion) {
//   const index = aviones.findIndex(avion => avion.id === id);
//   if (index !== -1) {
//     aviones[index] = { ...aviones[index], ...updatedAvion };
//     return true;
//   }
//   return false;
// }

// // Eliminar un avión por ID
// function deleteAvionById(id) {
//   const index = aviones.findIndex(avion => avion.id === id);
//   if (index !== -1) {
//     aviones.splice(index, 1);
//     return true;
//   }
//   return false;
// }

// module.exports = {
//   getAviones,
//   getAvionById,
//   createAvion,
//   updateAvionById,
//   deleteAvionById,
// };
// */

// const aviones = require('../aviones.json'); // Asegúrate de que el archivo JSON contenga los datos de los aviones

// // Obtener todos los aviones
// function getAviones() {
//   return aviones;
// }

// // Obtener un avión por ID
// function getAvionById(id) {
//   return aviones.find(avion => avion.id === id);
// }

// // Crear un nuevo avión
// function createAvion(newAvion) {
//   const avionIds = aviones.map(avion => avion.id);
//   const newId = Math.max(...avionIds) + 1;
//   newAvion.id = newId;
//   aviones.push(newAvion);
//   return newAvion;
// }

// // Actualizar un avión por ID
// function updateAvionById(id, updatedAvion) {
//   const index = aviones.findIndex(avion => avion.id === id);
//   if (index !== -1) {
//     aviones[index] = { ...aviones[index], ...updatedAvion };
//     return true;
//   }
//   return false;
// }

// // Eliminar un avión por ID
// function deleteAvionById(id) {
//   const index = aviones.findIndex(avion => avion.id === id);
//   if (index !== -1) {
//     aviones.splice(index, 1);
//     return true;
//   }
//   return false;
// }

// module.exports = {
//   getAviones,
//   getAvionById,
//   createAvion,
//   updateAvionById,
//   deleteAvionById,
// };


const fs = require('fs');
const path = require('path');

const avionesFilePath = path.join(__dirname, '../aviones.json');

// Obtener todos los aviones
function getAviones() {
  try {
    const avionesData = fs.readFileSync(avionesFilePath, 'utf-8');
    return JSON.parse(avionesData);
  } catch (error) {
    console.error('Error al obtener aviones:', error);
    return [];
  }
}

// Obtener un avión por ID
function getAvionById(id) {
  const aviones = getAviones();
  return aviones.find(avion => avion.id === id);
}

// Crear un nuevo avión
function createAvion(newAvion) {
  const aviones = getAviones();
  const avionIds = aviones.map(avion => avion.id);
  const newId = Math.max(...avionIds) + 1;
  newAvion.id = newId;
  aviones.push(newAvion);

  try {
    fs.writeFileSync(avionesFilePath, JSON.stringify(aviones, null, 2));
    return newAvion;
  } catch (error) {
    console.error('Error al crear un nuevo avión:', error);
    return null;
  }
}


// Actualizar un avión por ID
function updateAvionById(id, updatedAvion) {
  const aviones = getAviones();
  const index = aviones.findIndex(avion => avion.id === id);

  if (index !== -1) {
    aviones[index] = { ...aviones[index], ...updatedAvion };

    try {
      fs.writeFileSync(avionesFilePath, JSON.stringify(aviones, null, 2));
      return true;
    } catch (error) {
      console.error('Error al actualizar el avión:', error);
      return false;
    }
  }

  return false;
}

// Eliminar un avión por ID
function deleteAvionById(id) {
  const aviones = getAviones();
  const index = aviones.findIndex(avion => avion.id === id);

  if (index !== -1) {
    aviones.splice(index, 1);

    try {
      fs.writeFileSync(avionesFilePath, JSON.stringify(aviones, null, 2));
      return true;
    } catch (error) {
      console.error('Error al eliminar el avión:', error);
      return false;
    }
  }

  return false;
}

module.exports = {
  getAviones,
  getAvionById,
  createAvion,
  updateAvionById,
  deleteAvionById,
};

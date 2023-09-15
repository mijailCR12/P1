/*const aviones = require('../aviones.json'); // Asegúrate de que el archivo JSON contenga los datos de los aviones

// Obtener todos los aviones
function getAviones() {
  return aviones;
}

// Obtener un avión por ID
function getAvionById(id) {
  return aviones.find(avion => avion.id === id);
}
/*
// Crear un nuevo avión
function createAvion(newAvion) {
  const avionIds = aviones.map(avion => avion.id);
  const newId = Math.max(...avionIds) + 1;
  newAvion.id = newId;
  aviones.push(newAvion);
  return newAvion;
}*/
/*
// Crear un nuevo avión
function createAvion(newAvion) {
    const avionIds = aviones.map(avion => avion.id);
    const newId = Math.max(...avionIds) + 1;
    newAvion.id = newId;
    aviones.push(newAvion);
    return newAvion;
  }

// Actualizar un avión por ID
function updateAvionById(id, updatedAvion) {
  const index = aviones.findIndex(avion => avion.id === id);
  if (index !== -1) {
    aviones[index] = { ...aviones[index], ...updatedAvion };
    return true;
  }
  return false;
}

// Eliminar un avión por ID
function deleteAvionById(id) {
  const index = aviones.findIndex(avion => avion.id === id);
  if (index !== -1) {
    aviones.splice(index, 1);
    return true;
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
*/

const aviones = require('../aviones.json'); // Asegúrate de que el archivo JSON contenga los datos de los aviones

// Obtener todos los aviones
function getAviones() {
  return aviones;
}

// Obtener un avión por ID
function getAvionById(id) {
  return aviones.find(avion => avion.id === id);
}

// Crear un nuevo avión
function createAvion(newAvion) {
  const avionIds = aviones.map(avion => avion.id);
  const newId = Math.max(...avionIds) + 1;
  newAvion.id = newId;
  aviones.push(newAvion);
  return newAvion;
}

// Actualizar un avión por ID
function updateAvionById(id, updatedAvion) {
  const index = aviones.findIndex(avion => avion.id === id);
  if (index !== -1) {
    aviones[index] = { ...aviones[index], ...updatedAvion };
    return true;
  }
  return false;
}

// Eliminar un avión por ID
function deleteAvionById(id) {
  const index = aviones.findIndex(avion => avion.id === id);
  if (index !== -1) {
    aviones.splice(index, 1);
    return true;
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

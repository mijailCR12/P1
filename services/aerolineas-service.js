const aerolineas = require('../aerolineas.json'); // Asegúrate de que el archivo JSON contenga los datos de las aerolíneas

// Obtener todas las aerolíneas
function getAerolineas() {
  return aerolineas;
}

// Obtener una aerolínea por ID
function getAerolineaById(id) {
  return aerolineas.find(aerolinea => aerolinea.id === id);
}

/*// Crear una nueva aerolínea
function createAerolinea(newAerolinea) {
  const aerolineaIds = aerolineas.map(aerolinea => aerolinea.id);
  const newId = Math.max(...aerolineaIds) + 1;
  newAerolinea.id = newId;
  aerolineas.push(newAerolinea);
  return newAerolinea;
}*/

// Crear una nueva aerolínea
function createAerolinea(newAerolinea) {
    const aerolineaIds = aerolineas.map(aerolinea => aerolinea.id);
    const newId = Math.max(...aerolineaIds) + 1;
    newAerolinea.id = newId;
    aerolineas.push(newAerolinea);
    return newAerolinea;
  }

// Actualizar una aerolínea por ID
function updateAerolineaById(id, updatedAerolinea) {
  const index = aerolineas.findIndex(aerolinea => aerolinea.id === id);
  if (index !== -1) {
    aerolineas[index] = { ...aerolineas[index], ...updatedAerolinea };
    return true;
  }
  return false;
}

// Eliminar una aerolínea por ID
function deleteAerolineaById(id) {
  const index = aerolineas.findIndex(aerolinea => aerolinea.id === id);
  if (index !== -1) {
    aerolineas.splice(index, 1);
    return true;
  }
  return false;
}

module.exports = {
  getAerolineas,
  getAerolineaById,
  createAerolinea,
  updateAerolineaById,
  deleteAerolineaById,
};

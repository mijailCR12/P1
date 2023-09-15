/*const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const avionesController = require('./controllers/aviones-controller'); // Reemplaza con el controlador de aviones adecuado

app.use(bodyParser.json());

app.use('/', avionesController); // Rutas para servicios de aviones

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
*/

/*const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const avionesController = require('./controllers/aviones-controller'); // Reemplaza con el controlador de aviones adecuado
const aerolineasController = require('./controllers/aerolineas-controller'); // Agrega el controlador de aerolíneas

app.use(bodyParser.json());

app.use('/', avionesController); // Rutas para servicios de aviones
app.use('/', aerolineasController); // Rutas para servicios de aerolíneas

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
*/


/*const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const avionesController = require('./controllers/aviones-controller'); // Controlador de aviones
const aerolineasController = require('./controllers/aerolineas-controller'); // Controlador de aerolíneas
const fabricantesController = require('./controllers/fabricantes-controller'); // Controlador de fabricantes

app.use(bodyParser.json());

app.use('/', avionesController); // Rutas para servicios de aviones
app.use('/', aerolineasController); // Rutas para servicios de aerolíneas
app.use('/', fabricantesController); // Rutas para servicios de fabricantes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});*/

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Agrega cors
const app = express();
const avionesController = require('./controllers/aviones-controller'); // Controlador de aviones
const aerolineasController = require('./controllers/aerolineas-controller'); // Controlador de aerolíneas
const fabricantesController = require('./controllers/fabricantes-controller'); // Controlador de fabricantes

// Configuración para servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(cors());

app.use('/', avionesController); // Rutas para servicios de aviones
app.use('/', aerolineasController); // Rutas para servicios de aerolíneas
app.use('/', fabricantesController); // Rutas para servicios de fabricantes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});


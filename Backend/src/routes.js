const express = require('express');
const OngController = require('./Controller/OngController');
const IncidentController = require('./Controller/IncidentController');
const ProfileController = require('./Controller/ProfileController');
const SessionController = require('./Controller/SessionController');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/session', SessionController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
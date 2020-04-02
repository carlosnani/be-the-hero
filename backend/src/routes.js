const express = require('express');
const OngController = require('./Controllers/OngController');
const IncidentCrontroller = require('./Controllers/IncidentCrontroller');
const ProfileCrontroller = require('./Controllers/ProfileCrontroller');
const SessionControler = require('./Controllers/SessionControler');

const routes = express.Router();

routes.post('/sessions', SessionControler.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile' , ProfileCrontroller.index);

routes.get('/incidents', IncidentCrontroller.index);
routes.post('/incidents', IncidentCrontroller.create);
routes.delete('/incidents/:id', IncidentCrontroller.delete);

module.exports = routes;
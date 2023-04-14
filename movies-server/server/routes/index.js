const express = require('express');

const router = express.Router();

const pingRoutes = require('./ping');
const healthCheckRoutes = require('./health-check');
const apiSpecRoutes = require('./api-spec');
const movies = require('./movies');

pingRoutes(router);
healthCheckRoutes(router);
apiSpecRoutes(router);
movies(router);

module.exports = router;

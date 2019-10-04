const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/Upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashBoardController = require('./controllers/DashBoardController');
const BookingController = require('./controllers/BookingController');

const routes  = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions',SessionController.store);
routes.get('/spots',SpotController.index);
routes.post('/spots',upload.single('thumbnail'), SpotController.store);
routes.get('/spots',SpotController.index);
routes.get('/dashboard',DashBoardController.show);
routes.get('/spots/:spot_id/bookings',BookingController.store);


module.exports = routes;
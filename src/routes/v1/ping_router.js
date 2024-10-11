const express = require('express');
const { pingController } = require('../../controller/ping_controller');

const router = express.Router();


router.get('/', pingController); // mapping a route to a controller


module.exports = router;
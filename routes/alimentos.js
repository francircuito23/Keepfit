const {Router} = require('express');

const {getAlimento} = require('../controllers/alimentos/getAlimento');

const router = Router();

router.get('/', getAlimento);

module.exports = router;
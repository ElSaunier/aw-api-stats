const express = require('express');
const statsCtrl = require('../controllers/stats');

const router = express.Router();

router.get('/', statsCtrl.getAllStats);
router.get('/:username', statsCtrl.getOneStats);
router.post('/:username', statsCtrl.modifyOneStats);

module.exports = router;
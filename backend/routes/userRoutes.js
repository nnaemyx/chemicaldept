const express = require('express');
const router = express.Router()
const { registerUser } = require('../controllers/userController')
const { protect } = require("../middleware/authMiddleware");


router.post('/', registerUser);
router.post('/get', protect);

module.exports = router
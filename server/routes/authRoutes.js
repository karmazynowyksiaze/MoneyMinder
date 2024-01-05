const express = require('express');
const router = express.Router()
const cors = require('cors')
const { test, registerUser, loginUser, getProfile, verifyToken } = require('../controllers/authController')

// middleware
router.use(
    cors({
        credentials:false,
        origin:'http://localhost:5173',
    })
)


router.get('/', test)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile', getProfile)

module.exports = router
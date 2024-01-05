const express = require('express');
const router = express.Router()
const cors = require('cors')
const { addIncome, getIncome } = require('../controllers/incomeController')

router.use(
    cors({
        credentials:true,
        origin:'http://localhost:5173',
    })
)

router.post('/addincome', addIncome)
router.get('/getincome', getIncome)

module.exports = router



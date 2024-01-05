const express = require('express');
const router = express.Router()
const cors = require('cors')
const { addExpense, getExpense } = require('../controllers/expenseContoller')

router.use(
    cors({
        credentials:true,
        origin:'http://localhost:5173',
    })
)

router.post('/addexpense', addExpense)
router.get('/getexpense', getExpense)

module.exports = router



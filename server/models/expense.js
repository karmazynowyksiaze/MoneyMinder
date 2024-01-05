const mongoose = require('mongoose')
const {Schema} = mongoose

const expenseSchema = new mongoose.Schema({

    name: {
        type: String
    },
    price: {
        type: Number
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }
})

const ExpenseModel = mongoose.model('Expense', expenseSchema);

module.exports = ExpenseModel;
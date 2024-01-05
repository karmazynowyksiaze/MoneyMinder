const mongoose = require('mongoose')
const {Schema} = mongoose

const incomeSchema = new mongoose.Schema({

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

const ExpenseModel = mongoose.model('Income', incomeSchema);

module.exports = ExpenseModel;
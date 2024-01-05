const Expense = require('../models/expense');
const jwt = require('jsonwebtoken')


const addExpense = async (req, res) => {
    try {
        const {name, price} = req.body; 

        //odczyt zalogowanego usera
        const {token} = req.cookies
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const loggedUserID = decodedToken.id

        const result = await Expense.create({
            name,
            price,
            userID: loggedUserID
        });
        res.json(result);
      } catch (error) {
        console.error('Błąd podczas zapisywania danych:', error);
        res.status(500).json({ error: 'Błąd podczas zapisywania danych' });
      }
};

const getExpense =  async (req,res) => {
    try {
        
        const {token} = req.cookies
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const loggedUserID = decodedToken.id
        
        const expances = await Expense.find({'userID': loggedUserID});
        console.log(loggedUserID);
        res.status(200).json(expances);
    } catch (error) {
        console.log();
    }
};

   
module.exports = {
    addExpense,
    getExpense,
}
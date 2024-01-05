const Income = require('../models/income');
const jwt = require('jsonwebtoken')


const addIncome = async (req, res) => {
    try {
        const {name, price} = req.body; 

        //odczyt zalogowanego usera
        const {token} = req.cookies
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const loggedUserID = decodedToken.id

        const result = await Income.create({
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

const getIncome =  async (req,res) => {
    try {
        
        const {token} = req.cookies
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const loggedUserID = decodedToken.id
        
        const incomes = await Income.find({'userID': loggedUserID});
        console.log(loggedUserID);
        res.status(200).json(incomes);
    } catch (error) {
        console.log();
    }
};

   
module.exports = {
    addIncome,
    getIncome,
}
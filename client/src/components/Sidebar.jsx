import React from 'react'
import axios from 'axios';
import '../styles/Sidebar.css';
import { useEffect, useState } from 'react';

export default function Sidebar() {
  const [user, setUser] = useState([]);
  const [expense, setExpense] = useState([]);
  const [income, setIncome] = useState([]);

  useEffect(() => {
    async function fetchData() {
      //get logged user 
      try {
        const responseUser = await axios.get('/profile');
        setUser(responseUser.data);
      } catch (err) {
        console.log(err);
      }

      //get logged user expanse
      try {
        const responseExpense = await axios.get('/getexpense');
        setExpense(responseExpense.data);
      } catch (err) {
        console.log(err);
      }

      //get logged user income
      try {
        const responseIncome = await axios.get('/getincome');
        setIncome(responseIncome.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

    function calculateTotalBudget() {
        let totalExpenses = 0;
        let totalIncomes = 0;
    
        for (let i = 0; i < expense.length; i++) {
          totalExpenses += expense[i].price;
        }
    
        for (let j = 0; j < income.length; j++) {
          totalIncomes += income[j].price;
        }
    
        const totalBudget = totalIncomes - totalExpenses;
        return {
          totalBudget: totalBudget,
          totalExpenses: totalExpenses,
          totalIncomes: totalIncomes
        };
    }
    const budgetData = calculateTotalBudget();

  return (
    <div className='total-data'>
        <div className='user-data'>
          <h1>Twój budżet </h1>
          <h2> 
          <span className="">
                {budgetData.totalBudget} PLN
          </span>
          </h2>
        </div>

        <div className='total-income'>
          <h2>Suma wpływów w miesiącu</h2>
          <h2 className='tab-sidebar'>{budgetData.totalIncomes} PLN</h2>
        </div>

        <div className='total-expanse'>
          <h2>Suma wydatków w miesiącu </h2>
          <h2 className='tab-sidebar'>{budgetData.totalExpenses} PLN</h2>
        </div>

        <div className='user-account-members'>
          <h2>Powiązane konta</h2>
          <h2>5</h2>
        </div>
      </div>
)
}

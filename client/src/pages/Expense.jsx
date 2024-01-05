import React, { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast'


export default function Expense() {
  const [expanseData, setExpense] = useState({
    name: '',
    price: '',
  });

  const addItem = async (e) => {
    e.preventDefault();
    const {name, price} = expanseData
    try {
      const response = await axios.post('/addexpense', {
        name,
        price,
      });
      toast.success('Expanse added successfully!');
      console.log('Dane zostały wysłane do bazy:', response.data);
    } catch (error) {
      console.error('Błąd podczas wysyłania danych:', error);
    }
  };

  return (
    <div>
    <form onSubmit={addItem}>
        <label>Item name</label>
        <input type='text' placeholder='enter item name...'value={expanseData.name} onChange={(e) => setExpense({...expanseData, name: e.target.value})} />
        <label>Price</label>
        <input type='text' placeholder='enter price...'value={expanseData.price} onChange={(e) => setExpense({...expanseData, price: e.target.value})}/>
        <button type='submit'>Add Item</button>
    </form>
  </div>
  )
}

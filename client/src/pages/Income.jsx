import React, { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast'


export default function Income() {
  const [incomeData, setIncome] = useState({
    name: '',
    price: '',
  });

  const addItem = async (e) => {
    e.preventDefault();
    const {name, price} = incomeData
    try {
      // Prześlij dane do serwera
      const response = await axios.post('/addincome', {
        name,
        price,
      });
      toast.success('Income added successfully!');
      console.log('Dane zostały wysłane do bazy:', response.data);
    } catch (error) {
      console.error('Błąd podczas wysyłania danych:', error);
    }
  };

  return (
    <div>
    <form onSubmit={addItem}>
        <label>Item name</label>
        <input type='text' placeholder='enter item name...'value={incomeData.name} onChange={(e) => setIncome({...incomeData, name: e.target.value})} />
        <label>Price</label>
        <input type='text' placeholder='enter price...'value={incomeData.price} onChange={(e) => setIncome({...incomeData, price: e.target.value})}/>
        <button type='submit'>Add Item</button>
    </form>
  </div>
  )
}

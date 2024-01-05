import "./styles/App.css"
import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import axios from 'axios';
import { Toaster } from 'react-hot-toast'
import Dashboard from './pages/Dashboard';
import Expense from './pages/Expense';
import Income from './pages/Income';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true

function App() {
  return (
    <>
    <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />      
      <Route path='/dashboard/*' element={
        <>
        <Navbar /> 
        <Sidebar /> 
        <Dashboard />
        </>
        }/>
      <Route path='/expense' element={<Expense />} />
      <Route path='/income' element={<Income />} />
    </Routes>
    </>
  )
}

export default App

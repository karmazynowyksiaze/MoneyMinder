import {useState} from "react";
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";

import "../styles/Login.css"

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const loginUser = async (e) => {
    e.preventDefault()
      const {email, password} = data
      try {
        const {data} = await axios.post('/login', {
          email,
          password,
        });
        if(data.error) {
          toast.error(data.error)
        } else {
          setData({});
          toast.success('Login Successful. Welcome!');
          navigate('/dashboard');
        }
      } catch (error) {
        
      }
  }

  return (
    <section className="auth-profile">
      <div className="center-container">
      <div className="box-container-form">
        <h2 className="title-page">Login Form</h2>
      <form onSubmit={loginUser} className="center-form">
      <TextField
          label="E-mail"
          onChange={(e) => setData({...data, email: e.target.value})}
          variant="outlined"
          color="primary"
          type="email"
          sx={{mb: 3}}
          fullWidth
          value={data.email}  
        />
        <TextField
          label="Password"
          onChange={(e) => setData({...data, password: e.target.value})}
          variant="outlined"
          color="primary"
          type="password"
          sx={{mb: 3}}
          fullWidth
          value={data.password}   
        />
        <Button
        style={{
          borderRadius: 15,
          backgroundColor: "#93CD12",
          padding: "18px 36px",
          minWidth: "750px",
          maxWidth: "700px",
        }}
        className="sign-in-button" type="submit" variant="contained" color="primary" sx={{mb:5}}> 
          Sign in
        </Button>
      </form>

      <div className="login-buttons-container">
          <Button 
          style={{
            borderRadius: 15,
            backgroundColor: "#0982C2",
            padding: "18px 36px",
            textTransform: "none"
          }}
          className="login-facebook-button" variant="contained">

          <img src="/assets/logos/icon_facebook.png" alt="Icon Facebook" className="icon" />
            Facebook
          </Button>
          
          <Button 
          style={{
            borderRadius: 15,
            backgroundColor: "#000000",
            padding: "18px 36px",
            textTransform: "none"
          }}
          className="login-apple-button" variant="contained">

          <img src="/assets/logos/icon_apple.png" alt="Icon Apple" className="icon" />
            Apple ID
          </Button>

          <Button 
          style={{
            borderRadius: 15,
            backgroundColor: "#FFFFFF",
            padding: "18px 36px",
            textTransform: "none",
            color:"black"
          }}
          className="login-google-button" variant="contained">
          
          <img src="/assets/logos/icon-google.png" alt="Icon Google" className="icon" />
            Google
          </Button>
      </div>

      <hr className='accout-question' />
       <br></br>
       <Link to="/register" style={{ textDecoration: "none", color: "white" }}>
        <Button 
        style={{
          borderRadius: 15,
          backgroundColor: "#051937",
          padding: "18px 36px",
          minWidth: "750px",
          maxWidth: "700px",
        }}
        className="register-button" type="submit" variant="contained" color="secondary"> 
          Sign up
        </Button>
       </Link>
      </div>
    </div>
    </section>
    
  )
}

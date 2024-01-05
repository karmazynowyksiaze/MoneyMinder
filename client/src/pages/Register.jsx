import React, { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "../styles/Register.css"

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, surname, email, password } = data;
    try {
      const { data } = await axios.post("/register", {
        name,
        surname,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Account created. Welcome!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="auth-profile" >
      <div className="center-container">
      <div className="box-container-form">
        <h2 className="title-page">Register Form</h2>
      <form onSubmit={registerUser} className="center-form">
        <Stack spacing={2} direction="row" sx={{marginBottom: 2}}>
          <TextField
            label="First Name"
            onChange={(e) => setData({ ...data, name: e.target.value })}
            variant="outlined"
            color="primary"
            type="text"
            fullWidth
            value={data.name}
          />
          <TextField
            label="Last Name"
            onChange={(e) => setData({ ...data, surname: e.target.value })}
            variant="outlined"
            color="primary"
            type="text"
            fullWidth
            value={data.surname}
          />
        </Stack>
        <TextField
          label="Email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
          variant="outlined"
          color="primary"
          type="text"
          sx={{mb: 2}}
          fullWidth
          value={data.email}
        />
        <TextField
          label="Password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
          variant="outlined"
          color="primary"
          type="password"
          sx={{mb: 5}}
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
        className="sign-up-button" type="submit" variant="contained" color="primary" sx={{mb:3}}> 
          Sign up 
        </Button>
      </form>


      <hr className="accout-question"/>
       <br></br>
       <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
        <Button 
        style={{
          borderRadius: 15,
          backgroundColor: "#051937",
          padding: "18px 36px",
          minWidth: "750px",
          maxWidth: "700px",
        }}
        className="login-button" type="submit" variant="contained" color="secondary"> 
          Sign in
        </Button>
       </Link>
      </div>
    </div>
  </section>
  );
}
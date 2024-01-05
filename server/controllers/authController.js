const User = require('../models/user');
const { hashPassword, comparePassword } = require('../helpers/auth');
const jwt = require('jsonwebtoken');
const { json } = require('express');

const test = (req, res) => {
    res.json('test is working')
}

const registerUser =async (req, res) => {
    try{
        const {name, surname, email, password} = req.body;
        //check entered name
        if(!name) {
            return res.json({
                error: 'Name is requierd'
            })
        };
        //check password 
        if(!password || password.length < 6) {
            return res.json({
                error: 'Password is required and should be at least 6 characters long'
            })
        };
        //check email
        const exist = await User.findOne({email});
        if (exist) {
            return res.json({
                error: 'Email is taken already'
            })
        }

        const hashedPassword = await hashPassword(password)
        const user = await User.create({
            name,
            surname,
            email, 
            password: hashedPassword,
        })
        
        return res.json(user)
    } catch (error) {
        console.log()
    }
};

//Login Endpoint
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        // Check user exists
        const user = await User.findOne({email});
        if(!user) {
            return res.json({
                error: 'No user find'
            })
        }
        //check password match
        const match = await comparePassword(password, user.password)
        if(match) {
            jwt.sign({email: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET, {}, (err, token) => {
                if(err) throw err;
                res.cookie('token', token).json(user)
            })
        }
        
        if(!match) {
            res.json('Password dont match')
        }
    } catch (error) {
        console.log(error)
    }
}

const getProfile = (req,res) => {
    const {token} = req.cookies
    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if(err) throw err;
            res.json(user)    
        })
    } else {
        res.json(null)
    }
}




module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
}
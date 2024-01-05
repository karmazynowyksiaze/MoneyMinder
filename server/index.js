const express = require('express');
const dotenv = require('dotenv').config()
const cors = require('cors')
const { mongoose } = require('mongoose')
const cookieParser = require('cookie-parser')
const app = express();


//database connection
mongoose.connect('mongodb://172.16.0.210/finances')
.then(() => console.log('Database Connected'))
.catch((err) => console.log('Database not connected', err))



// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))

app.use('/', require('./routes/incomeRoutes'))
app.use('/', require('./routes/expenseRoutes'))
app.use('/', require('./routes/authRoutes'))
app.use(cors())

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`))

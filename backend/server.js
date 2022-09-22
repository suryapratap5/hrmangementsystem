require('dotenv').config()
const express = require('express')
const app = express();

const cors = require('cors')

const errorHandler = require('./middlewares/errorHandler')

const connectMongodb = require('./conn/db');

connectMongodb();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended : true}));


app.use('/auth', require('./routes/Router'))

// app.post('/auth/signup', (req, res)=>{
//     console.log(req.body)
// })
// app.use(express.static('public'))
// app.set('view engine' , 'ejs')

// app.get('/',(req, res)=>{
//     res.render('index')
// })

// app.get('/viewstudents',(req, res)=>{
//     res.render('viewstudents')
// })


app.use(errorHandler);

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))





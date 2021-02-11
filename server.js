const express = require('express')
const app = express();

const ejs = require('ejs')

const path = require('path')

const expressLayout = require('express-ejs-layouts');
const PORT = process.env.PORT|| 3000;
app.use(express.static('public'))
app.use(express.json())//to tell express that we are using json data
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    return res.render('home');
})
app.post('/login',(req,res)=>{
    console.log(req.body)
    if(req.body.email=="abhish277kumar@gmail.com" && req.body.password == "Abhishek"){
        return res.render('questionpage');
    }
    return res.render('home');
})
app.use(expressLayout)
app.set('views',path.join(__dirname,'/views'))

app.set('view engine', 'ejs')



app.listen(PORT,()=>{
    console.log(`Listening at port ${PORT}`);
})
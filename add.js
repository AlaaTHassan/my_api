const express=require('express');
const myRoute=require('./route');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();


app.use(cors());
mongoose.connect('mongodb+srv://alaa:Sc1XYqNl0GH2qE3O@cluster0.ll5l0.mongodb.net/myDb?retryWrites=true&w=majority',
()=>{
    console.log('mongo succ');
    app.listen(process.env.Port,()=>{
        console.log('asdasd');
    });  
});
app.use(bodyparser.json());
app.use('/product',myRoute);

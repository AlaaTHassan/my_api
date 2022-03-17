const mongoose=require('mongoose');
const modelProduct=mongoose.Schema({
title:String,
desc:String,
color:String,
});
module.exports=mongoose.model('products',modelProduct);
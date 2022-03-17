const express=require('express');
const route=express.Router();
const Product=require('./modproduct');

route.get('/',async(req,res)=>{
    //Product.find().then((data)=>{
     /// res.json(data);
 // });
 try {
    const products = await Product.find();
    res.json(products);
 } catch (err) {
   console.log(err);
}
});

route.get('/:id',async(req,res)=>{
    //Product.find().then((data)=>{
     /// res.json(data);
 // });
 try {
    const products = await Product.findById(req.params.id);
    res.json(products);
 } catch (err) {
   console.log(err);
}
});
route.delete('/:id',async(req,res)=>{
    //Product.find().then((data)=>{
     /// res.json(data);
 // });
 try {
    const products = await Product.deleteOne({"_id":req.params.id});
    res.json(products);
 } catch (err) {
   console.log(err);
}
});
route.patch('/:id',async(req,res)=>{
    //Product.find().then((data)=>{
     /// res.json(data);
 // });
 try {
    const products = await Product.updateOne({"_id":req.params.id},{"title":req.body.title});
    res.json(products);
 } catch (err) {
   console.log(err);
}
});
route.post('/',(req,res)=>{
  //  const name=req.body.name;
   // const price=req.body.price;
   const product=new Product({
    title:req.body.title,
    desc:req.body.desc,
    color:req.body.color,
   });
   product.save().then((data)=>{
       res.json({
           "message":"Product Created succ",
           "data":data
       })
   });

});
module.exports=route;
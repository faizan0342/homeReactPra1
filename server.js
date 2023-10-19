const express = require("express");
const bodyParser = require("body-parser");
const shortid = require("shortid");
 const mongoose = require("mongoose");


var app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1:27017/shopping_card1' , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
  .then(() => console.log('Connected!'));

  const Products = mongoose.model('products', new mongoose.Schema({
    _id: { type: String, default: shortid.generate }, // Use 'String' type and set a default value for _id
    title: String,
    description: String,
    image: String,
    availableSizes: [String],
    price: Number,
}));

app.get("/api/products" , async(req , res) => {
   var products = await Products.find({})
   res.send(products)
})
app.post("/api/products" , async(req , res) => {
     var product = new Products(req.body);
     var newProducts = await product.save();
     res.send(newProducts)
 })

 app.delete("/api/products/:id" , async(req , res) => {
     var productDelete = Products.findByIdAndDelete(req.params.id)
     res.send(productDelete)
 })

app.listen(5000 , () => {console.log("http://localhost:5000")})
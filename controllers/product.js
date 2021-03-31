const Product = require("../models/Product");



//Add New Procuct
exports.addProduct = async (req, res) => {
    try {
        
        const {productName , productPrice, productQty,productDesc,productCategory }=req.body;
        
        const newProduct = new Product({productName , productPrice, productQty, productDesc, productCategory, productImage : req.file.path});
        await newProduct.save();
        res.status(200).send({msg : "Add New Product Success",newProduct})
    } catch (error) {
        console.log(error);
    res.status(400).send({ errors: [{ msg: "can not save the Product" }] });
  }
}
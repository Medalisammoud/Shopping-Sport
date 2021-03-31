//require express
const express = require("express");
const { addProduct } = require("../controllers/product");
const upload = require("../middlewares/multer");
//reqquire router
const router = express.Router();

/**
 * @desc : Route Get All Products
 * @path : 'http://localhost:7000/api/product/'
 * @method : GET
 * @data : No Data
 */
router.get('/')

/**
 * @desc : Route Add New Product
 * @path : 'http://localhost:7000/api/product/add'
 * @method : POST
 * @data : req.body
 */
 router.post('/add',upload.single('productImage'),addProduct)

 /**
 * @desc : Route get product
 * @path : 'http://localhost:7000/api/product/:id'
 * @method : GET
 * @data : req.params
 */
  router.get('/:id')

 /**
 * @desc : Route Update product
 * @path : 'http://localhost:7000/api/product/update/:id'
 * @method : PUT
 * @data : req.params , req.body
 */
  router.put('/update/:id')

   /**
 * @desc : Route Delete product
 * @path : 'http://localhost:7000/api/product/delete/:id'
 * @method : DELETE
 * @data : req.params
 */
    router.delete('/:id')


 module.exports = router;
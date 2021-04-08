//require express
const express = require("express");
const { getOrder, addOrder } = require("../controllers/order");

//reqquire router
const router = express.Router();

/**
 * @desc : Route Get All Orders
 * @path : 'http://localhost:8000/api/order/'
 * @method : GET
 * @data : No Data
 */
router.get('/', getOrder)

/**
 * @desc : Route Add New Order
 * @path : 'http://localhost:8000/api/Order/add'
 * @method : POST
 * @data : req.body
 */
 router.post('/add',addOrder)



 module.exports = router;
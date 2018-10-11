import express from 'express';

// import the Product model built with mongoose so we can 
// run query operations directly onto the database
import {Products} from '../models/index.js';

// Use the express method Router() which
// works under the hood enabling the routing
// for endpoints to handlers (ie getProducts fn below).
const router = express.Router();


// getProducts is the route handler. It "handles" the logic
// which should be operated on the requested data.
//
// The last thing it does is returns a response that will be
// received by the front-end
//
// "async" and "await" are node reserved words in ES6.
// They allow for source code to be written more symantically
// and to be easier to read.
//
// "async" says that the following function will be running
// asyncronous operations.
//
// "await" says don't run the next line of code until the
// asyncronous operation is complete and has returned data
const getProducts = async (request, response) => {

  // variable "data" will = the results from querying mongodb for
  // all the documents in the products collection
  const data = await Products.find({});

  return response.status(200).json({status: 200, data: data});
};

// when the request is sent to http://localhost:3001/api/products
// with "get" method, use the getProducts fn as the handler.
router.get('/', getProducts);

export default router;

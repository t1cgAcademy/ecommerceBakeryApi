import express from 'express';

// import the Contact model built with mongoose so we can 
// run query operations directly onto the database
import {Contact} from '../models/index.js';

// Use the express method Router() which
// works under the hood enabling the routing
// for endpoints to handlers (ie sendContactMessage fn below).
const router = express.Router();

// sendContactMessage is the route handler. It "handles" the logic
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
const sendContactMessage = (request, response) => {
  console.log("REQUEST:  ", request.body);

  // Place the body data in the contact collection in our mongo db
  Contact.create(request.body);

  return response.status(200).json({status: 200, data: 'Sent the Message.'});
};

// when the request is sent to http://localhost:3001/api/contact
// with "post" method, use the getProducts fn as the handler.
router.post('/', sendContactMessage);

export default router;

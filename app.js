import express from 'express';
import bodyParse from 'body-parser';
import cors from 'cors';
import contact from './routes/contact';
import products from './routes/products';
import './mongo/mongo.js';
import './models/index.js';

// Use express as API engine
const app = express();

// Allow for cross origin resource sharing
app.use(cors());

// Have api automatically parse request bodies to json
app.use(bodyParse.json());

// When a request to http://localhost:3001/api/contact is
// sent, use the exported module from ./routes/contact.js file
app.use('/api/contact', contact);

// When a request to http://localhost:3001/api/products is
// sent, use the exported module from ./routes/products.js file
app.use('/api/products', products);

// On start of api server, set listening for port 3001
// The api daemon is now listening for all http trafic
// being requested to port 3001
app.listen(3001, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Port is 3001');
  }
});

module.export = app;

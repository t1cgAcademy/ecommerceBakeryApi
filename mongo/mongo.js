import mongoose from 'mongoose';

// Create the handshake with our database, so we can run all future
// database operations.
module.exports = mongoose
  .connect('mongodb://mongo:27017/docker-node-mongo')
  .then(() => console.log('MONGO DB Connected'))
  .catch(err => console.log('ERROR', err));

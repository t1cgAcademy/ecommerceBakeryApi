import mongoose from 'mongoose';

// Create the handshake with our database, so we can run all future
// database operations.
module.exports = mongoose.connect('mongodb://localhost/bakery');

import mongoose, {Schema} from 'mongoose';

// Create a defined design of the data to be stored
// in the products collection in mongodb.
const contactSchema = Schema({
  email: {
    type: String,
    required: true,
    trim: true
  },
  subject: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  }
});

// Use the defined design to build a model, enabling querying operations
// on it.
const Contact = mongoose.model('Contact', contactSchema, 'contact');

module.exports = Contact;

import mongoose, {Schema} from 'mongoose';

// Create a defined design of the data to be stored
// in the products collection in mongodb.
const productsSchema = Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  cost: {
    type: Number,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true,
    trim: true
  }
});

// Use the defined design to build a model, enabling querying operations
// on it.
const Products = mongoose.model('Products', productsSchema, 'products');

module.exports = Products;

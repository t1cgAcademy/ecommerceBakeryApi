import express from 'express';
import configureStripe from 'stripe';

// import the Product model built with mongoose so we can
// run query operations directly onto the database
// import {Products} from '../models/index.js';

// Use the express method Router() which
// works under the hood enabling the routing
// for endpoints to handlers (ie getProducts fn below).
const router = express.Router();

const payment = (req, res) => {
    const stripe = configureStripe('your_api_key_here');
    console.log('Created Card Making Charge');
    stripe.charges.create({
      amount: req.body.amount,
      currency: 'usd',
      description: 'Cake And Things',
      source: req.body.token.id
    }, (err, charge) => {
      if (err) {
        console.log('Charge Failed');
        return res.status(409).json(err);
      } else {
        console.log('Charge Created');
        return res.status(200).json({
          message: 'Successful Charge',
          amount: (charge.amount * 0.01).toFixed(2)
        });
      }
    });
};

router.post('/', payment);

export default router;

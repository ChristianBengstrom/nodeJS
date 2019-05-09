const express = require('express');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator/check');    // for sanitization and validation of user input.

const router = express.Router();
const Registration = mongoose.model('Registration');

const path = require('path');
const auth = require('http-auth');                          // for authentification

const basic = auth.basic({
  file: path.join(__dirname, '../users.htpasswd'),
});

// MIDDELWARE
// req = information that is coming in (such as form data or query parameters)
// res = an object full of methods for sending data back to the user
// next = useful if you don’t actually want to send any data back

router.get('/', (req, res) => {                             // front-page form
  res.render('form', { title: 'Registration form' });
});

router.post('/',
  [
     body('name')                                           // for express-validator/check
       .isLength({ min: 1 })
       .withMessage('Please enter a name'),
     body('email')
       .isLength({ min: 1 })
       .withMessage('Please enter an email'),
   ],
   (req, res) => {                                            // form post route
     const errors = validationResult(req);
     // console.log(req.body);                                // log the post body (content)

     if (errors.isEmpty()) {
       const registration = new Registration(req.body);
       registration.save()
       .then(() => { res.send('Thank you for your registration!'); })
       .catch(() => { res.send('Sorry! Something went wrong.'); });
     } else {
       res.render('form', {
          title: 'Registration form',
          errors: errors.array(),
          data: req.body,
       });
     }
  }
);

router.get('/registrations', auth.connect(basic), (req, res) => {                  // show db content, auth requiered
  Registration.find()                                         // select * from Registration
    .then((registrations) => {
      res.render('index', { title: 'Listing registrations', registrations });
    })
    .catch(() => { res.send('Sorry! Something went wrong.'); });
});


module.exports = router;

const express = require('express');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator/check');    // for sanitization and validation of user input.

const router = express.Router();
const Registration = mongoose.model('Registration');
const Book = mongoose.model('Book');

const path = require('path');
const auth = require('http-auth');                          // for authentification

const basic = auth.basic({
  file: path.join(__dirname, '../users.htpasswd'),
});

// MIDDELWARE
// req = information that is coming in (such as form data or query parameters)
// res = an object full of methods for sending data back to the user
// next = useful if you don’t actually want to send any data back

// FRONT PAGE -> Show books

router.get('/', auth.connect(basic), (req, res) => {          // auth requiered
  Book.find()                                         // select * from Registration
    .then((books) => {
      res.render('index', { title: 'Listing registrations', books });
    })
    .catch(() => { res.send('Sorry! Something went wrong.'); });
});

// Show books

router.get('/authers', auth.connect(basic), (req, res) => {          // auth requiered
  Registration.find()                                         // select * from Registration
    .then((registrations) => {
      res.render('authers', { title: 'Listing registrations', registrations });
    })
    .catch(() => { res.send('Sorry! Something went wrong.'); });
});

// ADD AUTHER

router.get('/add-auther', auth.connect(basic), (req, res) => {
  res.render('autherForm', { title: 'Register auther' });
});

router.post('/add-auther',
  [
     body('firstname')                                           // for express-validator/check
       .isLength({ min: 1 })
       .withMessage('Please enter a firstname'),
     body('lastname')
       .isLength({ min: 1 })
       .withMessage('Please enter a lastname'),
   ],
   (req, res) => {                                            // form post route
     const errors = validationResult(req);
     // console.log(req.body);                                // log the post body (content)

     if (errors.isEmpty()) {
       const registration = new Registration(req.body);
       registration.save()
       .then(() => { res.send('Thank you for your registration! <br> <a href=".">Go back</a>'); })
       .catch(() => { res.send('Sorry! Something went wrong.'); });
     } else {
       res.render('autherForm', {
          title: 'Register auther',
          errors: errors.array(),
          data: req.body,
       });
     }
  }
);

// ADD BOOK

router.get('/add-book', auth.connect(basic), (req, res) => {
  res.render('bookForm', { title: 'Register book' });
});
router.post('/add-book',
  [
     body('auther')                                           // for express-validator/check
       .isLength({ min: 1 })
       .withMessage('Please enter a auther'),
     body('title')
       .isLength({ min: 1 })
       .withMessage('Please enter a title'),
     body('edition')
       .isLength({ min: 1 })
       .withMessage('Please enter a edition'),
     body('publisher')
       .isLength({ min: 1 })
       .withMessage('Please enter a publisher'),
     body('year')
       .isLength({ min: 1 })
       .withMessage('Please enter a year'),
   ],
   (req, res) => {                                            // form post route
     const errors = validationResult(req);
     // console.log(req.body);                                // log the post body (content)

     if (errors.isEmpty()) {
       const book = new Book(req.body);
       book.save()
       .then(() => { res.send('Thank you for your registration! <br> <a href=".">Go back</a>'); })
       .catch(() => { res.send('Sorry! Something went wrong.'); });
     } else {
       res.render('bookForm', {
          title: 'Register book',
          errors: errors.array(),
          data: req.body,
       });
     }
  }
);


module.exports = router;

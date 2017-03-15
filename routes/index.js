var express = require('express');
var router = express.Router();
var api = express.Router();
  var sendmail = require('sendmail')();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage', { title: 'Groovy - Home' });
});

router.get('/features', function(req, res, next) {
  res.render('features', { title: 'Groovy - Features' });
});

router.get('/packages', function(req, res, next) {
  res.render('packages', { title: 'Groovy - Packages' });
});

router.get('/support', function(req, res, next) {
  res.render('support', { title: 'Groovy - Support' });
});

router.get('/comming', function(req, res, next) {
  res.render('comming-soon', { title: 'Groovy - Comming Soon' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Groovy - Contact' });
});
router.get('/privacy-policy', function(req, res, next) {
  res.render('privacy-policy', { title: 'Groovy - Privacy Policy' });
});

router.post('/postcontact', function(req, res, next) {
  sendmail({
      from: 'developers@groovy.id',
      to: 'cs@groovy.id, nurhandiy@gmail.com,',
      subject: 'test sendmail',
      html: 'Mail of test sendmail ',
    }, function(err, reply) {
      console.log(err && err.stack);
      console.dir(reply);
  });
});

module.exports = router;

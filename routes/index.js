var express = require('express');
var router = express.Router();
var api = express.Router();
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

var smtpTransport = nodemailer.createTransport(smtpTransport({
    service: "gmail",
    auth: {
        user: "rifkiazz16@gmail.com",
        pass: "nusanet123456789"
    }
}));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage', { title: 'Groovy - Home' });
});
api.get('/', function(req, res, next) {
  res.render('homepage', { title: 'Groovy - Home' });
});

router.get('/send',function(req,res, next){
  var mailOptions={
   to : "nurhandiy@ymail.com",
   subject : "req.query.subject",
   text : "req.query.text"
}
  console.log(mailOptions);
  smtpTransport.sendMail(mailOptions, function(error, response){
  if(error){
  console.log(error);
  res.end("error");
  }else{
  console.log("Message sent: " + response.message);
  res.end("sent");
  }
  });
});

router.get('/features', function(req, res, next) {
  res.render('features', { title: 'Groovy - Features' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'Groovy - About' });
});

router.get('/packages', function(req, res, next) {
  res.render('packages', { title: 'Groovy - Packages' });
});

router.get('/support', function(req, res, next) {
  res.render('support', { title: 'Groovy - Support' });
});

router.get('/signin', function(req, res, next) {
  res.render('signin', { title: 'Groovy - Signin' });
});

router.get('/forgot-password', function(req, res, next) {
  res.render('forgot-password', { title: 'Groovy - Forgot Password' });
});

router.get('/email-verification', function(req, res, next) {
  res.render('email-verification', { title: 'Groovy - Forgot Password' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Groovy - Signup' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Groovy - Contact' });
});

router.get('/privacy-policy', function(req, res, next) {
  res.render('privacy-policy', { title: 'Groovy - Privacy-policy' });
});

router.get('/career', function(req, res, next) {
  res.render('coming-soon', { title: 'Groovy - Career' });
});

router.get('/event', function(req, res, next) {
  res.render('coming-soon', { title: 'Groovy - Event' });
});

router.get('/terms-of-use', function(req, res, next) {
  res.render('coming-soon', { title: 'Groovy - Terms-of-use' });
});

router.get('/**', function(req, res, next) {
  res.render('coming-soon', { title: 'Groovy - Terms-of-use' });
});

module.exports = router;

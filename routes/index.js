var express = require('express');
var router = express.Router();
var api = express.Router();
var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    pool: true,
    host: 'smtp.gmail.com', // Gmail as mail client
    port: 587,
    secureConnection: false, // use SSL
    debug: true,
    tls: {cipher:'SSLv3'},
    auth: {
        user: "nurhandiy",
        pass: "yudiganteng"
    }
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage', { title: 'Groovy - Home' });
});
api.get('/', function(req, res, next) {
  res.render('homepage', { title: 'Groovy - Home' });
});

router.get('/send-contact',function(req,res, next){
  var mailOptions={
    to: "nurhandiy@ymail.com",
   subject : "Contact Web Groovy",
   text : "nama : "+req.query.name+", email : "+req.query.email+", Message: "+req.query.message
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

router.get('/add-subs',function(req,res, next){
  var mailOptions={
    to: "nurhandiy@ymail.com",
   subject : "Add Subscribe Web Groovy",
   text : "nama : "+req.query.name+", email : "+req.query.email+", phone : "+req.query.hp+", alamat: "+req.query.address
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

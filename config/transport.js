var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
 
// This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails) 
var auth = {
  auth: {
    api_key: 'key-1258147a60a79cb959ba18aafea5b541',
    domain: 'sandbox59fa51b332b644c4a7841bc1617adc74.mailgun.org'
  }
}
 
var nodemailerMailgun = nodemailer.createTransport(mg(auth));

module.exports = nodemailerMailgun;
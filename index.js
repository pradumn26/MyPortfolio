const express = require('express');
const path = require('path');
const sgMail = require('@sendgrid/mail');
const keys = require('./config/keys');

sgMail.setApiKey(keys.sendgridKey);

var app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
});

app.post('/api/send_mail', (req, res) => {
    let mail = req.body;

    const msg = {
        to: 'pradumn.26@gmail.com',
        from: mail.email,
        subject: mail.subject,
        text: mail.message
    };
    sgMail.send(msg);

    res.redirect('/');
});

let PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log('Backend is hosted on port ' + PORT);
});
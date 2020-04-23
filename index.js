//requiring the nodemailer
const mailer = require('nodemailer');

//creating the transport with mailtrap smtp.it  is a "fake SMTP server" used for development purposes.create a new account on Mailtrap if you don't have, and then create a new inbox and get your credentials:
let transport = mailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: 'adc0b08e9e8ab6',
        pass: '05acff113a432d'
    }
});

//For sending text messages
const messageWithText = {
    from: 'fakeuser@sendmail.com',
    to: 'madhushekhar007@gmail.com',
    subject: 'For testing our mail services',
    text: 'Here we are sending the mail to user for testing purpose only'
};

// For sending html templates
const messageWithTemplate = {
    from: 'fakeuser@sendmail.com',
    to: 'abhisingh1937@gmail.com',
    subject: 'Invitation for musical event',
    html: `<table width="50%" height="400" bgcolor="#f6f8f1" border="0" cellpadding="0" cellspacing="0" margin="auto"><tr><td><table class="content" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td>Hello!, You are invited to the musical event at indore!</td></tr></table></td></tr></table>`
};

// For sending mail with html template and attachment
const messageWithTemplateAndAttachment = {
    from: 'fakeuser@sendmail.com',
    to: 'kb.abhisheksingh@gmail.com',
    subject: 'Invitation for playing ludo',
    html: '<table width="50%" height="400" bgcolor="#f6f8f1" border="0" cellpadding="0" cellspacing="0" margin="auto"><tr><td><table class="content" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td>Hello!, You are invited for playing ludo, join us with the code 787737</td></tr></table></td></tr></table>',
    attachments: [{ // Use a address of the attachment
        filename: 'ryandhal.jpg',
        path: 'https://cdn.thenewstack.io/media/2018/06/665a2e65-ryan-dahl.jpg'
    }]
};

//Sending the email and handling the errors and responses
transport.sendMail(messageWithTemplateAndAttachment, function(err, info) {
    if (err) {
        console.log(err)
    } else {
        console.log(info);
    }
});
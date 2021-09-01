require('dotenv').config()
const sgMail = require('@sendgrid/mail');
import "isomorphic-fetch"

function sendEmail(to, from, subject, content, name) {

    sgMail.setApiKey(process.env.SENDGRID);
    let msg = {
        to,
        "from":"no-reply-admin@kustomcharmz.com",
        subject,
        html: `<h2>Hello Kustom Charmz</h2>
        <p><strong>${subject}</strong></p>
        <p><strong>${name}</strong> Sent you a message from <strong>${from}</strong></p>
        <p>${content}</p>`
    };
    console.log(msg);

    return sgMail.send(msg);


}

function newOrder(orderDetails) {

    sgMail.setApiKey(process.env.SENDGRID);
    let msg = {
        "to": 'admin@kustomcharmz.com',
        "from": 'no-reply-admin@kustomcharmz.com',
        "subject": 'You Have A New Order',
        "html": `<h1>Hello Kustom Charmz</h1>
        <p><strong>${orderDetails.shippingInfo.name}</strong> just bought something</p>
        <p>You Just Got Paid <strong> ${orderDetails.receipt.amount}</strong> Shawtyyyy. Now you gotta get yo ass to work lol. Rememeber this what comes with being a boss. I'll give you all the info you need to get started. You can see it below. OH and you can get it tonight ;) Love You ! </p>
        <h5>Below is the shipping information</h5>
        <p>Name: ${orderDetails.shippingInfo.name} </p>
        <p>Email: ${orderDetails.shippingInfo.email} </p>
        <p>State: ${orderDetails.shippingInfo.state} </p>
        <p>City: ${orderDetails.shippingInfo.city} </p>
        <p>Zip Code: ${orderDetails.shippingInfo.postal_code} </p>
        <p>Address: ${orderDetails.shippingInfo.address} </p>
        <p>County: ${orderDetails.shippingInfo.country} </p>
        
        <p><strong><a href=${orderDetails.receipt.receipt} target="_blank">Open Receipt</a></strong></p>`

    };

    
    console.log(msg);

    return sgMail.send(msg);


}

async function addContact(firstname, lastname, email) {

    const contactBody = {
        "list_ids": [
            "f18e4adb-5974-4aa3-afda-b0aff6286057"
        ],
        "contacts": [
            {
                
                "email": email,
                "first_name": firstname,
                "last_name": lastname
            }
        ]
    }


    try {
        let res = await fetch('https://api.sendgrid.com/v3/marketing/contacts', {
            method: 'PUT',
            body: JSON.stringify(contactBody),
            headers: new Headers({
                "Content-Type": "application/json",
                'Authorization': `Bearer ${process.env.SENDGRID}`
            })

        });
        let sessionResponse = await res.json();
        console.log(sessionResponse);

        return sessionResponse;

    } catch (e) {
        console.log(e)
        return e
    }


}

export { sendEmail, addContact, newOrder };
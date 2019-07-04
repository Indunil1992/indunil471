let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {


    sns.publish({
        Message: 'hi this is your verification msg ',
        MessageAttributes: {
            'AWS.SNS.SMS.SMSType': {
                'DataType': 'String',
                'StringValue': 'Promotional'
            }
        },
        PhoneNumber: '+94713245242'
    }).promise()
        .then(data => {
            // your code goes here
            console.log(data);
            callback(null, "Successfully executed to enduser data" + { data });

            // successful response

        })
        .catch(err => {
            console.log(err);
            // error handling goes here
            callback(null, "Successfully executed to enduser catch" + { err });

        });



    // callback(null, { "message": "Successfully executed" });
}
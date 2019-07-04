let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {

    sns.publish({
        Message: 'test run',
        Subject: 'check SNS',
        MessageAttributes: {},
        MessageStructure: 'String',
        TopicArn: 'arn:aws:sns:us-east-1:318300609668:TestSNS'
    }).promise()
        .then(data => {
            // your code goes here
        })
        .catch(err => {
            // error handling goes here
        });



    sns.publish({
        Message: 'hi this is your verification msg ',
        MessageAttributes: {
            'AWS.SNS.SMS.SMSType': {
                'DataType': 'String',
                'StringValue': 'Transactional'
            }
        },
        PhoneNumber: '+9471'
    }).promise()
        .then(data => {
            // your code goes here
            console.log("success" + { data });
            callback(null, "Successfully executed to enduser data" + { data });

            // successful response

        })
        .catch(err => {
            console.log("error " + { err });
            // error handling goes here
            callback(null, "Successfully executed to enduser catch" + { err });

        });



    // callback(null, { "message": "Successfully executed" });
}
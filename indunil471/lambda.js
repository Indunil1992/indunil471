let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {

    sns.publish({
        Message: 'test by indunil 1111',
        Subject: 'check SNS indunil',
        MessageAttributes: {},
        MessageStructure: 'String',
        TopicArn: 'arn:aws:sns:us-east-1:318300609668:abc'
    }).promise()
        .then(data => {
            console.log("success" + { data });
            callback(null, "Successfully executed to enduser data" + { data });

            // your code goes here
        })
        .catch(err => {
            // error handling goes here
            console.log("error " + { err });
            callback(null, "Successfully executed to enduser catch" + { err });

        });



    // callback(null, { "message": "Successfully executed" });
}
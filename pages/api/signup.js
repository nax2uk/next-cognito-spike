import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_DEFAULT_REGION,
});

const poolData = {
  UserPoolId:process.env.AWS_USER_POOL_ID,
  ClientId:process.env.AWS_CLIENT_ID,
};

export default function signUp(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({error: "Method not allowed"})
    } else {
        
        
        const { email, password, confirm_password, js_enabled } = req.body;
        if (password !== confirm_password) {
            res.status(404);
            res.end(JSON.stringify({error: "Password does not match"}))
        }

        const emailData = {
            Name: "email",
            Value: email
        };

        let params = {
            ClientId: poolData.ClientId,
            Password: password,
            Username: email,
            UserAttributes: [emailData]
        };

        let CognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();
        CognitoIdentityServiceProvider.signUp(params, (err, data) => {
            if (err) {
                console.log(err, err.stack);
                res.status(404);
                res.end(JSON.stringify({error: err.message}))
            }
            else {

                params = {
                    GroupName: 'User',
                    UserPoolId: process.env.AWS_USER_POOL_ID,
                    Username: email,
                }
                CognitoIdentityServiceProvider.adminAddUserToGroup(params, (err, data) => {
                    if (err) {
                        console.log(err, err.stack);
                        res.status(404);
                        res.end(JSON.stringify({error: err.message}))
                    }
                    else {
                        res.status(201);
                        
                        if (parseInt(js_enabled)) {
                            console.log("js enabled")
                            res.end(JSON.stringify({message: "success"}));
                            return;
                        }
                        console.log('Js not enabled')
                        res.redirect('http://localhost:3000/signup-success');
                        
                    }
                })
            }
        });
    }
}
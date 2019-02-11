# serverless-manifold-plugin

This [Serverless](https://github.com/serverless/serverless) plugin load Environment Variables from [https://www.manifold.co/] project into Serverless.

## Installation

First, add Serverless Plugin to your project:

`npm install serverless-manifold-plugin --save-dev`

Then inside your project's `serverless.yml` file add following entry to the plugins section: `serverless-manifold-plugin`. If there is no plugin section you will need to add it to the file.

It should look something like this:

```YAML
plugins:
  - serverless-manifold-plugin
```

## Example

Run Serverless Deploy
```
sls deploy
```

Invoke Lambda using [AWS SDK](https://github.com/aws/aws-sdk-js).

```javascript
const AWS = require('aws-sdk');

const lambda = new AWS.Lambda({
  endpoint: new AWS.Endpoint('http://localhost:4000'),
  region: 'us-east-1',
});


lambda.invoke({
  FunctionName: 'function',
  InvocationType: 'Event',
  Payload: JSON.stringify({ key: 'value' }),
}).promise();

```
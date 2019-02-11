# serverless-manifold-plugin

This [Serverless](https://github.com/serverless/serverless) plugin load Environment Variables from [manifold.co](https://www.manifold.co/) into serverless on `serverless deploy` command.

## Requirements
- [manifold cli](https://github.com/manifoldco/manifold-cli). 
- `.manifold.yml` file in the same folder where `serverless.yml` is located.

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
const manifold = require('./manifold');

class ManifoldPlugin {
  constructor(serverless, options) {
    this.options = options;
    this.serverless = serverless;
    this.serverlessLog = serverless.cli.log.bind(serverless.cli);
    if (this.isDeploy()) {
      this.start();
    }
  }

  start() {
    this.serverlessLog('manifold.co: Loading environment variables');
    const envVars = manifold();

    Object.keys(envVars).forEach((key) => {
      this.serverlessLog(`\t - ${key}`);
      this.serverless.service.provider.environment[key] = envVars[key];
    });
  }

  isDeploy() {
    return this.serverless.processedInput.commands.includes('deploy');
  }
}

module.exports = ManifoldPlugin;

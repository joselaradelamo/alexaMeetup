class WelcomeHomeIntent {
  constructor(app) {
    this.name = 'welcomeHomeIntent';
    this.slots = {};
    this.utterances = require('./welcomeHome-intent.json');
  }

  execute(req, res) {
    res.say('Welcome to your home');
    res.shouldEndSession(true);
  }
}

module.exports = WelcomeHomeIntent;

module.exports = {
  helpers: {
    raw: function(options) {
      return options.fn(this)
    }
  },
  prompts: {
    name: {
      'type': 'string',
      'required': true,
      'message': 'Project name'
    },
    description: {
      'type': 'string',
      'message': 'Project description',
      'default': 'Nuxt.js + Vuetify.js + Apollo project'
    },
    author: {
      'type': 'string',
      'message': 'Author'
    },
    alacarte: {
      'type': 'confirm',
      'message': 'Use a-la-carte components?',
      'default': false
    },
    httpUrl:{
      'type': 'string',
      'required':true,
      'message': 'Your Graphql URL, eg: http://your.api.url',
    },
    isWs:{
      'type':'confirm',
      'message':'Use Subscription?',
      'default':false
    },
    wsUrl:{
      'type': 'string',
      'required':true,
      'message': 'Your Graphql URL, eg: ws://your.api.url',
    }
  },
  completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
};

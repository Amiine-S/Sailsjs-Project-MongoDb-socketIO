module.exports.routes = {
  '/': 'home.index',

  'get /login': {
       view: 'login'
  },

  'post /login': 'AuthController.login',

  '/logout': 'AuthController.logout',

  'get /signup': { view: 'signup' },
  'post /signup': 'AuthController.signup',

  'get /home': { view: 'home/poke' }
};
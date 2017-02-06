module.exports = {
	
	Connect: function () {
        var io = require('sails.io.js')( require('socket.io-client') );
        return io;
  	},
};
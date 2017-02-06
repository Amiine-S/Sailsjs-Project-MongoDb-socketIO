var passport = require('passport');

var io = socket.Connect();
io.sails.url = 'localhost:1337';

module.exports = {
	

    index: function(req, res) {
        //sails.log(req.user);
        if(req.user)
        {
            res.view('home/privateview',{
                    user: req.user.email,
            });
        }
        else
        {
            res.view('home/publicview');
        }
        
    },

    poke: function(req,res) {
        if (!req.isSocket) {
            return res.badRequest();
        }
        
        sails.log(req.session);
        
        var message = 'You poke me baby <3';

        sails.log('The user poke server');
        
        //sails.log(req.param('name'));
        return res.json(message);
    }


};


var passport = require('passport');

module.exports = {

    _config: {
        actions: false,
        shortcuts: false,
        rest: false
    },

    login: function(req, res) {

        passport.authenticate('local', function(err, user, info) {
            if ((err) || (!user)) {
                return res.send({
                    message: info.message,
                    user: user
                });
            }
            req.logIn(user, function(err) {
                /*if (err) res.send(err);
                return res.send({
                    message: info.message,
                    user: user
                });*/
                res.redirect('/');
            });

        })(req, res);
    },

    logout: function(req, res) {
        req.logout();
        res.redirect('/');
    },

    signup: function(req, res){
        
        var email = req.param('email');
        var password = req.param('password');
        User.findOne({email: email}).exec(function(err, user) {
            
            if(user){ 
                message = "User already exists";
                return res.send({
                    warning:message,
                });
            }
            else{
                
                User.create({
                    email      : email,
                    password   : password
                }).exec(function(err, user) {
                    res.redirect('/'); 
                });

            }
        });
    },
};
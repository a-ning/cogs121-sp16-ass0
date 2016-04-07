var models = require('../models');

exports.send = function(req, res) {
    console.log(req.body); // help you see what is inside of req.body

    var thing = new models(req.body);
    thing.save(function() {
    	//console.log(thing);
    	res.redirect('/');
	    //res.send(thing);
    });
};
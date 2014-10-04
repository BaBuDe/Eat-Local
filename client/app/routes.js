var Nerd = require('.models/nerd');

	var routes = function(app) {
		// server routes
		// api calls
		// authentication routes

		// sample api route
		app.get('/api/nerds', function(req, res) {
			Nerd.find(function(err, nerds) {
				if (err) 
					res.send(err);

				res.json(nerds);
			});
		});

		// more routes for post, delete, options, etc.

		// then frontend routes for requests from angular client

		app.get('*', function(req, res) {
			res.sendfile('./index.html'); 
		});

	};

module.exports = routes;
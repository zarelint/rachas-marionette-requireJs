define ["marionette", "backbone"], (Marionette, Backbone) ->
	_.extend Marionette.Application::,
	
		navigate: (route, options = {}) ->
			console.log(route)
			route = "#" + route if route.charAt(0) is "/"
			Backbone.history.navigate route, options
	
		getCurrentRoute: ->
			#console.log(Backbone.history.fragment)
			Backbone.history.fragment
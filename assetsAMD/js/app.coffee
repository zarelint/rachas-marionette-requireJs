# APP: Ted Killilea May/13  twitter.com/@t2k_nyc
define ["backbone", "marionette"], (Backbone,  Marionette) ->

	App = new Marionette.Application

	App.addRegions
		headerRegion: "#header-region"
		mainRegion: "#main-region"
		footerRegion: "#footer-region"

	App.rootRoute = 'rachas'

	App.addInitializer ->
		App.execute "footer:show"
		App.execute "header:list"

	App.on "initialize:after", (options) ->
		Backbone.history.start() unless Backbone.history.started
		@navigate(@rootRoute, trigger: true) if @getCurrentRoute() is ""

	App
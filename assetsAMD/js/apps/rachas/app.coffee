define ["marionette", "apps/rachas/list/controller", "app", "entities/racha"], (Marionette, Controller, App) ->

	class Router extends Marionette.AppRouter
		appRoutes:
				"rachas": "listRachas"
				"rachas/:id": "showRacha"

	App.addInitializer ->
		new Router
			controller: API


	API =
		listRachas: ->
			Controller.listRachas()
		showRacha: (id) ->
			Controller.listRachas(id)
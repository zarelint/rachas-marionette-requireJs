define ["backbone", "app"], (Backbone, App) ->

	class Liga extends Backbone.Model
## version con parse
#		defaults : ->
#      rachas: new RachaCollection
#
#		parse: (res) ->
#			if (res.rachas)
#			  res.rachas = new  RachaCollection(res.rachas)
#			res

		initialize: ->
			@.set
				rachas: new RachaCollection(@.get('rachas'))

	class LigaCollection extends Backbone.Collection
		model: Liga
		url: '/DatosRachas'

	class Racha extends Backbone.Model


	class RachaCollection extends Backbone.Collection
		model: Racha


	# set handler's model
	App.reqres.setHandler "racha:entities", ->
		API.getRachasEntities()

	App.reqres.setHandler "racha_by_id:entities", (mostrar) ->
		API.getRacha(mostrar)

	# expose our very custom collection via an API
	API =
		getRacha: (mostrar) ->

			liga = new LigaCollection
			liga.fetch
				success: ->
					mostrar liga


		getRachasEntities:->
			rachas = new RachaCollection
			rachas.fetch({
				success: this.fetchSuccess,
				error: this.fetchError
			});
			rachas

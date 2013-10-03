define ["app", "apps/rachas/list/views"], (App, View) ->

	getLayoutView: ->
		new View.Layout

	listRachas:  (id) ->
		App.request "racha_by_id:entities",  (racha)   =>
			@layout = @getLayoutView()
			@layout.on "show", =>
				@showBotonera racha.get(id).get('rachas')
				@showTablaRachas racha.get(id).get('rachas')
			App.mainRegion.show @layout

	showBotonera: (rachas) ->
		botoneraVista = @getBotonera rachas
		@layout.botonera.show botoneraVista

	getBotonera: (rachas) ->
		new View.Botonera
			collection:rachas

	showTablaRachas: (rachas) ->
		tablaRachasVista = @getTablaRachas rachas
		@layout.tablaRachas.show  tablaRachasVista

	getTablaRachas: (rachas) ->
		new View.TablaRachas
			collection:rachas
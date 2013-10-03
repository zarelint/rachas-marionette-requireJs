define [ 'underscore', 'views/_base', "apps/rachas/list/templates"], (_, AppViews, Templates) ->

	Layout: class Layout extends AppViews.Layout
		template: _.template(Templates.list_layout)
		regions:
			botonera:    "#botonera"
			tablaRachas: "#tablaRachas"

	Botonera: class Botonera extends AppViews.ItemView
		template: _.template(Templates.list_botonera)

	Racha: class Racha extends AppViews.CompositeView
		template: _.template(Templates.racha)
		tagName: "tr"

	Vacio: class Vacio extends AppViews.ItemView
		template:  _.template(Templates.vacio)
		tagName: "tr"

	TablaRachas: class TablaRachas extends AppViews.CompositeView
		template: _.template(Templates.rachas)
		itemView: Racha
		emptyView: Vacio
		itemViewContainer: "tbody"




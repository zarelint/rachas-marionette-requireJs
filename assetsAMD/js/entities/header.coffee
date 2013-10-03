# headers
define ["backbone", "app"], (Backbone, App) ->


  class Header extends Backbone.Model

  # public API for this module return a collection
  class HeaderCollection extends Backbone.Collection
    model: Header

  App.reqres.setHandler "header:entities", ->
    API.getHeaderEntities()

  # expose our very custom collection via an API
  API =
    getHeaderEntities:->
      headers = new HeaderCollection([
	      name: "Primera"
	      url: "/rachas/1"
      ,
	      name: "Segunda"
	      url: "/rachas/2"
      ])



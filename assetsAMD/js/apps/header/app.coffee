define ["marionette", "apps/header/list/controller", "app", "entities/header"], (Marionette, Controller, App) ->

  API =
    listHeader: ->
      Controller.listHeader()


  App.commands.setHandler "header:list", ->
    API.listHeader()

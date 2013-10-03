define ["marionette", "apps/footer/show/controller", "app"], (Marionette, Controller,App) ->

  API =
    showFooter: ->
      Controller.showFooter()

  App.commands.setHandler "footer:show", ->
    API.showFooter()

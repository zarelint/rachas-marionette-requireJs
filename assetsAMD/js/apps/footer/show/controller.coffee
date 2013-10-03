define ["app", "apps/footer/show/views"], (App, Show) ->

  showFooter: ->
    # currentUser = App.request "get:current:user"
    footerView = @getFooterView()
    App.footerRegion.show footerView

  getFooterView: ->
    new Show.Footer


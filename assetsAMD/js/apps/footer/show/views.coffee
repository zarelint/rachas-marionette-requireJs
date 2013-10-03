define [ 'underscore', 'views/_base', "apps/footer/show/templates"], ( _, AppViews, Templates) ->
  Footer: class Footer extends AppViews.ItemView
    template: _.template(Templates.show_footer)



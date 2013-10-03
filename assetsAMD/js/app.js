// Generated by CoffeeScript 1.6.3
(function() {
  define(["backbone", "marionette"], function(Backbone, Marionette) {
    var App;
    App = new Marionette.Application;
    App.addRegions({
      headerRegion: "#header-region",
      mainRegion: "#main-region",
      footerRegion: "#footer-region"
    });
    App.rootRoute = 'rachas';
    App.addInitializer(function() {
      App.execute("footer:show");
      return App.execute("header:list");
    });
    App.on("initialize:after", function(options) {
      if (!Backbone.history.started) {
        Backbone.history.start();
      }
      if (this.getCurrentRoute() === "") {
        return this.navigate(this.rootRoute, {
          trigger: true
        });
      }
    });
    return App;
  });

}).call(this);

/*
//@ sourceMappingURL=app.map
*/

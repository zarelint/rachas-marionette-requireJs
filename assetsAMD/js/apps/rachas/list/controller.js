// Generated by CoffeeScript 1.6.3
(function() {
  define(["app", "apps/rachas/list/views"], function(App, View) {
    return {
      getLayoutView: function() {
        return new View.Layout;
      },
      listRachas: function(id) {
        var _this = this;
        return App.request("racha_by_id:entities", function(racha) {
          _this.layout = _this.getLayoutView();
          _this.layout.on("show", function() {
            _this.showBotonera(racha.get(id).get('rachas'));
            return _this.showTablaRachas(racha.get(id).get('rachas'));
          });
          return App.mainRegion.show(_this.layout);
        });
      },
      showBotonera: function(rachas) {
        var botoneraVista;
        botoneraVista = this.getBotonera(rachas);
        return this.layout.botonera.show(botoneraVista);
      },
      getBotonera: function(rachas) {
        return new View.Botonera({
          collection: rachas
        });
      },
      showTablaRachas: function(rachas) {
        var tablaRachasVista;
        tablaRachasVista = this.getTablaRachas(rachas);
        return this.layout.tablaRachas.show(tablaRachasVista);
      },
      getTablaRachas: function(rachas) {
        return new View.TablaRachas({
          collection: rachas
        });
      }
    };
  });

}).call(this);

/*
//@ sourceMappingURL=controller.map
*/
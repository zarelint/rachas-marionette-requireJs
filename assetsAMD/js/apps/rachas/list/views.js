// Generated by CoffeeScript 1.6.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'views/_base', "apps/rachas/list/templates"], function(_, AppViews, Templates) {
    var Botonera, Layout, Racha, TablaRachas, Vacio, _ref, _ref1, _ref2, _ref3, _ref4;
    return {
      Layout: Layout = (function(_super) {
        __extends(Layout, _super);

        function Layout() {
          _ref = Layout.__super__.constructor.apply(this, arguments);
          return _ref;
        }

        Layout.prototype.template = _.template(Templates.list_layout);

        Layout.prototype.regions = {
          botonera: "#botonera",
          tablaRachas: "#tablaRachas"
        };

        return Layout;

      })(AppViews.Layout),
      Botonera: Botonera = (function(_super) {
        __extends(Botonera, _super);

        function Botonera() {
          _ref1 = Botonera.__super__.constructor.apply(this, arguments);
          return _ref1;
        }

        Botonera.prototype.template = _.template(Templates.list_botonera);

        return Botonera;

      })(AppViews.ItemView),
      Racha: Racha = (function(_super) {
        __extends(Racha, _super);

        function Racha() {
          _ref2 = Racha.__super__.constructor.apply(this, arguments);
          return _ref2;
        }

        Racha.prototype.template = _.template(Templates.racha);

        Racha.prototype.tagName = "tr";

        return Racha;

      })(AppViews.CompositeView),
      Vacio: Vacio = (function(_super) {
        __extends(Vacio, _super);

        function Vacio() {
          _ref3 = Vacio.__super__.constructor.apply(this, arguments);
          return _ref3;
        }

        Vacio.prototype.template = _.template(Templates.vacio);

        Vacio.prototype.tagName = "tr";

        return Vacio;

      })(AppViews.ItemView),
      TablaRachas: TablaRachas = (function(_super) {
        __extends(TablaRachas, _super);

        function TablaRachas() {
          _ref4 = TablaRachas.__super__.constructor.apply(this, arguments);
          return _ref4;
        }

        TablaRachas.prototype.template = _.template(Templates.rachas);

        TablaRachas.prototype.itemView = Racha;

        TablaRachas.prototype.emptyView = Vacio;

        TablaRachas.prototype.itemViewContainer = "tbody";

        return TablaRachas;

      })(AppViews.CompositeView)
    };
  });

}).call(this);

/*
//@ sourceMappingURL=views.map
*/

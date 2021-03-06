// Generated by CoffeeScript 1.6.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["backbone", "app"], function(Backbone, App) {
    var API, Liga, LigaCollection, Racha, RachaCollection, _ref, _ref1, _ref2, _ref3;
    Liga = (function(_super) {
      __extends(Liga, _super);

      function Liga() {
        _ref = Liga.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Liga.prototype.initialize = function() {
        return this.set({
          rachas: new RachaCollection(this.get('rachas'))
        });
      };

      return Liga;

    })(Backbone.Model);
    LigaCollection = (function(_super) {
      __extends(LigaCollection, _super);

      function LigaCollection() {
        _ref1 = LigaCollection.__super__.constructor.apply(this, arguments);
        return _ref1;
      }

      LigaCollection.prototype.model = Liga;

      LigaCollection.prototype.url = '/DatosRachas';

      return LigaCollection;

    })(Backbone.Collection);
    Racha = (function(_super) {
      __extends(Racha, _super);

      function Racha() {
        _ref2 = Racha.__super__.constructor.apply(this, arguments);
        return _ref2;
      }

      return Racha;

    })(Backbone.Model);
    RachaCollection = (function(_super) {
      __extends(RachaCollection, _super);

      function RachaCollection() {
        _ref3 = RachaCollection.__super__.constructor.apply(this, arguments);
        return _ref3;
      }

      RachaCollection.prototype.model = Racha;

      return RachaCollection;

    })(Backbone.Collection);
    App.reqres.setHandler("racha:entities", function() {
      return API.getRachasEntities();
    });
    App.reqres.setHandler("racha_by_id:entities", function(mostrar) {
      return API.getRacha(mostrar);
    });
    return API = {
      getRacha: function(mostrar) {
        var liga;
        liga = new LigaCollection;
        return liga.fetch({
          success: function() {
            return mostrar(liga);
          }
        });
      },
      getRachasEntities: function() {
        var rachas;
        rachas = new RachaCollection;
        rachas.fetch({
          success: this.fetchSuccess,
          error: this.fetchError
        });
        return rachas;
      }
    };
  });

}).call(this);

/*
//@ sourceMappingURL=racha.map
*/

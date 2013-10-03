// Generated by CoffeeScript 1.6.3
(function() {
  define(["marionette", "underscore"], function(Marionette, _) {
    return _.extend(Marionette.View.prototype, {
      templateHelpers: {
        linkTo: function(name, url, options) {
          if (options == null) {
            options = {};
          }
          _.defaults(options, {
            external: false
          });
          if (!options.external) {
            url = "#" + url;
          }
          return "<a href='" + url + "'>" + (escape(name)) + "</a>";
        },
        ultimok: function(resultados, tipoRes, ultimo, pos) {
          var tpl;
          if (tipoRes === ultimo) {
            tpl = "<p class='text-error'><strong>" + resultados + " </strong> </p> ";
          } else {
            tpl = "" + resultados;
          }
          return tpl;
        },
        colorList: function(lista, pos, tip, ult) {
          var LAST_INDEX, element, index, lista1, _i, _len;
          lista1 = [];
          LAST_INDEX = lista.length - 1;
          for (index = _i = 0, _len = lista.length; _i < _len; index = ++_i) {
            element = lista[index];
            switch (index) {
              case LAST_INDEX:
                if (tip === ult) {
                  lista1[index] = this.colorValue(pos, tip, element);
                } else {
                  lista1[index] = element;
                }
                break;
              default:
                lista1[index] = element;
            }
          }
          return lista1;
        },
        colorValue: function(pos, tipo, valor) {
          var limiteDerrota, limiteEmpate, limiteVictoria;
          limiteVictoria = parseInt(_.chain(this.limites).findWhere({
            posicion: pos
          }).pick('victoria').values().first().value().split(',').sort(function(a, b) {
            return b - a;
          })[0]);
          limiteEmpate = parseInt(_.chain(this.limites).findWhere({
            posicion: pos
          }).pick('empate').values().first().value().split(',').sort(function(a, b) {
            return b - a;
          })[0]);
          limiteDerrota = parseInt(_.chain(this.limites).findWhere({
            posicion: pos
          }).pick('derrota').values().first().value().split(',').sort(function(a, b) {
            return b - a;
          })[0]);
          if (tipo === -1) {
            if (valor === limiteDerrota) {
              valor = "<span style='color:red; font-weight: bold; font-size: large'>" + valor + "</span>";
            } else {
              valor = "<span style='color:green; font-weight: bold; font-size: large'>" + valor + "</span>";
            }
          } else if (tipo === 0) {
            if (valor === limiteEmpate) {
              valor = "<span style='color:red; font-weight: bold;'>" + valor + "</span>";
            } else {
              valor = "<span style='color:green; font-weight: bold; font-size: large'>" + valor + "</span>";
            }
          } else if (tipo === 1) {
            if (valor === limiteVictoria) {
              valor = "<span style='color:red; font-weight: bold;'>" + valor + "</span>";
            } else {
              valor = "<span style='color:green; font-weight: bold; font-size: large'>" + valor + "</span>";
            }
          }
          return valor;
        },
        limites: [
          {
            posicion: 1,
            victoria: "10",
            empate: "0",
            derrota: "0"
          }, {
            posicion: 2,
            victoria: "7",
            empate: "0",
            derrota: "0"
          }, {
            posicion: 3,
            victoria: "5",
            empate: "0",
            derrota: "2"
          }, {
            posicion: 4,
            victoria: "5",
            empate: "2",
            derrota: "2"
          }, {
            posicion: 5,
            victoria: "5",
            empate: "2",
            derrota: "2"
          }, {
            posicion: 6,
            victoria: "4,2",
            empate: "2",
            derrota: "2"
          }, {
            posicion: 7,
            victoria: "4,2",
            empate: "4,3,2,2",
            derrota: "2"
          }, {
            posicion: 8,
            victoria: "4,2",
            empate: "4,3,2,2",
            derrota: "2"
          }, {
            posicion: 9,
            victoria: "4,2",
            empate: "4,3,2,2",
            derrota: "2"
          }, {
            posicion: 10,
            victoria: "3,2",
            empate: "4,3,2,2",
            derrota: "2"
          }, {
            posicion: 11,
            victoria: "3,2",
            empate: "4,3,2,2",
            derrota: "2"
          }, {
            posicion: 12,
            victoria: "3,2",
            empate: "4,3,2,2",
            derrota: "2"
          }, {
            posicion: 13,
            victoria: "3,2",
            empate: "4,3,2,2",
            derrota: "2"
          }, {
            posicion: 14,
            victoria: "3,2",
            empate: "4,3,2,2",
            derrota: "2"
          }, {
            posicion: 15,
            victoria: "2",
            empate: "4,3,2,2",
            derrota: "2"
          }, {
            posicion: 16,
            victoria: "2",
            empate: "4,3,2,2",
            derrota: "2"
          }, {
            posicion: 17,
            victoria: "2",
            empate: "4,3,2,2",
            derrota: "2"
          }, {
            posicion: 18,
            victoria: "2",
            empate: "4,3,2,2",
            derrota: "2"
          }, {
            posicion: 19,
            victoria: "0",
            empate: "7,3,3,2,2",
            derrota: "2"
          }, {
            posicion: 20,
            victoria: "0",
            empate: "6,4,2,2",
            derrota: "3"
          }, {
            posicion: 21,
            victoria: "0",
            empate: "7,3,3,2,2",
            derrota: "3"
          }, {
            posicion: 22,
            victoria: "0",
            empate: "6,4,2,2",
            derrota: "3"
          }
        ]
      }
    });
  });

}).call(this);

/*
//@ sourceMappingURL=view.map
*/
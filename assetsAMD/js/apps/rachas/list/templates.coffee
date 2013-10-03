# modular template loading
define (require) ->
    list_layout: require("text!apps/rachas/list/templates/list_layout.htm")
    list_botonera: require("text!apps/rachas/list/templates/list_botonera.htm")
    rachas: require("text!apps/rachas/list/templates/rachas.htm")
    racha: require("text!apps/rachas/list/templates/racha.htm")
    vacio: require("text!apps/rachas/list/templates/vacio.htm")
    valor: require("text!apps/rachas/list/templates/valor.htm")
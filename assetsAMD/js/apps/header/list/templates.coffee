# modular template loading
define (require) ->
  headers: require("text!apps/header/list/templates/headers.htm")
  _header: require("text!apps/header/list/templates/_header.htm")
// Generated by CoffeeScript 1.6.2
(function() {
  define(["apps/other/show/views", "msgbus"], function(Views, msgBus) {
    return {
      otherApp: function() {
        var view;

        view = new Views.Other;
        return msgBus.events.trigger("app:show", view);
      }
    };
  });

}).call(this);
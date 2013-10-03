# load base config before app
define ["config/underscore/templatesettings",
        "config/marionette/templatecache", "config/marionette/renderer",
	      "config/marionette/application", "config/marionette/view",  "config/marionette/nesting",
        "config/marionette/region/dialog"], () ->
define ["app", "apps/header/list/views"], (App, Views) ->

		listHeader: ->
			links = App.request "header:entities"
			#console.log(links)
			headerView = @getHeaderView links

			App.headerRegion.show headerView
		
		getHeaderView: (links) ->
			new Views.Headers
				collection: links

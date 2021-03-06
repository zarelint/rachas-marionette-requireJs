define ["backbone"], (Backbone) ->

	Backbone.Model::nestCollection = (attributeName, nestedCollection) ->
		console.log('dede')
		#setup nested references
		for item, i in nestedCollection
			@attributes[attributeName][i] = nestedCollection.at(i).attributes

		#create empty arrays if none
		nestedCollection.bind 'add', (initiative) =>
			if !@get(attributeName)
				@attributes[attributeName] = []
			@get(attributeName).push(initiative.attributes)

		nestedCollection.bind 'remove', (initiative) =>
			updateObj = {}
			updateObj[attributeName] = _.without(@get(attributeName), initiative.attributes)
			@set(updateObj)

		nestedCollection
define ["marionette", "underscore"  ], (Marionette, _) ->
	
	_.extend Marionette.View::,
	
		templateHelpers:

			linkTo: (name, url, options = {}) ->
				_.defaults options,
					external: false
				
				url = "#" + url unless options.external

				"<a href='#{url}'>#{escape(name)}</a>"

			ultimok: (resultados, tipoRes, ultimo, pos) ->
				if (tipoRes == ultimo)
						tpl = "<p class='text-error'><strong>#{resultados} </strong> </p> "
			  else
				    tpl = "#{resultados}"
				tpl

			# viene 3 arrays (empate,...) y marcado cual es el ult = 1 ( victo)
			colorList: (lista, pos, tip , ult) ->

				lista1 = []
				LAST_INDEX = lista.length - 1
				for element, index in lista
					switch index
						when LAST_INDEX
							if tip == ult
								lista1[index] =  @colorValue pos, tip, element
							else
								lista1[index] =   element
						else
							lista1[index] =   element
				lista1

				#console.log('lista:'+lista,'dos:'+lista1)
			  #limite == alerta de cambio racha
			colorValue: ( pos, tipo, valor)->
				#console.log('d3',pos,tipo,valor,ult)

				limiteVictoria = parseInt(_.chain(@limites).findWhere({posicion:pos}).pick('victoria').values().first().value().split(',').sort((a,b)-> b - a)[0])
				limiteEmpate =   parseInt(_.chain(@limites).findWhere({posicion:pos}).pick('empate').values().first().value().split(',').sort((a,b)-> b - a)[0])
				limiteDerrota =  parseInt(_.chain(@limites).findWhere({posicion:pos}).pick('derrota').values().first().value().split(',').sort((a,b)-> b - a)[0])

				if  tipo == -1    # derrota
					if  valor == limiteDerrota
						valor = "<span style='color:red; font-weight: bold; font-size: large'>#{valor}</span>"
					else
						valor = "<span style='color:green; font-weight: bold; font-size: large'>#{valor}</span>"
				else if tipo == 0  # empate
					if valor == limiteEmpate
						valor = "<span style='color:red; font-weight: bold;'>#{valor}</span>"
					else
						valor = "<span style='color:green; font-weight: bold; font-size: large'>#{valor}</span>"
				else if tipo == 1 # victoria
					if valor == limiteVictoria
						valor = "<span style='color:red; font-weight: bold;'>#{valor}</span>"
					else
						valor = "<span style='color:green; font-weight: bold; font-size: large'>#{valor}</span>"
				valor

			limites:
				[
					posicion: 1
					victoria: "10"
					empate: "0"
					derrota: "0"
				,
					posicion: 2
					victoria: "7"
					empate: "0"
					derrota: "0"
				,
					posicion: 3
					victoria: "5"
					empate: "0"
					derrota: "2"
				,
					posicion: 4
					victoria: "5"
					empate: "2"
					derrota: "2"
				,
					posicion: 5
					victoria: "5"
					empate: "2"
					derrota: "2"
				,
					posicion: 6
					victoria: "4,2"
					empate: "2"
					derrota: "2"
				,
					posicion: 7
					victoria: "4,2"
					empate: "4,3,2,2"
					derrota: "2"
				,
					posicion: 8
					victoria: "4,2"
					empate: "4,3,2,2"
					derrota: "2"
				,
					posicion: 9
					victoria: "4,2"
					empate: "4,3,2,2"
					derrota: "2"
				,
					posicion: 10
					victoria: "3,2"
					empate: "4,3,2,2"
					derrota: "2"
				,
					posicion: 11
					victoria: "3,2"
					empate: "4,3,2,2"
					derrota: "2"
				,
					posicion: 12
					victoria: "3,2"
					empate: "4,3,2,2"
					derrota: "2"
				,
					posicion: 13
					victoria: "3,2"
					empate: "4,3,2,2"
					derrota: "2"
				,
					posicion: 14
					victoria: "3,2"
					empate: "4,3,2,2"
					derrota: "2"
				,
					posicion: 15
					victoria: "2"
					empate: "4,3,2,2"
					derrota: "2"
				,
					posicion: 16
					victoria: "2"
					empate: "4,3,2,2"
					derrota: "2"
				,
					posicion: 17
					victoria: "2"
					empate: "4,3,2,2"
					derrota: "2"
				,
					posicion: 18
					victoria: "2"
					empate: "4,3,2,2"
					derrota: "2"
				,
					posicion: 19
					victoria: "0"
					empate: "7,3,3,2,2"
					derrota: "2"
				,
					posicion: 20
					victoria: "0"
					empate: "6,4,2,2"
					derrota: "3"
				,
					posicion: 21
					victoria: "0"
					empate: "7,3,3,2,2"
					derrota: "3"
				,
					posicion: 22
					victoria: "0"
					empate: "6,4,2,2"
					derrota: "3"
				]
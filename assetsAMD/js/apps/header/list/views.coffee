define [ 'underscore', 'views/_base', "apps/header/list/templates"], ( _, AppViews, Templates ) ->
  Header: class Header extends AppViews.ItemView
    template: _.template(Templates._header)
    tagName:"li"

  Headers: class Headers extends AppViews.CompositeView
	  template: _.template(Templates.headers)
	  id: "headerList"
	  itemView: Header
	  itemViewContainer: "ul"
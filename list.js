	App.Controller.List = {
	  
	  initCache: function() 
	  {
	    console.log('initCache')
	    this.cache = {
  			'root': $('#page'),
  			'list': $('#list'),
  			'addTemplate': $($('#list-add-template').html())
	    }
	  },
	  
		cache: {},

		bindEvents: function()
		{
		  console.log('bindEvents')
			var self = this
			this.cache.root.on('click', '.add-item', function(e) { self.addItem.call(self, this, e) })
			this.cache.root.on('click', '.remove-item', function(e) { self.removeItem.call(self, this, e) })
		},
		
		addItem: function(elem, event)
		{
			var tmpl = this.cache.addTemplate.clone()
			
			tmpl.find('.name').html(new Date().getTime())
			window.c = this.cache
			this.cache.list.append(tmpl)
			
			event.preventDefault()
		},
		
		removeItem: function(elem, event) 
		{
			$(elem).parent().remove()
			
			event.preventDefault()
		}
	}
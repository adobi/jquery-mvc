	App.Controller.List = {
	  
	  model: App.Model,

		cache: {},
	  
	  initCache: function() 
	  {
	    this.cache = {
  			'root': $('#page'),
  			'list': $('#list'),
  			'addTemplate': this.loadTemplate('item')
	    }
	  },
	  
	  loadTemplate: function(tmpl) {
	    var settings = {}
	    settings.url = 'app/views/list/'+tmpl+'.html'
	    settings.async = false
	    
	    var request = $.ajax(settings)
	    
	    request.done(function(response) {
	      $('body').append(response)

	    })
	    
      return $($('#list-add-template').html())
	  },
	  
		bindEvents: function()
		{
		  console.log('list bindEvents')
			var self = this
			this.cache.root.on('click', '.add-item', function(e) { self.addItem.call(self, $(this), e) })
			this.cache.root.on('click', '.remove-item', function(e) { self.removeItem.call(self, $(this), e) })
		},
		
		addItem: function(elem, event)
		{
			var tmpl = this.cache.addTemplate.clone()
			
			tmpl.find('.name').html(new Date().getTime())
			
			this.cache.list.append(tmpl)
			
			event.preventDefault()
		},
		
		removeItem: function(elem, event) 
		{
		  var self = this
		  
			this.model.request('ajax', 'get', null, function(response) { self.removeSuccess(elem, response)  })
			
			event.preventDefault()
		},
		
		removeSuccess: function(elem, data) 
		{
		  var text = elem.parent().find('span').text()
		  
			elem.parent().remove()

      this.cache.root.find('.response').html('<div class="alert alert-success">Removed ' + text + '</div>')
		}
	}
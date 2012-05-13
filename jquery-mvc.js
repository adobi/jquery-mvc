!function($) {
	var App = App || {}
			App.Controller = App.Controller || {},
			App.Model = App.Model || {},
			App.Router = App.Router || {}

	App.Controller.List = {
		cache: {
			'root': $('#page'),
			'list': $('#list'),
			'addTemplate': $($('#list-add-template').html())
		},

		bindEvents: function()
		{
			var self = this
			this.cache.root.on('click', '.add-item', function(e) { self.addItem.call(self, this, e) })
			this.cache.root.on('click', '.remove-item', function(e) { self.removeItem.call(self, this, e) })
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
			$(elem).parent().remove()
			
			event.preventDefault()
		}
	}
	 
	$(function() {
		App.Controller.List.bindEvents()
	})
}(window.jQuery)
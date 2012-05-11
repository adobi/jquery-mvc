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
			this.cache.root.on('click', '.add-item', function() { self.addItem.call(self, this) })
			this.cache.root.on('click', '.remove-item', function() { self.removeItem.call(self, this) })
		},
		
		addItem: function()
		{
			var element = arguments[0]
			
			var tmpl = this.cache.addTemplate.clone()
			tmpl.find('.name').html(new Date().getTime())
			this.cache.list.append(tmpl)
			
			return false;
		},
		
		removeItem: function() 
		{
			var element = $(arguments[0])
			
			element.parent().remove()
		}
	}
	 
	$(function() {
		App.Controller.List.bindEvents()
	})
}(window.jQuery)
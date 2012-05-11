!function($) {
	var App = App || {}
			App.Controller = App.Controller || {},
			App.Model = App.Model || {},
			App.Router = App.Router || {}

	App.Controller.List = {
		cache: {
			'root': $('#page')
		},
		bindEvents: function()
		{
			this.cache.root.on('click', '.add-item', this.addItem)
		},
		
		addItem: function()
		{
			
			return false;
		}
	}
	 
	$(function() {
		App.Controller.List.bindEvents()
	})
}(window.jQuery)
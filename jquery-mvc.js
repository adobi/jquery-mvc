!function($) {
	var App = App || {}
			App.Controller = App.Controller || {},
			App.Model = App.Model || {},
			App.Router = App.Router || {},
      App.Utils = App.Utils || {},
      App.Helpers = App.Helpers || {}

	head.js('router.js', 'list.js', 'utils.js', function() {
	    
  	  App.Utils.onLoad()
  
  	  $(window).hashchange();
  
	})
	window.App = App
	
}(window.jQuery)
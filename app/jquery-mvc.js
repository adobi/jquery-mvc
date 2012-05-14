!function($) {
	var App = App || {}
			App.Controller = App.Controller || {},
			App.Model = App.Model || {},
			App.Router = App.Router || {},
      App.Utils = App.Utils || {},
      App.Helpers = App.Helpers || {}

	head.js('app/core/router.js', 'app/core/model.js', 'app/controllers/list.js', 'app/controllers/contact.js', 'app/core/utils.js', function() {
	    
  	  App.Utils.onLoad()
  
  	  $(window).hashchange();
  
	})
	window.App = App
	
}(window.jQuery)
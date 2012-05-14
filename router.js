	App.Router = {
	  cache: {
	    'default': 'home',
	    'content': $('#page'),
	  },
	  
	  bindEvents: function() 
  	{
  	  var self = this
  	  
  	  $(window).on('hashchange', function(e) { self.hashchange.call(self, e) })
  	},
  	
  	hashchange: function(event) 
  	{
      var hash = window.location.hash.slice(3),
          uri;
          
      if (hash.length) {
        var parts = hash.split('/')

        uri = parts[0]
      } else {

        uri = this.cache.default
      }
      
      this.cache.content.load(uri + '.php',  this.afterHashchange)
      
  	},
  	
  	afterHashchange: function() 
  	{
  	  //App.bindEvents()
  	  for (item in App.Controller) {
  	    
    		App.Controller[item].initCache()
  	  }
  	},
	}
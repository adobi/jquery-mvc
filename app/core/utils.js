  App.Utils = {
    
    bindEvents: function() 
    {
  	  for (item in App.Controller) {
  	    
    		App.Controller[item].initCache()
  
    		App.Controller[item].bindEvents()
  	  }
    },
  	
  	onLoad: function() 
  	{
  
  	  this.bindEvents()
  
  	  App.Router.bindEvents()
  	}
  	 
  };

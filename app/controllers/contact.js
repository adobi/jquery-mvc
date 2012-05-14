App.Controller.Contact = {
  
  model: App.Model,
  
  initCache: function() 
  {
    console.log('contact initCache')
    this.cache = {
			'root': $('#page'),
    }
  },
  
	cache: {},

	bindEvents: function()
	{
	  console.log('contanct bindEvents')
		var self = this
		this.cache.root.on('submit', '#contact-form', function(e) { self.send.call(self, $(this), e) })
	},  
	
	send: function(elem, e) 
	{
	  var self = this

	  e.preventDefault()
	  
	  this.model.request('ajax', 'post', elem.serialize(), function(response) {
	    self.onSuccess(elem, response)
	  }, function(response) {
	    self.onError(elem, response)
	  })
	},
	
	onSuccess: function(elem, data) 
	{
	  elem.find('.form-response').html('<div class="alert alert-success">'+data.message+'</div>')
	},
	
	onError: function(elem, data) 
	{
	  elem.find('.form-response').html('<div class="alert alert-error">'+data+'</div>')	  
	}
};
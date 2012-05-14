App.Model = {

  settings: {
    dataType: 'json'
  },
  
  ajax: function() {
    return $.ajax(this.settings)
  },
  
  request: function(url, type, data, success, error)
  {
    this.settings.url = url + '.php'
    this.settings.data = data || {}
    this.settings.type = type
    
    var request = this.ajax()
    
    if (typeof success === 'function')
      request.done(function(response) { success(response)  })
    
    if (typeof error === 'function')
      request.fail(function(response) { error(response) })
  },
}
window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    $el = $('.main');
    window.TrelloClone.router = new TrelloClone.Routers.Router($el);
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});

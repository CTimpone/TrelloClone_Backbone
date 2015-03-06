TrelloClone.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "boardIndex"
  },

  initialize: function ($el) {
    this.$el = $el;
    this._user = new TrelloClone.Models.User();
    this.checkUserStatus();
    this.listenTo(this._user, "sync", this.boardIndex);
  },

  boardIndex: function () {
    
  },

  checkUserStatus: function (options) {
    this._user.fetch({
      error: function () {
        console.log(user);
      }
    })
  }
})

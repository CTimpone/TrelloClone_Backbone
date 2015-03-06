TrelloClone.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "boardIndex"
  },

  initialize: function ($el) {
    this.$el = $el;
    this._user = new TrelloClone.Models.User();
    this._checkUserStatus();
    this.listenTo(this._user, "sync", this.boardIndex);
  },

  boardIndex: function () {
    var indexView = new TrelloClone.Views.BoardIndex();
    this._swapView(indexView);
  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$el.html(this.currentView.render().$el);
  },

  _checkUserStatus: function (options) {
    this._user.fetch({
      error: function () {
        console.log(user);
      }
    })
  }
})

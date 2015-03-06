TrelloClone.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "boardIndex",
    "boards/:id": "showBoard"
  },

  initialize: function ($el) {
    this.$el = $el;
    this._user = new TrelloClone.Models.User();
    this._boards = new TrelloClone.Collections.Boards();
    this._boards.fetch();
    this._checkUserStatus();
    // this.listenTo(this._user, "sync", this.boardIndex);
  },

  boardIndex: function () {
    var indexView = new TrelloClone.Views.BoardIndex({collection: this._boards});
    this._swapView(indexView);
  },

  showBoard: function (id) {
    var board = this._boards.getOrFetch(id);
    var boardView = new TrelloClone.Views.BoardShow({model: board});
    this._swapView(boardView);
  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$el.html(this.currentView.render().$el);
  },

  _checkUserStatus: function (options) {
    this._user.fetch()
  }
})

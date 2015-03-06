TrelloClone.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "boardIndex",
    "board/new": "newBoard",
    "boards/:id": "showBoard"
  },

  initialize: function ($el) {
    this.$el = $el;
    this._user = new TrelloClone.Models.User();
    this._boards = new TrelloClone.Collections.Boards();
    this._boards.fetch();
    this._checkUserStatus();
  },

  boardIndex: function () {
    var indexView = new TrelloClone.Views.BoardIndex({collection: this._boards});
    this._swapView(indexView);
  },

  newBoard: function () {
    var newBoardView = new TrelloClone.Views.NewBoard({collection: this._boards});
    this._swapView(newBoardView);
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

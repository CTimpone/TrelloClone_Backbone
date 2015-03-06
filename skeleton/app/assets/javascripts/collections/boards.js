TrelloClone.Collections.Boards = Backbone.Collection.extend({
  url: "/api/boards",

  model: TrelloClone.Models.Board,

  comparator: function (board) {
    var date = new Date(board.get("created_at"));
    return date.getTime();
  },

  getOrFetch: function (id) {
    var board = this.get(id);

    if (!board) {
      board = new TrelloClone.Models.Board({id: id});
      this.add(board);
    }

    board.fetch();

    return board;
  }
})

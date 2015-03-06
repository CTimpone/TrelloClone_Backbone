TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: "/api/boards",

  lists: function () {
    if (!this._lists) {
      this._lists = new TrelloClone.Collections.Lists([], {board_id: this.id});
    }

    return this._lists;
  },

  parse: function (response) {
    if (response.lists) {
      x = response.lists
      this.lists().set(response.lists);
      this._lists.each(function (list, index) {
        l = list
        r = response
        list.cards().set(response.lists[index].cards);
      });
      delete response.lists;
    }
    return response;
  }
});

TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: "/api/boards",

  lists: function () {
    if (!this._lists) {
      this._lists = new TrelloClone.Collections.Lists([], {board_id: this.id});
    }

    return this._lists;
  },

  author: function () {
    if (!this._author) {
      this._author = new TrelloClone.Models.User([]);
    }

    return this._author;
  },

  members: function () {
    if (!this._members) {
      this._members = new TrelloClone.Collections.Users([])
    }

    return this._members;
  },

  parse: function (response) {
    if (response.lists) {
      this.lists().set(response.lists);
      this._lists.each(function (list, index) {
        list.cards().set(response.lists[index].cards);
      });
      delete response.lists;
    }

    if (response.author) {
      this.author().set(response.author);
      delete response.author;
    }

    if (response.members) {
      this.members().set(response.members);
      delete response.members;
    }

    return response;
  }
});

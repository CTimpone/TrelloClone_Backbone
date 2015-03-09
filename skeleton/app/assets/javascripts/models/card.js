TrelloClone.Models.Card = Backbone.Model.extend({
  urlRoot: "/api/cards",

  assignedUsers: function () {
    if (!this._cardAssignments) {
      this._cardAssignments = new TrelloClone.Collections.CardAssignments([], {});
    }

    return this._cardAssignments;
  },

  items: function () {
    if (!this._items) {
      this._items = new TrelloClone.Collections.Items([], {card_id: this.id})
    }

    return this._items;
  },

  parse: function (response) {
    if (response.assignments) {
      this.assignedUsers().set(response.assignments);
      delete response.assignments;
    }

    if (response.items) {
      this.items().set(response.items)
      delete response.items;
    }

    return response;
  }
});

TrelloClone.Models.Card = Backbone.Model.extend({
  urlRoot: "/api/cards",

  assignedUsers: function () {
    if (!this._cardAssignments) {
      this._cardAssignments = new TrelloClone.Collections.CardAssignments([], {});
    }

    return this._cardAssignments;
  },

  parse: function (response) {
    if (response.assignments) {
      this.assignedUsers().set(response.assignments, {parse: true});
      delete response.assignments;
    }

    return response;
  }
});

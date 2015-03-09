TrelloClone.Collections.CardAssignments = Backbone.Collection.extend({
  url: function () {
    return "/api/cards/" + this.card_id + "/card_assignments";
  },

  model: TrelloClone.Models.CardAssignment,

  initialize: function (options) {
    this.card_id = options.card_id;
  }
})

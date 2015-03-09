TrelloClone.Models.CardAssignment = Backbone.Model.extend({
  urlRoot: "/api/card_assignments/",

  initialize: function (options) {
    this.user_id = options.user_id;
    this.card_id = options.card_id;
  }
});

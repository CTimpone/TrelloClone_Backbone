TrelloClone.Models.Item = Backbone.Model.extend({
  urlRoot: "/api/items",

  initialize: function (options) {
    this.card_id = options.card_id;
  }
})

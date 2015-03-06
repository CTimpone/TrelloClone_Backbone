TrelloClone.Collections.Cards = Backbone.Collection.extend({
  url: "/api/cards",

  model: TrelloClone.Collections.Card,

  initialize: function (models, options) {
    this.list_id = options.list_id;
  },
});

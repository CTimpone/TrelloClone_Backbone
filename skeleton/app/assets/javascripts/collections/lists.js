TrelloClone.Collections.Lists = Backbone.Collection.extend({
  initialize: function (models, options) {
    this.board_id = options.board_id;
  },

  url: "/api/lists/",

  model: TrelloClone.Models.List,

  comparator: "ord"
});

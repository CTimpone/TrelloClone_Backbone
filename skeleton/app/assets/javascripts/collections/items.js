TrelloClone.Collections.Items = Backbone.Collection.extend({
  url: "/api/items",

  models: TrelloClone.Models.Item
})

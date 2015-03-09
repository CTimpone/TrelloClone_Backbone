TrelloClone.Collections.Users = Backbone.Collection.extend({
  model: TrelloClone.Models.User,

  comparator: "email"
});

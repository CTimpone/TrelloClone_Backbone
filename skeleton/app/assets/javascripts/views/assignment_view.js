TrelloClone.Views.AssignmentItemView = Backbone.CompositeView.extend({
  template: JST["card_assignment_item"],

  initialize: function (options) {
    this.user = options.user;
  },

  render: function () {
    var content = this.template({user: this.user});
    this.$el.html(content);

    return this;
  }
});

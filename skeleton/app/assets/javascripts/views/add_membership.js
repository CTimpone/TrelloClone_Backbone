TrelloClone.Views.AddMembership = Backbone.View.extend({
  initialize: function (options) {
    this.dataId = options.dataId;
  },

  template: JST["add_membership"],

  render: function () {
    var content = this.template({dataId: this.dataId});
    this.$el.html(content);

    return this;
  }
})

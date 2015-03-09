TrelloClone.Views.Item = Backbone.CompositeView.extend({
  tagName: "li",

  attributes: {
    class: "item-list-item"
  },

  template: JST["item_show"],

  render: function () {
    var content = this.template({item: this.model});
    this.$el.html(content);

    return this;
  }
});

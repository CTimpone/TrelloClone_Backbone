TrelloClone.Views.CardShow = Backbone.View.extend({
  tagName: "li",

  attributes: {
    class: "card"
  },

  template: JST["card_show"],

  render: function () {
    var content = this.template({card: this.model});
    this.$el.html(content);

    return this;
  }
});

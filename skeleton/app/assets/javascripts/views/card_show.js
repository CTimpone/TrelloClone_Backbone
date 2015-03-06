TrelloClone.Views.CardShow = Backbone.View.extend({
  tagName: "li",

  attributes: {
    class: "card"
  },

  events: {
    "click .hover-visible": "deleteCard",
    "dblclick div": "allowChange",
    "submit .make-card-changes": "editCard"
  },

  template_show: JST["card_show"],

  template_change: JST["card_change"],

  render: function () {
    var content = this.template_show({card: this.model});
    this.$el.html(content);

    return this;
  },

  allowChange: function (event) {
    var content = this.template_change({card: this.model});

    this.$el.html(content);
  },

  editCard: function (event) {
    event.preventDefault();
    var data = $(event.target).serializeJSON();
    data.list_id = this.model.get('list_id');

    this.model.save(data, {wait: true})
  },

  deleteCard: function (event) {
    event.preventDefault();
    this.model.destroy();
  }

});

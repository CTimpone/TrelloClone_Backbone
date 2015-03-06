TrelloClone.Views.NewCard = Backbone.View.extend({
  tagName: "form",

  attributes: {
    class: "add-card"
  },

  events: {
    "click .place-card-form": "placeList",
    "click .submit": "createList"
  },

  template_add: JST["new_card_add"],

  template_submit: JST["new_card_submit"],

  render: function () {
    var content = this.template_add();
    this.$el.html(content);

    return this;
  },

  placeList: function (event) {
    event.preventDefault();
    var content = this.template_submit();
    this.$el.html(content)
  },

  createList: function (event) {
    event.preventDefault();
    var data = this.$el.serializeJSON();
    data.list_id = this.collection.list_id;

    this.collection.create(data, { wait: true })
  }


});

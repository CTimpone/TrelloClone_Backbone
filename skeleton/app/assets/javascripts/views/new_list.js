TrelloClone.Views.NewList = Backbone.View.extend({
  tagName: "form",

  attributes: {
    class: "add-list"
  },

  events: {
    "click .place-list-form": "placeList",
    "click .submit": "createList"
  },

  template_add: JST["new_list_add"],

  template_submit: JST["new_list_submit"],

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
    data.board_id = this.collection.board_id;

    this.collection.create(data, { wait: true })
  }


});

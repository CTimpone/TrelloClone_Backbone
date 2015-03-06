TrelloClone.Views.BoardIndexItem = Backbone.View.extend({

  template: JST["board_index_item"],

  tagName: "li",

  addClass: "board-list-item",

  events: {
    "click .destroy": "deleteBoard"
  },

  render: function () {
    var content = this.template({board: this.model});
    this.$el.html(content);

    return this;
  },

  deleteBoard: function (event) {
    event.preventDefault();
    this.model.destroy();
    this.remove();
  }
})

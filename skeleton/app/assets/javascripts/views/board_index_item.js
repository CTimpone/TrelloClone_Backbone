TrelloClone.Views.BoardIndexItem = Backbone.View.extend({

  template: JST["board_index_item"],

  tagName: "li",

  addClass: "board-list-item",

  render: function () {
    var content = this.template({board: this.model});
    this.$el.html(content);

    return this;
  }
})

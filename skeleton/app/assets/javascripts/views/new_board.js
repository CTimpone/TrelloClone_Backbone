TrelloClone.Views.NewBoard = Backbone.View.extend({
  events: {
    "submit .new-board": "createBoard"
  },

  template: JST["new_board"],

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  },

  createBoard: function (event) {
    event.preventDefault();
    var data = $(event.target).serializeJSON();

    this.collection.create(data, {
      wait: true,

      success: function () {
        Backbone.history.navigate("", {trigger: true});
      }
    });
  }
});

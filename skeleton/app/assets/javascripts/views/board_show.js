TrelloClone.Views.BoardShow = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
  },

  template: JST["board_show"],

  render: function () {
    // console.log(this.model)
    TrelloClone.board = this.model;
    var content = this.template({board: this.model});
    this.$el.html(content);

    return this;
  }
});

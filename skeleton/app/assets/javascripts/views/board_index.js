TrelloClone.Views.BoardIndex = Backbone.CompositeView.extend({

  initialize: function () {
    this.listenTo(this.collection, "sync remove", this.render);
  },

  template: JST["board_index"],

  render: function () {

    var baseContent = this.template();
    this.$el.html(baseContent)

    var $selector = this.$el.find('.board-list');

    this.collection.each(function (board) {
      var subView = new TrelloClone.Views.BoardIndexItem ({model: board});
      this.addSubview($selector, subView);
    }.bind(this))

    $selector.append($("<li class='new-form'><a href='#board/new'>Create Board</a>"))


    return this;
  }
});

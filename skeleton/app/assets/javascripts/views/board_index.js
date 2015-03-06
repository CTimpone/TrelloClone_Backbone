TrelloClone.Views.BoardIndex = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
    this._subViews = [];
  },

  template: JST["board_index"],

  render: function () {
    this._subViews = [];

    var baseContent = this.template();
    this.$el.html(baseContent)

    this.collection.each(function (board) {
      var subView = new TrelloClone.Views.BoardIndexItem ({model: board});
      this.$el.find('.board-list').append(subView.render().$el);
      this._subViews.push(subView);
    }.bind(this))


    return this;
  },

  remove: function () {
    this._subViews.forEach(function (view) {
      view.remove();
    });

    this._subViews = [];
    Backbone.View.prototype.remove.call(this)
  }
});

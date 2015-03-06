TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  template: JST["board_show"],

  render: function () {
    var content = this.template({board: this.model});
    this.$el.html(content);

    if (this.model.lists().length > 0) {
      this.model.lists().each(function (list) {
        var $selector = this.$el.find('.lists');
        var subView = new TrelloClone.Views.ListShow({model: list});
        this.addSubview($selector, subView);
      }.bind(this));
    }

    return this;
  }
});

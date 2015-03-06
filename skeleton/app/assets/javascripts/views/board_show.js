TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.lists = this.model.lists();
    this.listenTo(this.lists, "add sort", this.render)
  },

  template: JST["board_show"],

  render: function () {
    var content = this.template({board: this.model});
    this.$el.html(content);
    console.log('render')

    if (this.lists.length > 0) {
      this.lists.each(function (list) {
        var $selector = this.$el.find('.lists');
        var subView = new TrelloClone.Views.ListShow({model: list});
        this.addSubview($selector, subView);
      }.bind(this));
    }

    var $aside = this.$el.find('.new-list');
    var newListSubview = new TrelloClone.Views.NewList({collection: this.lists})
    this.addSubview($aside, newListSubview);

    return this;
  }
});

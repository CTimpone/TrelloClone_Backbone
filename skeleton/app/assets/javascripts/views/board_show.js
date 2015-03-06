TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({

  events: {
    "click .destroy": "deleteBoard"
  },

  template: JST["board_show"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.lists = this.model.lists();
    this.listenTo(this.lists, "add sort remove", this.render)
  },

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
  },

  deleteBoard: function (event) {
    event.preventDefault();
    this.model.destroy({
      success: function () {
        Backbone.history.navigate("", {trigger: true});
        this.remove();
      }
    })
  }
});

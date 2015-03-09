TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({

  events: {
    "click .destroy": "deleteBoard"
  },

  template: JST["board_show"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.lists = this.model.lists();
    model = this.model;
    this.listenTo(this.lists, "add sort remove", this.render)
  },

  render: function () {
    var content = this.template({board: this.model});
    this.$el.html(content);

    if (this.lists.length > 0) {
      this.lists.each(function (list) {
        var subView = new TrelloClone.Views.ListShow({model: list, board: this.model});
        this.addSubview(".lists", subView);
      }.bind(this));
    }

    var userTableSubview = new TrelloClone.Views.UserTable({model: this.model});
    this.addSubview('.new-list', userTableSubview)


    var newListSubview = new TrelloClone.Views.NewList({collection: this.lists})
    this.addSubview('.new-list', newListSubview);

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

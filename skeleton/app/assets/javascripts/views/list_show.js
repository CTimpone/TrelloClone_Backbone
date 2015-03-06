TrelloClone.Views.ListShow = Backbone.CompositeView.extend({

  attributes: {
    class: "list"
  },

  template: JST["list_show"],

  events: {
    "click .destroy-list": "deleteList"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model, "destroy", this.remove);
  },

  render: function () {
    var content = this.template({list: this.model});
    this.$el.html(content);
    //
    // if (this.model.lists().length > 0) {
    //   this.model.lists().each(function (list) {
    //     var subView = new TrelloClone.Views.ListShow({model: list});
    //     this.addSubview($selector, subView);
    //   });
    // }

    this.$el.append($("<button class='destroy-list'>Delete</button>"));

    return this;
  },

  deleteList: function (event) {
    event.preventDefault();
    this.model.destroy();


  }
})

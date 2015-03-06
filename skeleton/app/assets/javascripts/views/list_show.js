TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  tagName: "section",

  attributes: {
    class: "list"
  },

  template: JST["list_show"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
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

    return this;
  }
})

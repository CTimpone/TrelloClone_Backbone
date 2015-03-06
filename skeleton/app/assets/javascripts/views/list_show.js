TrelloClone.Views.ListShow = Backbone.CompositeView.extend({

  attributes: {
    class: "list"
  },

  template: JST["list_show"],

  events: {
    "click .destroy-list": "deleteList"
  },

  initialize: function () {
    this.cards = this.model.cards();
    this.listenTo(this.cards, "add sort sync", this.render);
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model, "destroy", this.remove);
  },

  render: function () {
    var content = this.template({list: this.model});
    this.$el.html(content);

    if (this.cards.length > 0) {
      this.cards.each(function (card) {
        var $selector = this.$el.find("ul");
        var subView = new TrelloClone.Views.CardShow({model: card});
        this.addSubview("ul", subView);
      }.bind(this));
    }

    var newCardSubview = new TrelloClone.Views.NewCard({collection: this.cards})
    this.addSubview('.new-card', newCardSubview);

    this.$el.append($("<button class='destroy-list'>Delete List</button>"));

    return this;
  },

  deleteList: function (event) {
    event.preventDefault();
    this.model.destroy();


  }
})

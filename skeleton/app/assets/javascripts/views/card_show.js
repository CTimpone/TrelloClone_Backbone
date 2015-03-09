TrelloClone.Views.CardShow = Backbone.CompositeView.extend({
  tagName: "li",

  attributes: {
    class: "card"
  },

  events: {
    "click .hover-visible": "deleteCard",
    "dblclick div": "allowChange",
    "submit .make-card-changes": "editCard"
  },

  template_show: JST["card_show"],

  template_change: JST["card_change"],

  initialize: function (options) {
    this.board = options.board;
    this.assignments = new TrelloClone.Collections.CardAssignments({card_id: this.model.id})
    this.assignments.fetch();
  },

  render: function () {
    var content = this.template_show({card: this.model});
    this.$el.html(content);

    this.model.items().each(function (item) {
      var itemSubview = new TrelloClone.Views.Item({model: item});
      this.addSubview(".items", itemSubview);
    }.bind(this))

    var assignmentSubview = new TrelloClone.Views.AssignmentItem({
      model: this.model,
      user: this.board.author(),
      collection: this.assignments
    });
    this.addSubview(".checkbox-list", assignmentSubview);

    this.board.members().each(function (member) {
      assignmentSubview = new TrelloClone.Views.AssignmentItem({
        model: this.model,
        user: member,
        collection: this.assignments
      });
      this.addSubview(".checkbox-list", assignmentSubview);
    }.bind(this));

    return this;
  },

  allowChange: function (event) {
    var content = this.template_change({card: this.model});

    this.$el.html(content);
  },

  editCard: function (event) {
    event.preventDefault();
    var data = $(event.target).serializeJSON();
    data.list_id = this.model.get('list_id');

    this.model.save(data, {wait: true})
  },

  deleteCard: function (event) {
    event.preventDefault();
    this.model.destroy();
  }

});

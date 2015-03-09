TrelloClone.Views.NewBoard = Backbone.CompositeView.extend({
  events: {
    "click .add-member": "addMember",
    "click .submit": "createBoard"
  },

  tagName: "form",

  attributes: {
    class: "new-board"
  },

  template: JST["new_board"],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.memberCount = 0;

    return this;
  },

  addMember: function (event) {
    event.preventDefault();
    var memberInputSubview = new TrelloClone.Views.AddMembership({dataId: this.memberCount});

    this.memberCount += 1;

    this.addSubview(".member-inputs", memberInputSubview);
  },

  createBoard: function (event) {
    event.preventDefault();

    var memberData = $(event.target).parent().serializeJSON();
    var boardData = {title: memberData.title};
    delete memberData['title'];

    this.collection.create(boardData, {
      wait: true,

      success: function (model) {
        Backbone.history.navigate("", {trigger: true});
        _.each(memberData, function (email) {
          var boardMembership = new TrelloClone.Models.BoardMembership({board_membership: {board_id: model.id, email: email}})
          boardMembership.save()
        });
      }
    });
  }
});

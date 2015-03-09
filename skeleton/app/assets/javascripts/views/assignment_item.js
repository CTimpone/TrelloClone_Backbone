TrelloClone.Views.AssignmentItem = Backbone.CompositeView.extend({
  template: JST["card_assignment_item"],

  events: {
    "click .assignment-checkbox": "handleAction"
  },

  initialize: function (options) {
    this.user = options.user;
    this.assigned = false;
    this.listenTo(this.collection, "sync", this.render)
  },

  render: function () {
    var pos = this.collection.pluck("user_id").indexOf(this.user.id);
    if (pos !== -1) {
      this.assigned = true;
      this.assignment = this.collection.models[pos];
    }
    var content = this.template({user: this.user, assigned: this.assigned});
    this.$el.html(content);

    return this;
  },

  handleAction: function (event) {
    var $target = $(event.currentTarget)

    if ($target.context.checked) {
      var data = {user_id: this.user.id, card_id: this.model.id};
      this.collection.create(data)
    } else {
      this.assignment.destroy({
        success: function () {
          this.assigned = false;
        }.bind(this)
      });
    }
  }
});

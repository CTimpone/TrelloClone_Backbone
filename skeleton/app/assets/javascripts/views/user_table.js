TrelloClone.Views.UserTable = Backbone.View.extend({
  tagName: "table",

  render: function () {
    this.$el.append("<tr><th>Author:</th><th>" +
                    this.model.author().escape('email') +
                    "</th></tr>")
    this.model.members().each(function (member) {
      this.$el.append("<tr><td>Member:</td><td>" +
                      member.escape('email') +
                      "</td></tr>")
    }.bind(this));

    return this;
  }
})

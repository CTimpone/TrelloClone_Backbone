TrelloClone.Views.Item = Backbone.CompositeView.extend({
  tagName: "li",

  attributes: {
    class: "item-list-item"
  },

  events: {
    "click .edit-item": "generateForm",
    "submit .item-change": "updateItem"
  },

  template_show: JST["item_show"],

  template_form: JST["item_form"],

  render: function () {
    var content = this.template_show({item: this.model});
    this.$el.html(content);

    return this;
  },

  generateForm: function (event) {
    var content = this.template_form({item: this.model});
    this.$el.html(content);

    return this;
  },

  updateItem: function (event) {
    event.preventDefault();
    var baseData = $(event.target).serializeJSON();
    var data = {item: baseData};

    x= this.model.save(data, {
      success: function () {
        this.render()
      }.bind(this)
    })
  }
});

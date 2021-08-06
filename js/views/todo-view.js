TodoView = Backbone.View.extend ({
  tagName: 'li',

  template: Handlebars.compile($('#item-template').html()),

  initialize: function (){
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  },

  events: {
    'click .toggle': 'toggleCompleted',
    'click .destroy': 'delete'

  },

  toggleCompleted: function (){
    this.model.toggle();
  },

  delete: function () {
    this.model.destroy();
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));

    this.$el.toggleClass('completed', this.model.get('completed'));
    return this;
  }
});
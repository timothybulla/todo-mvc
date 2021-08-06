var AppView = Backbone.View.extend({
  el: '.todoapp',

  events: {
    'keypress .new-todo': 'createOnEnter',
    'click .toogle-all-complete': 'handleToggleAllComplete'
  },

  initialize: function () {
    this.$input = this.$('.new-todo');
    this.$list = this.$('.todo-list');

    this.listenTo(todosCollection, 'add', this.addOne);
  },

  handleToggleAllComplete: function (){
    todosCollection.toggleAllCompleted();
  },

  addOne: function (todoModel) {
    var view = new TodoView({ model:todoModel });
    this.$list.append(view.render().el); 
  },

  createOnEnter: function (e){
    if (e.which === 13 && this.$input.val()) {
      todosCollection.add({
        title: this.$input.val(),
        completed: false
      });
      
      this.$input.val('');
    }
  }
});
var TodosCollection = Backbone.Collection.extend({
  model: TodosModel,

  toggleAllCompleted: function () {
    this.each(function (m) {
      console.log(m);
      m.set('completed', !m.get('completed'));
    });
  }
});




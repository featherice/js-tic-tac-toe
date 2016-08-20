var Controller, Model, View, controller, my_model, my_view;

Model = (function() {
  function Model() {}

  Model.prototype.turn = 1;

  Model.prototype.board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  Model.prototype.winner = '';

  Model.prototype.win_coord = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2.5, 8], [0, 4, 8], [2, 4, 6]];

  return Model;

})();

Controller = (function() {
  function Controller(model, view) {
    this.model = model;
    this.view = view;
  }

  Controller.prototype.round = function() {
    return this.view.draw_board(this.model.board);
  };

  return Controller;

})();

View = (function() {
  function View() {}

  View.prototype.draw_board = function(board) {
    var i, j, results;
    console.log('-------------');
    results = [];
    for (i = j = 0; j < 3; i = ++j) {
      console.log('|', board[0 + i * 3], '|', board[1 + i * 3], '|', board[2 + i * 3], '|');
      results.push(console.log('-------------'));
    }
    return results;
  };

  return View;

})();

my_model = new Model();

my_view = new View();

controller = new Controller(my_model, my_view);

controller.round();

class Model
	turn: 1
	board: [1...10]
	winner: ''
	win_coord: [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2.5,8],[0,4,8],[2,4,6]]

class Controller
	constructor: (@model, @view) ->
	round: ->
		this.view.draw_board(this.model.board)

class View
	draw_board: (board) ->
		console.log('-------------')
		for i in [0...3]
			console.log('|',board[0+i*3],'|', board[1+i*3],'|', board[2+i*3],'|')
			console.log('-------------')
			alert('ll')

my_model = new Model()
my_view = new View()
controller = new Controller(my_model, my_view)
controller.round()
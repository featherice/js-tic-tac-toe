class Model
	board: [1...10]
	turn: 1
	win: false
	winner: ''
	win_coord: [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

class Controller
	constructor: (@model, @view) ->
	round: ->
		this.view.draw_board(this.model.board)



class View
	draw_board: (board) ->
		document.write('--------'+"<br>")
		for i in [0...3]
			document.write('|', board[0]+i*3, '|', board[1]+i*3, '|', board[2]+i*3, '|', "<br>")
			document.write('--------'+"<br>")

model = new Model()
view = new View()
controller = new Controller(model, view)
controller.round()

	


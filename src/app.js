import ReactDOM from 'react-dom'
import React, { Component } from 'react';

var Gameboard = React.createClass({
	getInitialState: function() {
		return {
			gameStarted: false,
			gameFinished: false,
			board: [
			'', '', '',
			'', '', '',
			'', '', ''
			],
			winCoord: [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],
			player: 'X',
			turn: 1
		};
	},
	updateBoard: function(index) {
		var board = this.state.board;
		var winCoord = this.state.winCoord;
		var turn = this.state.turn;
		var player = this.state.player;
		var win = false;
		if ((board[index] === 'X' || board[index] === 'O')) return;
		board[index] = player;	
		this.setState({board: board, player: player === 'O' ? 'X' : 'O', turn: turn += 1})
		if (turn > 5) {
			winCoord.forEach(function(item, i, winCoord) {
			if (board[item[0]] === board[item[1]] && board[item[0]] === board[item[2]] && board[item[0]] !== '') {
				win = true
			}
		});
		}
		if (win === true) {
			this.gameFinished(player);
			return;
		}
		if (turn > 9) {
			this.gameFinished('nobody');
			return;
		}
	},
	newGame: function() {
		this.setState(this.getInitialState());
		this.setState({gameStarted: true})
	},
	gameFinished: function(player) {
		this.setState({player: player, gameFinished: true, gameStarted: false})
	},
	render: function() {
		var menu = this.state.gameStarted === true ? 'menu hidden' : 'menu'
		var gameBoard = this.state.gameStarted === true ? 'gameBoard' : 'gameBoard hidden'
		var winner = this.state.gameFinished === true ? 'Winner is '+this.state.player : ''
		return <div>
			<div className={menu}>
			<div className='newGameButton' onClick={this.newGame}><p>New Game</p></div>
			<p className='winner'>{winner}</p>
			</div>
            <div className={gameBoard}>
                { this.state.board.map(function(cell, index){
                    return (<Cell value={cell} key={index} cellIndex={index} updateBoard={this.updateBoard} />);
                }, this) }
            </div>           
        </div>;
        }
    });

var Cell = React.createClass({
	changeValue: function() {
        this.props.updateBoard(this.props.cellIndex);
    },
	render: function() {
		return <div className="cell" onClick={this.changeValue}>{this.props.value}</div>
	}
});


ReactDOM.render(
	<Gameboard />,
	document.getElementById('content')
);
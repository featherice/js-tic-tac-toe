import ReactDOM from 'react-dom'
import React, { Component } from 'react';

var Gameboard = React.createClass({
	getInitialState: function() {
		return {
			board: [
			'', '', '',
			'', '', '',
			'', '', ''
			],

			turn: '1'
		};
	},
	render: function() {
		return <div>
            <div className='gameBoard'>
                { this.state.board.map(function(cell, index){
                    return (
                        <Cell key={index} />
                        );
                }, this) }
            </div>
        </div>;
        }
    });
var Cell = React.createClass({
	render: function() {
		return <div className="cell">x</div>
	}
});


ReactDOM.render(
	<Gameboard />,
	document.getElementById('content')
);
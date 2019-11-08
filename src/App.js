import React from 'react';
import logo from './logo.svg';
import './App.css';


class Board extends React.Component{

  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25
  }

  constructor(props){
    super(props)
    this.state = {
      hasWon: false,
      board: this.createBoard()
    }

    this.createBoard = this.createBoard.bind(this);
  }

  createBoard(){
    let board = [];
    for(let y = 0; y < this.props.nrows; y++){
      let row = [];
      for(let x = 0; x < this.props.ncols; x++){
        row.push(Math.random() < this.props.chanceLightStartsOn)
      }
      board.push(row);
    }
    return board;
  }

  render(){
    return(<h1>hi</h1>)
  }

}



class App extends React.Component {
  

  render(){

    return (
      <div className="App">
       <Board />
      </div>
    );
  }
}

export default App;

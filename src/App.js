import React from 'react';
import logo from './logo.svg';
import './App.css';

class Cell extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(evt){
    this.props.flipCellsAroundMe();
  }

  render(){
    let classes = "Cell " + (this.props.isLit ? "Cell-lit" : "");

    return(
      <td className={classes} onClick={this.handleClick} />
    )

  }

}


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
    this.flipCellsAround = this.flipCellsAround.bind(this);
  }

  flipCellsAround(coord){

    console.log("flipping" + (coord))

    let {ncols, nrows, } = this.props;
    let board = this.state.board;
    let [y , x] = coord.split("-").map(Number);

    function flipCell(y, x){
      if( x >=  0 && x < ncols && y >= 0 && y < nrows){
        board[y][x] = !board[y][x];
      }
    }


    flipCell(y,x)

    this.setState({
      board
    })

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

    let tblBoard = [];
    for(let y = 0; y < this.props.nrows; y++){
      let row = [];
      for(let x = 0; x < this.props.ncols; x++){
        let coord = `${y}-${x}`
        row.push(<Cell flipCellsAroundMe = {()=> this.flipCellsAround(coord)} key = {coord} isLit = {this.state.board[y][x]} />)
      }
      tblBoard.push(<tr key={y}>{row}</tr>)
    }
    return(
      <table className = "Board">
        <tbody>
          {tblBoard}
        </tbody>
      </table>
    )
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

import { useState } from 'react'


function Square({value, onSquareClick}) { // value is a prop that declared in app() value of value is {squares}, onSquareClick is the same

  return (
    <button className='square shadow' onClick={onSquareClick}>{value}</button>
  )
}

export default function App() {
  const [xItIs, setXItIs] = useState(true) // true by default
  const [squares, setSquares] = useState(Array(9).fill(null));

  // Function HandlerClick
  function clickHandler(i) {
    const nextSquares = squares.slice();

    if(xItIs) { // alwyas true 
      nextSquares[i] = 'x';
    } else { // when it false change it to o
      nextSquares[i] = 'o';
    }
    setSquares(nextSquares);
    setXItIs(!xItIs); // every condition done it will set the x as not x "!x" so it will false in the next render condition so that the 'o' player can play
  }
  return (
    <>
      <div className="container">
        <div className="outer-container text-center justify-content-center align-items-center">
          <div className="headlineGames text-center justify-content-center align-items-center">
            <h1>Tic-tac-toe Games</h1>
            <p className='fst-italic text-white text-opacity-75'>
              <small>Created By : Retiortuk Using Javascript and React</small></p>
          </div>
          <div className="board">
            <Square value={squares[0]} onSquareClick={()=> clickHandler(0)} />
            <Square value={squares[1]} onSquareClick={()=> clickHandler(1)} />
            <Square value={squares[2]} onSquareClick={()=> clickHandler(2)} />
            <Square value={squares[3]} onSquareClick={()=> clickHandler(3)} />
            <Square value={squares[4]} onSquareClick={()=> clickHandler(4)} />
            <Square value={squares[5]} onSquareClick={()=> clickHandler(5)} />
            <Square value={squares[6]} onSquareClick={()=> clickHandler(6)} />
            <Square value={squares[7]} onSquareClick={()=> clickHandler(7)} />
            <Square value={squares[8]} onSquareClick={()=> clickHandler(8)} />
          </div>
          <h5 className='turnAndWin'>Who's Turn and who's Won:</h5>
          <div>
            <button className='reset-btn'>Reset</button>
          </div>
        </div>
      </div>
    </>
  )
}


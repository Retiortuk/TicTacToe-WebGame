import { useEffect } from 'react';
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
    if(squares[i] || rulesWin(squares)) {
      return; // if the squares/box has value and somebody is win then return it don't override it and stop the games
    }
    const nextSquares = squares.slice();

    if(xItIs) { // alwyas true 
      nextSquares[i] = 'x';
    } else { // when it false change it to o
      nextSquares[i] = 'o';
    }
    setSquares(nextSquares);
    setXItIs(!xItIs); // every condition done it will set the x as not x "!x" so it will false in the next render condition so that the 'o' player can play

  }

  // if win and draw
  const winner = rulesWin(squares);
  let status;

  if(winner) {
    status = `Congratulations ${winner} is the Winner!`;
  } else if (!squares.includes(null)) {
    status = "Game Draw Quite Intense!"
  } else {
    status = "Player " + (xItIs ? 'x' : 'o') + " Turn";
  }

  // Play Audio If WIN
  useEffect(() => {
    if(winner) {
      const audioWin = new Audio('/Victory_Sound_Effect.mp3');
      audioWin.play();
    } else if (!squares.includes(null)) {
      const audioDraw = new Audio('/draw_sound.mp3');
      audioDraw.play();
    }
  },[winner, squares])

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
          <h4 className='turnAndWin'>{status}</h4>
          { winner || !squares.includes(null) ? (
            <h6 className='turnAndWin'>Click Reset Button To Start Over!</h6>
          ): null}
          <div>
            <button className='reset-btn' onClick={()=> window.location.reload()}>Reset</button>
          </div>
        </div>
      </div>
    </>
  )
}

function rulesWin(squares) {
  const lines = [
    // Horizontal Rules
    [0,1,2],
    [3,4,5],
    [6,7,8],
    // Vertical Rules
    [0,3,6],
    [1,4,7],
    [2,5,8],
    // Crossed Rules
    [0,4,8],
    [2,4,6]
  ];

  for(let i = 0; i < lines.length; i++) {
    const [a,b,c] = lines[i];

    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) { // if value of squares a and b same and value a and c same then return it that's the winn!
      return squares[a];
    }
  }
  return null; // if not then return null a.k.a no win
}

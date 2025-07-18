import { useState } from 'react'


function Square() {
  return (
    <button className='square shadow'>X</button>
  )
}

export default function App() {

  return (
    <>
      <div className="container">
        <div className="outer-container justify-content-center align-items-center">
          <h1 className='headlineGames text-center'>Tic-tac-toe Games</h1>
          <div className="board">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
        </div>
      </div>
    </>
  )
}


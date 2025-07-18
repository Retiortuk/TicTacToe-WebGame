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
        <div className="outer-container text-center justify-content-center align-items-center">
          <div className="headlineGames text-center justify-content-center align-items-center">
            <h1>Tic-tac-toe Games</h1>
            <p className='fst-italic text-white text-opacity-75'>
              <small>Created By: Retiortuk Using Javascript and React</small></p>
          </div>
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
          <h5 className='turnAndWin'>Who's Turn and who's Won:</h5>
          <div>
            <button className='reset-btn'>Reset</button>
          </div>
        </div>
      </div>
    </>
  )
}


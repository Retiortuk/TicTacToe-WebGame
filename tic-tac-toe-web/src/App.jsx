import { useState } from 'react'


function Square() {
  const [value, setValue] = useState(null);

  // Function for handle the click 
  function handleClick() {
    setValue('x'); // Wil set the default value as x when button is clicked 
  }

  return (
    <button className='square shadow' onClick={handleClick}>{value}</button>
  )
}

export default function App() {
  const [isXNext, setXisNext] = useState();

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
            <Square value='' />
            <Square value='' />
            <Square value='' />
            <Square value='' />
            <Square value='' />
            <Square value='' />
            <Square value='' />
            <Square value='' />
            <Square value='' />
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


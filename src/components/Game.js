import React, { useState } from 'react'
import ReloadButton from './ReloadButton';
import Board from './Board'
import {calculateWinner} from "../helper";

const startButton = {
    listStyle: 'none'
}

const resultStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '250px'
}

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0)
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(history[stepNumber])

    const handleClick = i => {
        const timeInHistory = history.slice(0, stepNumber + 1)
        const current = timeInHistory[stepNumber]
        const squares = [...current]
        /* If user click an occupied square or if game is won, return */
        if (winner || squares[i]) return
        /* Put an X or an O in the clicked square */
        squares[i] = xIsNext ? 'X' : 'O'
        setHistory([...timeInHistory, squares])
        setStepNumber(timeInHistory.length)
        setXIsNext(!xIsNext)
    }

    const jumpTo = step => {
        step === 0 && setHistory([Array(9).fill(null)])
        setStepNumber(step)
        setXIsNext(step % 2 === 0)
    }

    const renderMoves = () => (
        history.map((_step, move) => {
            const destination = !move ? null : `Go to movement#${move}`
            return (
                <li style={startButton} key={move}>
                    {
                        !destination ?
                        null :
                        <button style={{marginBottom: '5px'}} onClick={() => jumpTo(move)}>{destination}</button>
                    }
                </li>
            )
        })
    )

    return (
        <>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div style={resultStyle}>
                <ReloadButton size='32' onClick={() => jumpTo(0)}/>
                <p>{winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`}</p>
                {renderMoves()}
            </div>
        </>
    )
}

export default Game
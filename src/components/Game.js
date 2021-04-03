import React, { useState } from 'react'
import Board from './Board'
import {calculateWinner} from "../helper";

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = i => {
        const boardCopy = [...board]
        /* If user click an occupied square or if game is won, return */
        if (winner || boardCopy[i]) return
        /* Put an X or an O in the clicked square */
        boardCopy[i] = xIsNext ? 'X' : 'O'
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    const jumpTo = () => {

    }

    const renderMove = () => {

    }

    return (
        <Board squares={board} onClick={handleClick} />
    )
}

export default Game
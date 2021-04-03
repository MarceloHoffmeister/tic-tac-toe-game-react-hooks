import React from 'react'
import Square from './Square'

const Board = ({ squares, onClick }) => (
    <div>
        <Square value="1" onClick={() => onclick('dummy value')} />
        <Square value="2" onClick={() => onclick('dummy value')} />
        <Square value="3" onClick={() => onclick('dummy value')} />
        <Square value="4" onClick={() => onclick('dummy value')} />
        <Square value="5" onClick={() => onclick('dummy value')} />
        <Square value="6" onClick={() => onclick('dummy value')} />
        <Square value="7" onClick={() => onclick('dummy value')} />
        <Square value="8" onClick={() => onclick('dummy value')} />
        <Square value="9" onClick={() => onclick('dummy value')} />
    </div>
)

export default Board
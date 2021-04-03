import React from 'react'

const style = {
    background: '#7d7d7d7',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
}

const Square = ({ value, onClick }) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>
)

export default Square
import React from 'react'
import "./StatusCard.css"

function StatusCard({ title, counter }) {
    return (
        <div className='card'>
            <h4>{title}</h4>
            <h2 style={{ "color": "rgb(0,107,180)" }}>{counter}</h2>
        </div>
    )
}

export default StatusCard
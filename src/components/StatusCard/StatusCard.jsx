import React from 'react'
import "./StatusCard.css"

function StatusCard({ title, counter, color }) {
    return (
        <div className='card'>
            <h4>{title}</h4>
            <h2 style={{ "color": color }}>{counter}</h2>
        </div>
    )
}

export default StatusCard
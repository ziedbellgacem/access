import React from 'react'
import "./Dashbord.css"
import { Results } from '../../Results'
import { useState } from 'react'
import { useEffect } from 'react';
function Dashbord() {

    const [total, setTotal] = useState(0);
    const [active, setActive] = useState(0);
    const [disconnected, setDisconnected] = useState(0);
    const [pending, setPending] = useState(0);
    const [neverCon, setNeverCon] = useState(0);

    useEffect(() => {
        setTotal(Results.filter((result) => result.id !== "000").length)
        setActive(Results.filter((result) => result.id !== "000" && result.status === "active").length)
        setDisconnected(Results.filter((result) => result.id !== "000" && result.status === "disconnected").length)
        setPending(Results.filter((result) => result.id !== "000" && result.pending === "pending").length)
        setNeverCon(Results.filter((result) => result.id !== "000" && result.status === "never_connected").length)
    }, [])

    return (
        <div>
            <h4>Hello admin,</h4>
            <h4>View the status of your agents and the evolution of their latest alerts</h4>
            <h2>Installed agents by their status</h2>
            <div className='listSatus'>
                <div className='agentBox'>
                    <h4>Local agents</h4>
                    <h2 style={{ "color": "rgb(0,107,180)" }}>{total}</h2>
                </div>
                <div className='agentBox'>
                    <h4>Active agents</h4>
                    <h2 style={{ "color": "rgb(0, 120, 113)" }}>{active}</h2>
                </div>
                <div className='agentBox'>
                    <h4 >Disconnected agents</h4>
                    <h2 style={{ "color": "rgb(189, 39, 30)" }}>{disconnected}</h2>
                </div>
                <div className='agentBox'>
                    <h4>Pending agents</h4>
                    <h2 style={{ "color": "rgb(254, 197, 20)" }}>{pending}</h2>
                </div>
                <div className='agentBox'>
                    <h4>Never connected agents</h4>
                    <h2 style={{ "color": "rgb(100, 106, 119)" }}>{neverCon}</h2>
                </div>
            </div>
        </div>
    )
}

export default Dashbord
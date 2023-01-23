import React from 'react'
import "./Dashbord.css"
import { Results } from '../../Results'
import { useState } from 'react'
import { useEffect } from 'react';
import StatusCard from '../../components/StatusCard/StatusCard';
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
                <StatusCard title={"Total agents"} counter={total} color={"rgb(0,107,180)"} />
                <StatusCard title={"Active agents"} counter={active} color={"rgb(0, 120, 113)"} />
                <StatusCard title={"Disconnected agents"} counter={disconnected} color={"rgb(189, 39, 30)"} />
                <StatusCard title={"Pending agents"} counter={pending} color={"rgb(254, 197, 20)"} />
                <StatusCard title={"Never connected agents"} counter={neverCon} color={"rgb(100, 106, 119)"} />
            </div>
        </div>
    )
}

export default Dashbord
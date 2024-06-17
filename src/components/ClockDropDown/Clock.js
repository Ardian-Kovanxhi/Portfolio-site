import { useState, useEffect } from "react";
import usImg from "../../images/flags/us.png"
import jpnImg from "../../images/flags/jp.png"
import albImg from "../../images/flags/alb.png"
import "./Clock.scss";

export default function Clock() {

    const options = { hour: "2-digit", minute: "2-digit", second: undefined, hour12: false }

    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString("en-US", { ...options, userTimeZone }));

    const [nyTime, setNyTime] = useState(new Date().toLocaleTimeString("en-US", { ...options, timeZone: "America/New_York" }));
    const [kosTime, setKosTime] = useState(new Date().toLocaleTimeString("en-US", { ...options, timeZone: "Europe/Tirane" }));
    const [jpnTime, setJpnTime] = useState(new Date().toLocaleTimeString("en-US", { ...options, timeZone: "Asia/Tokyo" }));

    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString("en-US", { ...options, userTimeZone }));
            setNyTime(new Date().toLocaleTimeString("en-US", { ...options, timeZone: "America/New_York" }));
            setKosTime(new Date().toLocaleTimeString("en-US", { ...options, timeZone: "Europe/Tirane" }));
            setJpnTime(new Date().toLocaleTimeString("en-US", { ...options, timeZone: "Asia/Tokyo" }));
        }, 1000);

        return () => clearInterval(interval);
    }, [userTimeZone]);
    return (
        <div>
            <button
                className='clock'
                onClick={() => setShowMenu(!showMenu)}
            >
                <time>
                    {currentTime}
                </time>
            </button>
            <span className={`clock-dropdown ${showMenu}`}>
                <time>
                    <img src={usImg} alt="USA flag" />
                    {nyTime}
                </time>
                <time>
                    <img src={albImg} alt="Albanian flag" />
                    {kosTime}
                </time>
                <time>
                    <img src={jpnImg} alt="Japanese flag" />
                    {jpnTime}
                </time>
            </span>
        </div>
    )
}
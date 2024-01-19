import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import './Clock.css'

export default function Clock() {
    const [userTimeZone, setUserTimeZone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const [currentTime, setCurrentTime] = useState(moment.tz(new Date(), userTimeZone));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment.tz(new Date(), userTimeZone));
        }, 1000);

        return () => clearInterval(interval);
    }, [userTimeZone]);

    return (
        <div className='topBar'>
            {/* <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '20px' }}>
                Corporate
                <button>|slider|</button>
                Personal
            </div> */}
            <div className='clock'>
                {currentTime.format('HH:mm')}
            </div>
        </div>
    );
};
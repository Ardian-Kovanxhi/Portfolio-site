import { useState } from 'react';
import door1 from '../../images/modals/BnB/door_loop_1.png'
import door2 from '../../images/modals/BnB/door_loop_2.png'

import walkway from '../../images/modals/BnB/walkway.jpg'
import wall from '../../images/modals/BnB/wall.jpg'

export default function ArdianBnB() {

    const [hovered, sethovered] = useState(false)

    return (
        <div
            className='airbnb-container parent'
            style={{
                width: '100%',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center'
            }}
        >

            <img
                style={{
                    width: '150%',
                    height: '35%',
                    position: 'absolute',
                    bottom: 0
                }}
                src={walkway}
                alt=''
            />

            <span className='home blurb-container'>
                <p style={{ margin: "5px" }}>
                    Inspired by AirBnB, ArdianBnB is a renting site, where you can post your home or rent another one
                    <br />
                    <div style={{ display: "block", marginBottom: "10px" }} role='separator' />
                    Live from 6am - 6pm
                    <br />
                    <div style={{ display: "block", marginBottom: "10px" }} role='separator' />
                    (Javascript, Express.js, Sequelize, SQLite, Postgres, React.js, Redux, CSS, HTML5)
                </p>
            </span>

            <div
                style={{
                    width: '100%',
                    height: '65%',
                }}
            >

                <img
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    src={wall}
                    alt=''
                />

                <img
                    style={{
                        width: '50%',
                        height: '55%',
                        position: 'absolute',
                        top: '18%',
                        left: '22%'
                    }}
                    alt=''
                    onMouseEnter={() => sethovered(true)}
                    onMouseLeave={() => sethovered(false)}
                    onClick={() => window.open('https://ardian-kovanxhi-aribnb.onrender.com', '_blank')}
                    src={hovered ? door2 : door1}
                />
            </div>

            {/* https://cdn3.vectorstock.com/i/1000x1000/68/42/pixel-open-closed-door-detailed-isolated-vector-22866842.jpg */}
        </div>
    )
}
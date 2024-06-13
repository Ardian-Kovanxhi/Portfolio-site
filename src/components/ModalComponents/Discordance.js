import { useState } from 'react'
import room from '../../images/modals/backgrounds/gamer_room.png'
import arrow from '../../images/modals/icons/cropped_arrow.png'
import hoveredArrow from '../../images/modals/icons/pointing_arrow.png'

export default function Discordance() {

    const [hovered, setHovered] = useState(false)

    return (
        <div
            className='disc-div parent'
        >
            <img
                style={{
                    height: '100%',
                    width: '150%'
                }}
                src={room}
                alt=''
            />

            <div
                className='disc-arrow-div'
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => window.open('https://group-4-discord.onrender.com', '_blank')}

            >

                {hovered ?
                    <div
                        style={{
                            color: 'white',
                        }}
                    >
                        LOG IN
                    </div>
                    :
                    <div
                        style={{
                            color: 'transparent',
                        }}
                    >
                        .
                    </div>

                }
                <img
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                    src={hovered ? hoveredArrow : arrow}
                    alt=''
                />
            </div>


            <div className='disc blurb-container'>
                <div>
                    Inspired by Discord, Discordance is a chat app developed by myself along with 3 other developers where you can  chat with you friends both directly and in group chats
                </div>
                <div style={{ marginBottom: '5px' }}>
                    (Python, JavaScript, Flask, SQLAlchemy, SQLite, Postgres, React.js, Redux, CSS, HTML5, Socket.io)
                </div>
            </div>
        </div>
    )
}
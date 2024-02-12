import { useState } from 'react'
import forestImg from '../../images/modals/backgrounds/small-forest.jpg'
import arrowHovered from '../../images/modals/icons/pointing_arrow.png'
import arrow from '../../images/modals/icons/cropped_arrow.png'
import './Components.scss'

export default function Soundlog() {
    const [hover, setHover] = useState(false)
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                height: '100%',
                overflow: 'hidden'
            }}
        >
            <div className='forest blurb-container'>
                <div>
                    Inspired by Soundcloud, Soundlog is a music playing website with functionality in mind where users can play, upload, like, and comment on their favorite songs
                </div>
                <div style={{ marginBottom: '5px' }}>
                    (Javascript, Express.js, Sequelize, SQLite, Postgres, React.js, Redux, CSS, HTML5, AWS S3)
                </div>
            </div>
            <img
                src={forestImg}
                style={{
                    width: '140%',
                    height: '100%'
                }}
                alt=''
            />
            <img
                className='forest-arrow'
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => window.open('https://ardian-kovanxhi-soundcloud.onrender.com', '_blank')}
                src={hover ? arrowHovered : arrow}
                alt='retro point and click styled arrow redirect'
            />
        </div>
    )
}
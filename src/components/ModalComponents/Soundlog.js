import { useState } from 'react';
import forestImg from '../../images/modals/backgrounds/small-forest.jpg'
import arrowHovered from '../../images/modals/icons/pointing_arrow.png'
import arrow from '../../images/modals/icons/cropped_arrow.png'
import './Components.scss'

export default function Soundlog() {
    const [hover, setHover] = useState(false)
    return (
        <div
            className='soudlog-container parent'
            style={{
                display: 'flex',
                justifyContent: 'center',
                overflow: 'hidden',
            }}
        >
            <span className='forest blurb-container'>
                <p style={{ margin: "5px" }}>
                    Inspired by Soundcloud, Soundlog is a music playing website with functionality in mind where users can play, upload, like, and comment on their favorite songs<br />
                    <div style={{ display: "block", marginBottom: "10px" }} role='separator' />
                    Live from 6am - 6pm<br />
                    <div style={{ display: "block", marginBottom: "10px" }} role='separator' />
                    (Javascript, Express.js, Sequelize, SQLite, Postgres, React.js, Redux, CSS, HTML5, AWS S3)
                </p>
            </span>
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
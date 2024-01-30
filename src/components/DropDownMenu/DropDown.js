import { useState } from 'react'
import { usePage } from '../../context/PageContext'
import photo from '../../images/photo.png'


import windowsXp from '../../images/backgrounds/windowsXP.png'
import matrix from '../../images/backgrounds/matrix-rain.gif'
import boat from '../../images/studio ghibli/boat.webp'
import chilling from '../../images/studio ghibli/chilling.png'
import link from '../../images/studio ghibli/link.jpg'
import ghibliGif from '../../images/studio ghibli/studio-ghibli.gif'
import sunset from '../../images/studio ghibli/sunset-forest.png'
import totoro from '../../images/studio ghibli/Totoro.png'
import berserkGif from '../../images/backgrounds/guts-vs-griffith.gif'

import './DropDown.scss'

export default function DropDownMenu() {

    const [showMenu, setShowMenu] = useState(false);

    const { setBackground } = usePage();

    return (
        <div>
            <button
                className='cycle-btn'
                onClick={() => setShowMenu(showMenu ? false : true)}
            >
                <img
                    style={{
                        width: '25px',
                        // height: '19px',
                        paddingTop: '2px'
                    }}
                    src={photo}
                    alt=''
                />
            </button>

            <div
                className={`option-container${showMenu ? '' : ' invisible'}`}
            >

                <div
                    onClick={() => {
                        setBackground(windowsXp)
                        setShowMenu(false)
                    }}
                >
                    Windows
                </div>

                <div
                    onClick={() => {
                        setBackground(matrix)
                        setShowMenu(false)
                    }}
                >
                    Matrix
                </div>

                <div
                    onClick={() => {
                        setBackground(boat)
                        setShowMenu(false)
                    }}
                >
                    Boat
                </div>

                <div
                    onClick={() => {
                        setBackground(chilling)
                        setShowMenu(false)
                    }}
                >
                    Chilling
                </div>

                <div
                    onClick={() => {
                        setBackground(link)
                        setShowMenu(false)
                    }}
                >
                    Link
                </div>

                <div
                    onClick={() => {
                        setBackground(ghibliGif)
                        setShowMenu(false)
                    }}
                >
                    Ghibli Gif
                </div>

                <div
                    onClick={() => {
                        setBackground(sunset)
                        setShowMenu(false)
                    }}
                >
                    Sunset
                </div>

                <div
                    onClick={() => {
                        setBackground(totoro)
                        setShowMenu(false)
                    }}
                >
                    Totoro
                </div>

                <div
                    onClick={() => {
                        setBackground(berserkGif)
                        setShowMenu(false)
                    }}
                >
                    Berserk
                </div>

            </div>
        </div>
    );
};
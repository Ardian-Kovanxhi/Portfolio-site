import { useState } from 'react';
import { usePage } from '../../context/PageContext';

import photo from '../../images/icons/photo.png';


import windowsXp from '../../images/backgrounds/windowsXP.png';
import matrix from '../../images/backgrounds/matrix-rain.gif';
import boat from '../../images/backgrounds/studio ghibli/boat.webp';
import chilling from '../../images/backgrounds/studio ghibli/chilling.png';
import link from '../../images/backgrounds/studio ghibli/link.jpg';
import ghibliGif from '../../images/backgrounds/studio ghibli/studio-ghibli.gif';
import sunset from '../../images/backgrounds/studio ghibli/sunset-forest.png';
import totoro from '../../images/backgrounds/studio ghibli/Totoro.png';
import berserkGif from '../../images/backgrounds/guts-vs-griffith.gif';

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

                <button
                    onClick={() => {
                        setBackground(windowsXp)
                        setShowMenu(false)
                    }}
                >
                    Windows
                </button>

                <button
                    onClick={() => {
                        setBackground(matrix)
                        setShowMenu(false)
                    }}
                >
                    Matrix
                </button>

                <button
                    onClick={() => {
                        setBackground(boat)
                        setShowMenu(false)
                    }}
                >
                    Marnie
                </button>

                <button
                    onClick={() => {
                        setBackground(chilling)
                        setShowMenu(false)
                    }}
                >
                    Chilling
                </button>

                <button
                    onClick={() => {
                        setBackground(link)
                        setShowMenu(false)
                    }}
                >
                    Link
                </button>

                <button
                    onClick={() => {
                        setBackground(ghibliGif)
                        setShowMenu(false)
                    }}
                >
                    Ghibli Gif
                </button>

                <button
                    onClick={() => {
                        setBackground(sunset)
                        setShowMenu(false)
                    }}
                >
                    Sunset
                </button>

                <button
                    onClick={() => {
                        setBackground(totoro)
                        setShowMenu(false)
                    }}
                >
                    Totoro
                </button>

                <button
                    onClick={() => {
                        setBackground(berserkGif)
                        setShowMenu(false)
                    }}
                >
                    Berserk
                </button>

            </div>
        </div>
    );
};
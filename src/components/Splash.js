import { useState, useEffect } from 'react';
import { usePage } from '../context/PageContext';
import DropDownMenu from './DropDownMenu/DropDown';
import NameImg from '../images/name.png';

import name1 from '../images/nameLoop/nameLoop1.png';
import name2 from '../images/nameLoop/nameLoop2.png';
import name3 from '../images/nameLoop/nameLoop3.png';
import name4 from '../images/nameLoop/nameLoop4.png';
import name5 from '../images/nameLoop/nameLoop5.png';
import name6 from '../images/nameLoop/nameLoop6.png';
import name7 from '../images/nameLoop/nameLoop7.png';
import name8 from '../images/nameLoop/nameLoop8.png';
import name9 from '../images/nameLoop/nameLoop9.png';

import './SplashStyle.scss';
// import Slider from './Slider/Slider';
import Clock from './ClockDropDown/Clock';

export default function MainPage() {

    const { background } = usePage()

    const [name, setName] = useState(NameImg)

    const nameArr = [name1, name2, name3, name4, name5, name6, name7, name8, name9, NameImg];

    const clickHandler = () => {
        for (let i = 0; i <= nameArr.length; i++) {
            setTimeout(() => {
                if (i === nameArr.length) setName(nameArr[Math.floor(Math.random() * 10)])
                else setName(nameArr[i])
            }, 120 * i);
        }
    }


    useEffect(() => {
        const handleContextMenu = (event) => {
            if (event.target.classList.contains('name-img')) {
                event.preventDefault();
            }
        };

        document.addEventListener('contextmenu', handleContextMenu);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);


    return (
        <>
            <div className='topBar'>
                <div
                    style={{
                        display: 'flex'
                    }}
                >

                    <button
                        className='cycle-btn'
                        onClick={clickHandler}
                    >
                        Ardian Kovanxhi
                    </button>

                    <DropDownMenu />

                </div>

                {/* <pre style={{ margin: 0 }}>Welcome to my retro site :]</pre> */}
                {/* <Slider /> */}
                <Clock />
            </div>
            <div
                className='splash-div'
                style={{
                    backgroundImage: `url(${background})`
                }}
            >
                <img
                    className='name-img'
                    src={name}
                    alt=''
                />
                <div className='disclaimer'>
                    {'This site is heavily inspired by '}

                    <a
                        style={{
                            color: 'white',
                            textDecoration: 'underline'
                        }}
                        href='https://www.thestrokes.com/#'
                        target='_blank'
                        rel='noreferrer'
                    >
                        TheStrokes.com
                    </a>
                </div>
            </div >
        </>
    )
}
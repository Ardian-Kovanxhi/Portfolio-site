import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import closeBtn from '../../images/modals/icons/defaultClose.png'
import closeBtnHover from '../../images/modals/icons/hoverClose.png'
import { useModal } from '../../context/ModalContext';
import './LogApp.scss';

export default function MoveableApp({ header, onClose, children, position, focus }) {

    const [hovered, setHovered] = useState(false)

    const { openModal, closeModal, setFocus } = useModal()


    // const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 430);

    // useEffect(() => {
    //     const handleResize = () => {
    //         setIsSmallScreen(window.innerWidth <= 430);
    //     };

    //     window.addEventListener('resize', handleResize);

    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);

    const testObj = {
        "work":
            <>
                It worked
            </>,
        "widthBtn":
            <>
                Content
                <button
                    onClick={() => setW(w ? false : true)}
                // style={{ height: "30px" }}
                >
                    width-diff
                </button>
            </>
    }

    const [w, setW] = useState(false);

    const [d, setD] = useState("widthBtn");

    return (
        <>
            <Draggable handle=".app-header" >
                <div
                    className="moveable-app"
                    style={focus ? { ...position, zIndex: 1001 } : { ...position, zIndex: 1000 }}
                >
                    <div className="app-header">
                        <div className='title-x-div-test'>
                            <div className='title-bar-test' >
                                Dev Journey
                            </div>
                            <span
                                className="close"
                                onClick={onClose}
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                            >
                                <img
                                    className='close-btn-hover'
                                    src={closeBtnHover}
                                    alt=''
                                />
                                <img
                                    className={`close-btn ${hovered ? 'invisible' : ''}`}
                                    src={closeBtn}
                                    alt=''
                                />
                            </span>
                        </div>
                    </div>
                    <div className="app-content">
                        <div className="left-bar" style={{ width: `${w ? "0%" : "25%"}` }}>
                            <div onClick={() => setD("widthBtn")}>
                                Btn
                            </div>
                            <div onClick={() => setD("work")}>
                                Text
                            </div>
                        </div>
                        <div className="mystical-line"></div>
                        <div className="content-box" style={{ width: `${w ? "100%" : "75%"}` }}>
                            <>
                                {testObj[d]}
                            </>
                            {/* {d ?
                                <>
                                    Content
                                    <button
                                        onClick={() => setW(w ? false : true)}
                                    // style={{ height: "30px" }}
                                    >
                                        width-diff
                                    </button>
                                </>
                                :
                                <>
                                    {testObj.work}
                                </>

                            } */}
                        </div>
                    </div>
                </div>
            </Draggable>
        </>
    );
};
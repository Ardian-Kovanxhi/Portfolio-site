import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import closeBtn from '../../images/modals/icons/defaultClose.png'
import closeBtnHover from '../../images/modals/icons/hoverClose.png'
import { useModal } from '../../context/ModalContext';
import useScreenSize from '../../context/ScreenSize';
import './MoveableModal.scss';

export default function MoveableModal({ header, onClose, children, position, focus }) {

    const [hovered, setHovered] = useState(false)

    const screenSize = useScreenSize();
    const { openModal, closeModal, setFocus } = useModal()

    useEffect(() => {
        if (screenSize.width < 430) {
            position = {}
        }
    })

    const handleClick = async (name) => {
        if (name === header) return;
        await Object.keys(nameObj).forEach(el => closeModal(nameObj[el]))
        openModal(nameObj[name])
    }

    const nameObj = {
        'Resume.txt': 'resumeId',
        'About me.txt': 'aboutMeId',
        'Soundlog': 'soundlogId',
        'AI Chatbot': 'aiId',
        'Discordance': 'discordId',
        'ArdianBnB': 'ardianBnBId'
    };

    // const nameObj = {
    //     'Resume.txt': 'resumeId',
    //     'Soundlog': 'soundlogId',
    //     'AI Chatbot': 'aiId',
    //     'Discordance': 'discordId',
    //     'ArdianBnB': 'ardianBnBId'
    // };

    return (
        <>
            {
                screenSize.width <= 430 ?
                    <div className="moveable-modal">
                        <div className="modal-header">
                            <div className='title-x-div'>
                                <div className='title-bar' >
                                    {header}
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

                            <div className='name-tab-div'>
                                {

                                    Object.keys(nameObj).map((name, index) => {
                                        return (
                                            <div
                                                className={`name-tab${name === header ? ' match' : ''}`}
                                                onClick={() => handleClick(name)}
                                                key={`tab${index}`}
                                            >
                                                {name}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div >
                        <div className="modal-content">{children}</div>
                    </div >
                    :
                    <Draggable handle=".modal-header">
                        <div
                            className="moveable-modal"
                            style={focus ? { ...position, zIndex: 1001 } : { ...position, zIndex: 1000 }}
                        // style={focus ? { zIndex: 1001 } : { zIndex: 1000 }}
                        // style={position}
                        >
                            <div className="modal-header">
                                <div className='title-x-div'>
                                    <div className='title-bar' >
                                        {header}
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
                                <div className='name-tab-div'>
                                    {

                                        Object.keys(nameObj).map((name, index) => {
                                            return (
                                                <div
                                                    className={`name-tab${name === header ? ' match' : ''}`}
                                                    onClick={() => {
                                                        if (name === header) return;
                                                        openModal(nameObj[name])
                                                        setFocus(nameObj[name])
                                                    }}
                                                    key={`tab${index}`}
                                                >
                                                    {name}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="modal-content">{children}</div>
                        </div>
                    </Draggable>
            }
        </>
    );
};
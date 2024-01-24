import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import closeBtn from '../../images/defaultClose.png'
import closeBtnHover from '../../images/hoverClose.png'
import { useModal } from '../../context/ModalContext';
import './MovableModal.scss';

export default function MovableModal({ header, onClose, children, position }) {

    const [hovered, setHovered] = useState(false)

    const { openModal, closeModal } = useModal()


    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 430);

    const handleClick = async (name) => {
        if (name === header) return;
        await Object.keys(nameObj).forEach(el => closeModal(nameObj[el]))
        openModal(nameObj[name])
    }

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 430);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const nameObj = {
        'Resume.txt': 'resumeId',
        'About me.txt': 'aboutMeId',
        'Soundlog': 'soundlogId',
        'AI Chatbot': 'aiId',
        'Discordance': 'discordId',
        'ArdianBnB': 'ardianBnBId'
    };

    return (
        <>
            {
                isSmallScreen ?
                    <div className="movable-modal" >
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
                                    />
                                    <img
                                        className={`close-btn ${hovered ? 'invisible' : ''}`}
                                        src={closeBtn}
                                    />
                                </span>
                            </div>

                            <div className='name-tab-div'>
                                {

                                    Object.keys(nameObj).map(name => {
                                        return (
                                            <div
                                                className={`name-tab${name === header ? ' match' : ''}`}
                                                onClick={() => handleClick(name)}
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
                    <Draggable
                        handle=".modal-header"
                        defaultPosition={position}
                    >
                        <div className="movable-modal" >
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
                                        />
                                        <img
                                            className={`close-btn ${hovered ? 'invisible' : ''}`}
                                            src={closeBtn}
                                        />
                                    </span>
                                </div>
                                <div className='name-tab-div'>
                                    {

                                        Object.keys(nameObj).map(name => {
                                            return (
                                                <div
                                                    className={`name-tab${name === header ? ' match' : ''}`}
                                                    onClick={() => {
                                                        if (name === header) return;
                                                        openModal(nameObj[name])
                                                    }}
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

// import React, { useEffect, useState } from 'react';
// import Draggable from 'react-draggable';
// import closeBtn from '../../images/defaultClose.png';
// import closeBtnHover from '../../images/hoverClose.png';
// import './MovableModal.scss';
// import { useModal } from '../../context/ModalContext';

// export default function MovableModal({ header, onClose, children, position }) {
//     const [hovered, setHovered] = useState(false);
//     const { openModal } = useModal();
//     const [isDraggable, setIsDraggable] = useState(true);

//     useEffect(() => {
//         const handleResize = () => {
//             setIsDraggable(window.innerWidth > 430);
//         };

//         // Attach the event listener for window resize
//         window.addEventListener('resize', handleResize);

//         // Initial check on mount
//         handleResize();

//         // Cleanup the event listener on component unmount
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     const nameArr = {
//         'Resume.txt': 'resumeId',
//         'About me.txt': 'aboutMeId',
//         'Soundlog': 'soundlogId',
//         'AI Chatbot': 'aiId',
//         'Discordance': 'discordId',
//         'ArdianBnB': 'ardianBnBId'
//     };

//     const centerPosition = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

//     return (
//         <>
//             {isDraggable ? (
//                 <Draggable
//                     handle=".modal-header"
//                     defaultPosition={position || centerPosition}
//                 >
//                     <div className="movable-modal">
//                         <div className="modal-header">
//                             <div className='title-x-div'>
//                                 <div className='title-bar'>{header}</div>
//                                 <span
//                                     className="close"
//                                     onClick={onClose}
//                                     onMouseEnter={() => setHovered(true)}
//                                     onMouseLeave={() => setHovered(false)}
//                                 >
//                                     <img className='close-btn-hover' src={closeBtnHover} alt="Close Hover" />
//                                     <img className={`close-btn ${hovered ? 'invisible' : ''}`} src={closeBtn} alt="Close" />
//                                 </span>
//                             </div>
//                             <div className='name-tab-div'>
//                                 {Object.keys(nameArr).map(name => (
//                                     <div
//                                         key={name}
//                                         className={`name-tab${name === header ? ' match' : ''}`}
//                                         onClick={() => {
//                                             if (name === header) return;
//                                             openModal(nameArr[name]);
//                                         }}
//                                     >
//                                         {name}
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="modal-content">{children}</div>
//                     </div>
//                 </Draggable>
//             ) : (
//                 <div className="movable-modal">
//                     <div className="modal-header">
//                         <div>{header}</div>
//                         <span className="close" onClick={onClose}>
//                             &times;
//                         </span>
//                     </div>
//                     <div className="modal-content">{children}</div>
//                 </div>
//             )}
//         </>
//     );
// }

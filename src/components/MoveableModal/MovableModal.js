import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import './MovableModal.scss';

const MovableModal = ({ header, onClose, children, position }) => {
    return (
        <>
            {
                window.innerWidth <= 430 ?
                    <div className="movable-modal" >
                        <div className="modal-header">
                            {header}
                            <span className="close" onClick={onClose}>
                                &times;
                            </span>
                        </div>
                        <div className="modal-content">{children}</div>
                    </div>
                    :
                    <Draggable
                        handle=".modal-header"
                        defaultPosition={position}
                    >
                        <div className="movable-modal" >
                            <div className="modal-header">
                                {header}
                                <span className="close" onClick={onClose}>
                                    &times;
                                </span>
                            </div>
                            <div className="modal-content">{children}</div>
                        </div>
                    </Draggable>
            }
        </>
    );
};

export default MovableModal;
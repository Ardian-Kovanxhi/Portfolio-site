import React from 'react';
import Draggable from 'react-draggable';
import './MovableModal.scss';

const MovableModal = ({ header, onClose, children }) => {

    const defaultPosition = { x: 100, y: 100 };

    return (
        <Draggable handle=".modal-header" defaultPosition={defaultPosition}>
            <div className="movable-modal">
                <div className="modal-header">
                    {header}
                    <span className="close" onClick={onClose}>
                        &times;
                    </span>
                </div>
                <div className="modal-content">{children}</div>
            </div>
        </Draggable>
    );
};

export default MovableModal;
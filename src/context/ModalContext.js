import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modals, setModals] = useState([]);

    const openModal = (modalId) => {
        setModals((prevModals) => [...prevModals, modalId]);
    };

    const closeModal = (modalId) => {
        setModals((prevModals) => prevModals.filter((id) => id !== modalId));
    };

    return (
        <ModalContext.Provider value={{ modals, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    return useContext(ModalContext);
};
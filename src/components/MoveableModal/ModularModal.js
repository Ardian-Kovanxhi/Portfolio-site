import { useEffect, useState } from "react"
import { useModal } from "../../context/ModalContext"
import MovableModal from "./MovableModal"
import Resume from "../ModalComponents/Resume"
import './MovableModal.scss'

export default function ModularModal({ modalComponent, modalHeader, modalId }) {

    const { modals, openModal, closeModal } = useModal();
    const modalOpen = modals.includes(modalId);

    const handleCloseModal = () => {
        closeModal(modalId);
    };

    return (
        <div className={`displayTest${modalOpen ? '' : ' invisible'}`}>
            <MovableModal header={modalHeader} onClose={handleCloseModal}>
                {modalComponent}
            </MovableModal>
        </div>
    )
}
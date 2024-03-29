import { useModal } from "../../context/ModalContext"
import MovableModal from "./MovableModal"
import './MovableModal.scss'

export default function ModularModal({ modalComponent, modalHeader, modalId, position, focus }) {

    const { modals, closeModal } = useModal();
    const modalOpen = modals.includes(modalId);

    const handleCloseModal = () => {
        closeModal(modalId);
    };


    return (
        <div className={`${modalOpen ? '' : 'invisible'}`}>
            <MovableModal
                header={modalHeader}
                onClose={handleCloseModal}
                position={position}
                focus={focus === modalId}
            >
                {modalComponent}
            </MovableModal>
        </div>
    )
}
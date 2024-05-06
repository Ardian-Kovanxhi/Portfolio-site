import { useModal } from "../../context/ModalContext"
import MoveableApp from "./MoveableApp";
import MoveableModal from "./MoveableModal"
import './MoveableModal.scss'

export default function ModularModal({ modalComponent, modalHeader, modalId, position, focus }) {

    const { modals, closeModal } = useModal();
    const modalOpen = modals.includes(modalId);

    const handleCloseModal = () => {
        closeModal(modalId);
    };


    return (
        <div className={`${modalOpen ? '' : 'invisible'}`}>
            {
                modalId === "testId" ?
                    <MoveableApp
                        header={modalHeader}
                        onClose={handleCloseModal}
                        position={position}
                        focus={focus === modalId}
                    />
                    :
                    <MoveableModal
                        header={modalHeader}
                        onClose={handleCloseModal}
                        position={position}
                        focus={focus === modalId}
                    >
                        {modalComponent}
                    </MoveableModal>
            }
        </div>
    )
}
import {Image, Modal} from "react-bootstrap";

export interface ModalStateInterface {
    title: string;
    url: string;
    photoTitle: string;
}
interface ModalPhotoInterface {
    show: boolean;
    state: ModalStateInterface;
    onClose: () => void;
}
export const ModalPhoto = ({show, state, onClose}: ModalPhotoInterface) => {
    return show ? (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>{state.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body><Image fluid src={state.url} /></Modal.Body>
            <Modal.Footer>
                <p>{state.photoTitle}</p>
            </Modal.Footer>
        </Modal>
    ) : null
}
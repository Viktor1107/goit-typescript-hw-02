import Modal from "react-modal";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ image, onClose }) {
  return (
    <Modal
      className={s.modal}
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
    >
      <div className="modal-content">
        <img
          className={s.img}
          src={image.urls.regular}
          alt={image.alt_description}
        />

        {/* <button className={s.btn} onClick={onClose}>
          Close
        </button> */}
      </div>
    </Modal>
  );
}

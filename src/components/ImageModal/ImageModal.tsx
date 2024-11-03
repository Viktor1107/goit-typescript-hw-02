import Modal from "react-modal";
import s from "./ImageModal.module.css";
import { Image } from "../../types/types";

Modal.setAppElement("#root");

interface ImageModalProps {
  image: Image | null;
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  return (
    <Modal
      className={s.modal}
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
    >
      <div className="modal-content">
        {image && (
          <img
            className={s.img}
            src={image.urls.regular}
            alt={image.alt_description || "Image"}
          />
        )}
        {/* <button className={s.btn} onClick={onClose}>
          Close
        </button> */}
      </div>
    </Modal>
  );
}

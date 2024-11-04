import Modal from "react-modal";
import s from "./ImageModal.module.css";
import { GalleryImage } from "../../types/types";

Modal.setAppElement("#root");

interface ImageModalProps {
  image: GalleryImage | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
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
};

export default ImageModal;

import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { Image } from "../../types/types";

interface ImageGalleryProps {
  images: Image[];
  onClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onClick }) => {
  return (
    <div className={s.galleryWrap}>
      <ul className={s.gallery}>
        {images.map((image) => (
          <li className={s.galleryList} key={image.id}>
            <ImageCard image={image} onClick={() => onClick(image)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;

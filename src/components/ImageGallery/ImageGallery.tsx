import { Image } from "../../types/types";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: Image[];
  onClick: (image: Image) => void;
}

export default function ImageGallery({ images, onClick }: ImageGalleryProps) {
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
}

import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

export default function ImageGallery({ images, onClick }) {
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

import s from "./ImageCard.module.css";
import { GalleryImage } from "../../types/types";

interface ImageCardProps {
  image: GalleryImage;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={s.gallery}>
      <li className={s.imgWrap} onClick={onClick}>
        <img
          className={s.img}
          src={image.urls.small}
          alt={image.alt_description || "Image"}
        />
      </li>
    </div>
  );
};

export default ImageCard;

import s from "./ImageCard.module.css";
import { Image } from "../../types/types";

interface ImageCardProps {
  image: Image;
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

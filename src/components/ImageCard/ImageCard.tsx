import { Image } from "../../types/types";
import s from "./ImageCard.module.css";

interface ImageCardProps {
  image: Image;
  onClick: () => void;
}

export default function ImageCard({ image, onClick }: ImageCardProps) {
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
}

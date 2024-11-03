import s from "./ImageCard.module.css";

export default function ImageCard({ image, onClick }) {
  return (
    <div className={s.gallery}>
      <li className={s.imgWrap} onClick={onClick}>
        <img className={s.img} src={image.urls.small} alt={image.alt_description} />
      </li>
    </div>
  );
}

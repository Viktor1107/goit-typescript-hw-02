import s from "./LoadMoreBtn.module.css"

export default function LoadMoreBtn({ onClick }) {
  return <button className={s.btn} onClick={onClick}>Load More</button>;
}

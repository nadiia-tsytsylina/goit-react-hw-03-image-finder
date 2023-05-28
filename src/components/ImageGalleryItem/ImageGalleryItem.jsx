import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ smallUrl, description }) {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        src={smallUrl}
        alt={description}
      />
    </li>
  );
}

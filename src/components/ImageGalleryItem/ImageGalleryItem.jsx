import css from './ImageGalleryItem.module.css';

export default function ImageGallery({ item }) {
  return (
    <li className={css.ImageGalleryItem}>
      <img className={css.ImageGalleryItemImage} src="" alt="" />
    </li>
  );
}

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export default function ImageGallery({ images }) {
  return (
    <ul className={css.ImageGallery}>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            smallUrl={image.webformatURL}
            description={image.tags}
            bigUrl={image.largeImageURL}
          />
        );
      })}
    </ul>
  );
}

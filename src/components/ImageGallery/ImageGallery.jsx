import React, { Component } from 'react';
import Loader from 'components/Loader/Loader';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    loading: false,
    images: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    if (prevName !== nextName) {
      console.log('name changed');
      this.setState({ loading: true, images: null });
      const key = '35495478-0f618b27834e323a3a3099cd4';
      fetch(
        `https://pixabay.com/api/?q=${nextName}&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(images => this.setState({ images }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { loading, images } = this.state;
    return (
      <>
        {loading && <Loader />}
        {images && (
          <ul className={css.ImageGallery}>
            {images.hits.map(image => {
              return (
                <ImageGalleryItem
                  key={image.id}
                  smallUrl={image.webformatURL}
                  description={image.tags}
                />
              );
            })}
          </ul>
        )}
      </>
    );
  }
}
export default ImageGallery;

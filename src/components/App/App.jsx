import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Searchbar from 'components/Searchbar/Searchbar';
import Loader from 'components/Loader/Loader';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import { fetchImages } from 'services/fetchAPI';

import css from './App.module.css';

class App extends Component {
  state = {
    imageName: '',
    loading: false,
    images: null,
    page: 1,
    loadMore: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { imageName, page } = this.state;
    const prevPage = prevState.page;
    const prevImageName = prevState.imageName;
    const prevImages = prevState.images;

    if (prevImageName !== imageName || prevPage !== page) {
      try {
        this.setState({ loading: true });

        const { totalHits, hits } = await fetchImages(imageName, page);

        if (totalHits === 0) {
          toast.error(`There are no images with tag ${imageName}`);
          this.setState({ loading: false, loadMore: false });
          return;
        } else {
          this.setState(prevState => ({
            images: page === 1 ? hits : [...prevImages, ...hits],
            loadMore: page < Math.ceil(totalHits / 12),
          }));

          this.setState({ loading: false });
        }
      } catch (error) {
        toast.error(`${error}`);
      }
    }
  }

  handleFormSubmit = imageName => {
    this.setState({ imageName, page: 1, images: null });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { loading, images, loadMore } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {images && <ImageGallery images={images} />}
        {loadMore && <Button onCLick={this.handleLoadMore} />}
        {loading && <Loader />}
        <ToastContainer
          autoClose={2000}
          position="bottom-right"
          theme="colored"
        />
      </div>
    );
  }
}
export default App;

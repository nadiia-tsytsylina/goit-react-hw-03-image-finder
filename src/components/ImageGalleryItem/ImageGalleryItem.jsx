import Modal from 'components/Modal/Modal';
import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { smallUrl, description, bigUrl } = this.props;
    return (
      <li className={css.ImageGalleryItem}>
        <img
          className={css.ImageGalleryItemImage}
          src={smallUrl}
          alt={description}
          onClick={this.openModal}
        />
        {this.state.showModal && (
          <Modal onClose={this.closeModal} url={bigUrl} />
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;

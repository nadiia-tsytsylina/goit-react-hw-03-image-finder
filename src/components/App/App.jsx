import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Modal from 'components/Modal/Modal';

import css from './App.module.css';

class App extends Component {
  state = {
    imageName: '',
    showModal: false,
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    const { imageName, showModal } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imageName={imageName} />
        <button type="button" onClick={this.openModal}>
          Open modal
        </button>
        {showModal && <Modal onClose={this.closeModal}></Modal>}
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

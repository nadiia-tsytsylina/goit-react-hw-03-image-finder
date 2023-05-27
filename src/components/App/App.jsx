import React, { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import Modal from 'components/Modal/Modal';
import css from './App.module.css';

class App extends Component {
  state = {
    showModal: false,
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  onSubmit = () => {
    console.log('work');
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onSubmit} />
        <button type="button" onClick={this.openModal}>
          Open modal
        </button>
        {this.state.showModal && <Modal onClose={this.closeModal}></Modal>}
      </div>
    );
  }
}

export default App;

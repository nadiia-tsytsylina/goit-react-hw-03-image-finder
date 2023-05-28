import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { TbPhotoSearch } from 'react-icons/tb';
import css from './Searchbar.module.css';

import 'react-toastify/dist/ReactToastify.css';

class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleChange = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.imageName.trim() === '') {
      toast.error('Please input image name');
      return;
    }
    this.props.onSubmit(this.state.imageName);
    this.reset();
  };

  reset = () => {
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <input
            value={this.state.imageName}
            onChange={this.handleChange}
            className={css.SearchFormInput}
            name="imageName"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />

          <button type="submit" className={css.SearchFormButton}>
            <TbPhotoSearch className={css.Icon}></TbPhotoSearch>
          </button>
        </form>
      </header>
    );
  }
}

export default Searchbar;

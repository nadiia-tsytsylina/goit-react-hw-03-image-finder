import axios from 'axios';

const KEY = '35495478-0f618b27834e323a3a3099cd4';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (name, page) => {
  const response = await axios.get(
    `${BASE_URL}?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  const data = response.data;
  return data;
};

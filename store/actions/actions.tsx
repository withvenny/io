import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const ADD_FAVORITE_ITEM = 'ADD_FAVORITE_ITEM';
export const REMOVE_FAVORITE_ITEM = 'REMOVE_FAVORITE_ITEM';

const API_URL = 'https://api.themoviedb.org/3/movie/popular';
const API_KEY = 'e54461b825707d8c3475dae3ba60a802';
const PARAMS = 'page=1';
const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;

//console.log(BASE_URL);

export const getMovies = () => {
    try {
      return async dispatch => {
        const res = await axios.get(`${BASE_URL}`);
        //console.log(res);
        if (res.data) {
          dispatch({
            type: GET_MOVIES,
            payload: res.data.results,
          });
        } else {
          console.log('Unable to fetch');
        }
      };
    } catch (error) {
      // Add custom logic to handle errors
    }
};
  
export const addFavorite = movie => dispatch => {
    dispatch({
      type: ADD_FAVORITE_ITEM,
      payload: movie,
    });
  };

export const removeFavorite = movie => dispatch => {
    dispatch({
      type: REMOVE_FAVORITE_ITEM,
      payload: movie,
    });
  };
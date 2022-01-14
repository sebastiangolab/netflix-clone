import './banner.styles.css';
import { useState, useEffect } from 'react';
import { truncateString } from 'helpers/truncateString';
import PropTypes from 'prop-types';

const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/original';

const Banner = ({ fetchUrl }) => {
   const [movie, setMovie] = useState();

   useEffect(() => {
      async function fetchData() {
         const response = await fetch(fetchUrl);
         const data = await response.json();
         const randomNumber = Math.floor(Math.random() * data.results.length);
         setMovie(data.results[randomNumber]);
      }
      fetchData();
   }, [fetchUrl]);

   return (
      <div
         className="banner"
         style={
            movie && {
               backgroundImage: `url("${IMAGES_BASE_URL}${movie?.backdrop_path}")`,
            }
         }
      >
         <div className="banner__background"></div>
         <div className="banner__gradient"></div>
         <div className="banner__content">
            <h1 className="banner__title">{movie?.name}</h1>
            <p className="banner__description">
               {movie && truncateString(movie.overview, 200)}
            </p>
         </div>
      </div>
   );
};

Banner.propTypes = {
   fetchUrl: PropTypes.string.isRequired,
};

export default Banner;

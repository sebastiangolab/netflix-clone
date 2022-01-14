import './rowMovies.styles.css';
import { useState, useEffect } from 'react';
import StyledCarousel from 'components/StyledCarousel/StyledCarousel';
import SingleMovie from 'components/SingleMovie/SingleMovie';
import PropTypes from 'prop-types';

const RowMovies = ({ title, fetchUrl, isBigMovie = false }) => {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      async function fetchData() {
         const response = await fetch(fetchUrl);
         const data = await response.json();
         setMovies(data.results);
      }
      fetchData();
   }, [fetchUrl]);

   return (
      <div className="row-movies">
         <h2 className="row-movies__title">{title}</h2>
         {movies.length && (
            <StyledCarousel isBigMovie={isBigMovie}>
               {movies.map((movie) => (
                  <SingleMovie
                     key={movie.id}
                     movie={movie}
                     isBigMovie={isBigMovie}
                  />
               ))}
            </StyledCarousel>
         )}
      </div>
   );
};

RowMovies.propTypes = {
   title: PropTypes.string.isRequired,
   fetchUrl: PropTypes.string.isRequired,
   isBigMovie: PropTypes.bool,
};

export default RowMovies;

import './singleMovie.styles.css';
import movieTrailer from 'movie-trailer';
import { useTrailerModal } from 'hooks/useTrailerModal';
import PropTypes from 'prop-types';

const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const SingleMovie = ({ movie, isBigMovie = false }) => {
   const { modalOpen } = useTrailerModal();

   const handleOnClick = async () => {
      let movieName = movie.title;
      if (movie.name) movieName = movie.name;

      const trailerUrl = await movieTrailer(movieName);
      if (trailerUrl) {
         const url = new URL(trailerUrl);
         const searchParams = new URLSearchParams(url.search);
         modalOpen(searchParams.get('v'));
      } else {
         modalOpen(false);
      }
   };

   return (
      <>
         {movie.backdrop_path && (
            <img
               src={`${IMAGES_BASE_URL}${
                  isBigMovie ? movie.poster_path : movie.backdrop_path
               }`}
               alt={movie.title}
               className="movie"
               onClick={handleOnClick}
            />
         )}
      </>
   );
};

SingleMovie.propTypes = {
   movie: PropTypes.object.isRequired,
   isBigMovie: PropTypes.bool,
};

export default SingleMovie;

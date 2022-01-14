import RowMovies from 'components/RowMovies/RowMovies';
import { requests } from 'requests.js';

const ListMoviesCategory = () => (
   <div className="movies">
      <RowMovies
         title="NETFLIX ORIGINALS"
         fetchUrl={requests.fetchNetflixOriginal}
         isBigMovie
      />
      <RowMovies title="Trening now" fetchUrl={requests.fetchTrending} />
      <RowMovies title="Top rated" fetchUrl={requests.fetchTopRated} />
      <RowMovies title="Action movies" fetchUrl={requests.fetchActionMovies} />
      <RowMovies title="Comeny movies" fetchUrl={requests.fetchComedyMovies} />
      <RowMovies title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
      <RowMovies
         title="Romance movies"
         fetchUrl={requests.fetchRomanceMovies}
      />
      <RowMovies title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
   </div>
);

export default ListMoviesCategory;

import { requests } from 'requests.js';
import Banner from 'components/Banner/Banner';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import TrailerModal from 'components/TrailerModal/TrailerModal';
import { TrailerModalProvider } from 'hooks/useTrailerModal';
import ListMoviesCategory from 'components/ListMoviesCategory/ListMoviesCategory';

const Movies = () => (
   <TrailerModalProvider>
      <Header isLogged={true} />
      <Banner fetchUrl={requests.fetchNetflixOriginal} />
      <ListMoviesCategory />
      <TrailerModal />
      <Footer />
   </TrailerModalProvider>
);

export default Movies;

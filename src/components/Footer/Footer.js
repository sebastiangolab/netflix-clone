import './footer.styles.css';
import TmdbLogo from 'assets/images/movie-api-logo.svg';
import PropTypes from 'prop-types';

const Footer = ({ isUsers = false }) => (
   <footer className={`footer ${isUsers ? 'bottom' : ''}`}>
      <img
         className="footer__img"
         src={TmdbLogo}
         alt="The Movie Database (TMDB)"
      />
   </footer>
);

Footer.propTypes = {
   isUsers: PropTypes.bool,
};

export default Footer;

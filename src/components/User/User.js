import './user.styles.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const User = ({ image, name }) => (
   <Link to="/movies" className="user">
      <img className="user__image" src={image} alt={`user ${name}`} />
      <h2 className="user__name">{name}</h2>
   </Link>
);

User.propTypes = {
   image: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
};

export default User;

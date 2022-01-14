import './header.styles.css';
import logo from 'assets/images/logo.png';
import user from 'assets/images/user-1.jpg';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ isLogged = false }) => {
   const [isStickyHeader, setIsStickyHeader] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 5) {
            setIsStickyHeader(true);
         } else setIsStickyHeader(false);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <header className={`header ${isStickyHeader ? 'sticky' : ''}`}>
         <Link to="/">
            <img className="header__logo" src={logo} alt="netflix clone logo" />
         </Link>
         <Link to="/">
            <img
               className={`header__user ${
                  isLogged ? '' : 'header__user--hide'
               }`}
               src={user}
               alt="user profile"
            />
         </Link>
      </header>
   );
};

Header.propTypes = {
   isLogged: PropTypes.bool,
};

export default Header;

import './styledCarousel.styles.css';
import InfiniteCarousel from 'react-leaf-carousel';
import PropTypes from 'prop-types';

const StyledCarousel = ({ children, isBigMovie = false }) => (
   <InfiniteCarousel
      breakpoints={[
         {
            breakpoint: 1399,
            settings: {
               slidesToScroll: isBigMovie ? 7 : 5,
               slidesToShow: isBigMovie ? 7 : 5,
            },
         },
         {
            breakpoint: 1199,
            settings: {
               slidesToScroll: isBigMovie ? 6 : 4,
               slidesToShow: isBigMovie ? 6 : 4,
            },
         },
         {
            breakpoint: 991,
            settings: {
               slidesToScroll: isBigMovie ? 5 : 4,
               slidesToShow: isBigMovie ? 5 : 4,
            },
         },
         {
            breakpoint: 767,
            settings: {
               slidesToScroll: isBigMovie ? 3 : 2,
               slidesToShow: isBigMovie ? 3 : 2,
            },
         },
      ]}
      dots={false}
      slidesToScroll={isBigMovie ? 8 : 6}
      slidesToShow={isBigMovie ? 8 : 6}
      scrollOnDevice={true}
      incrementalSides={true}
      slidesSpacing={8}
      showSides={false}
      sidesOpacity={0.5}
      sideSize={0.25}
   >
      {children}
   </InfiniteCarousel>
);

StyledCarousel.propTypes = {
   isBigMovie: PropTypes.bool,
};

export default StyledCarousel;

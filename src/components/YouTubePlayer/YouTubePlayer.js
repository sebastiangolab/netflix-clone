import { useEffect, useState } from 'react';
import { getPlayerWidthPrecent } from 'helpers/getPlayerWidthPrecent';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ selectMovieId, isModalOpen }) => {
   const [playerDimensions, setPlayerDimensions] = useState({
      width: '800',
      height: '600',
   });

   useEffect(() => {
      const handleResize = () => {
         const widthPrecent = getPlayerWidthPrecent();
         const windowWidth = window.innerWidth * widthPrecent;
         const windowHeight = (windowWidth / 16) * 9;

         setPlayerDimensions({
            width: windowWidth.toString(),
            height: windowHeight.toString(),
         });
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, [isModalOpen]);

   return (
      <YouTube
         videoId={selectMovieId}
         opts={{
            height: playerDimensions.height,
            width: playerDimensions.width,
            playerVars: {
               autoplay: 1,
            },
         }}
      />
   );
};

export default YouTubePlayer;

import './trailerModal.styles.css';
import { customStyles } from './TrailerModal.styles';
import Modal from 'react-modal';
import { useTrailerModal } from 'hooks/useTrailerModal';
import YouTubePlayer from 'components/YouTubePlayer/YouTubePlayer';

Modal.setAppElement('#root');

const TrailerModal = () => {
   const { isModalOpen, modalClose, selectMovieId } = useTrailerModal();

   return (
      <Modal
         isOpen={isModalOpen}
         onRequestClose={modalClose}
         style={customStyles}
      >
         {isModalOpen && selectMovieId && (
            <YouTubePlayer
               selectMovieId={selectMovieId}
               isModalOpen={isModalOpen}
            />
         )}
         {!selectMovieId && (
            <h2 className="trailerModal__error">
               No trailer found for this title
            </h2>
         )}
         <button className="totalModal__close" onClick={modalClose}>
            Close
         </button>
      </Modal>
   );
};

export default TrailerModal;

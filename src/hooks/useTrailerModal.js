import { useContext, useState } from 'react';
import { createContext } from 'react';

const TrailerModalContext = createContext();

export const TrailerModalProvider = ({ children }) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectMovieId, setSelectMovieId] = useState(null);

   const modalOpen = (selectMovieId) => {
      setIsModalOpen(true);
      setSelectMovieId(selectMovieId);
   };

   const modalClose = () => {
      setIsModalOpen(false);
      setSelectMovieId(null);
   };

   return (
      <TrailerModalContext.Provider
         value={{
            isModalOpen,
            modalOpen,
            modalClose,
            selectMovieId,
         }}
      >
         {children}
      </TrailerModalContext.Provider>
   );
};

export const useTrailerModal = () => {
   const TrailerModalObject = useContext(TrailerModalContext);
   return TrailerModalObject;
};

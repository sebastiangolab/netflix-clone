export const getPlayerWidthPrecent = () => {
   if (window.innerWidth < 768) {
      return 0.99;
   } else if (window.innerWidth < 992) {
      return 0.8;
   } else if (window.innerWidth < 1200) {
      return 0.7;
   } else if (window.innerWidth < 1600) {
      return 0.6;
   } else {
      return 0.5;
   }
};

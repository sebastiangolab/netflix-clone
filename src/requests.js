const fetchBaseUrl = 'https://api.themoviedb.org/3';

export const requests = {
   fetchNetflixOriginal: `${fetchBaseUrl}/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`,
   fetchTrending: `${fetchBaseUrl}/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
   fetchTopRated: `${fetchBaseUrl}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
   fetchActionMovies: `${fetchBaseUrl}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
   fetchComedyMovies: `${fetchBaseUrl}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
   fetchHorrorMovies: `${fetchBaseUrl}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
   fetchRomanceMovies: `${fetchBaseUrl}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
   fetchDocumentaries: `${fetchBaseUrl}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
};

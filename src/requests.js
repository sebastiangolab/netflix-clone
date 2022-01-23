const fetchBaseUrl = 'https://api.themoviedb.org/3';
const API_KEY = 'e43c636bf0a737ec6247399936dc06eb';

export const requests = {
   fetchNetflixOriginal: `${fetchBaseUrl}/discover/tv?api_key=${API_KEY}&with_networks=213`,
   fetchTrending: `${fetchBaseUrl}/trending/movie/week?api_key=${API_KEY}&language=en-US`,
   fetchTopRated: `${fetchBaseUrl}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
   fetchActionMovies: `${fetchBaseUrl}/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchComedyMovies: `${fetchBaseUrl}/discover/movie?api_key=${API_KEY}&with_genres=35`,
   fetchHorrorMovies: `${fetchBaseUrl}/discover/movie?api_key=${API_KEY}&with_genres=27`,
   fetchRomanceMovies: `${fetchBaseUrl}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
   fetchDocumentaries: `${fetchBaseUrl}/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

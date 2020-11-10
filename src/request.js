const API_KEY = "e06e4d3f7a4412fffbe6d322c0ca409e";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_networks=28`,
  fetchComedyMovies: `/search/movie?api_key=${API_KEY}&language=en-US&query=comedy&page=1&include_adult=false`,
  fetchHorrorMovies: `search/movie?api_key=${API_KEY}&language=en-US&query=horror&page=1&include_adult=false`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_networks=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_networks=99`,
};

export default requests;

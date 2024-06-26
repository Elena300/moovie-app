const key = import.meta.env.VITE_TMDB_KEY;
const baseUrl = "https://api.themoviedb.org/3";

const endPoints = {
  popular: `${baseUrl}/movie/popular?api_key=${key}`,
  topRated: `${baseUrl}movie/top_rated?api_key=${key}`,
  upcoming: `${baseUrl}/movie/upcoming?api_key=${key}`,
};

export function createImageUrl(filename, size) {
    return `https://image.tmdb.org/t/p/${size}/${filename} `
}

export default endPoints;
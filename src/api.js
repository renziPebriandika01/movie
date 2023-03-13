import axios from "axios";

const apiKey  =process.env.REACT_APP_APIKEY
const baseUrl =process.env.REACT_APP_BASEURL

// export const getMovieList = async () => {
//     const movie = await axios.get (`https://api.themoviedb.org/3/movie/popular?api_key=cd55c8384de115a4db89ba967dae48ae`)
//     console.log({getMovieList:movie})
// }
export const getMovieList = async () => {
    const movie = await axios.get (`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`)
return movie.data.results

}


export const movieSearch = async (q) => {
    const search = await axios.get(`${baseUrl}/search/movie?&query=${q}&page=1&api_key=${apiKey}`)
    return search.data
}

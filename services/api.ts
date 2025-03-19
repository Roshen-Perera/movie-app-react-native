export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.TMDB_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`
    }
}

export const fetchMovies = async ({ query } : {query: string}) => {
    const endpoint = query
        ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` // encodeURIComponent is used to encode special characters in the query
        : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`; //  default to popular movies

    const response = await fetch( endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers
    })

    if (!response.ok) {
// @ts-ignore
        throw new Error('Failed to fetch movies', response.statusText);
    }
    const data = await response.json();
    return data.results;
}

 

//discovers/movie

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmI2ODg3YjVlOTg3NGY1MTg0ZWQ4NDI2NjYyYmU1MiIsIm5iZiI6MTc0MjMwMzM2Ni44NzEsInN1YiI6IjY3ZDk3MDg2NTYyZTgzMmM5NzM2NjliNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RVQSDYEfiA85SLHhHtcqgQ8fmY7RyfyOhepfi9Cdwfo'
//     }
// };

// fetch(url, options)
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => console.error(err));
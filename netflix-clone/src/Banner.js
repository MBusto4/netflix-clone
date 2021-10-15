
import './Banner.css'
import React, { useState, useEffect } from 'react'
import axios from './axios'
import requests from './requests'


const base_url = 'https://image.tmdb.org/t/p/original/'

function Banner() {

    const [movie, setMovie] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            const allMovies = request.data.results
            const randomMovieNumber = Math.floor(Math.random() * allMovies.length - 1)
            const randomMovie = allMovies[randomMovieNumber]
            // console.log("RANDOM MOVIE---->", randomMovie)
            // console.log("All MOVIES---->", allMovies)
            setMovie(randomMovie)
            return request
        }
        fetchData()

    }, [])
    console.log("RANDOM MOVIE---->", movie)
    console.log("RANDOM MOVIE NAME---->", movie.name)

    //function to stop the movie description from being to big
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str
    }

    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
                backgroundPosition: "center center"
            }}>
            <div className="banner__contents">
                <h1 className='banner__title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className='banner__description'>
                    {truncate(movie?.overview, 200)}
                </h1>
            </div>
            <div className="banner__bottom"></div>
        </header>
    )
}

export default Banner

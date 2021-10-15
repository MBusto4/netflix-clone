
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

    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
                backgroundPosition: "center center"
            }}>
            <div className="banner__contents">
                <h1>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className='banner__description'>
                    {movie?.overview}
                </h1>
            </div>
            {/* Background img */}
            {/* title */}
            {/* div with 2 buttons */}
            {/* desscription */}


        </header>
    )
}

export default Banner

import React, { useState, useEffect } from 'react'
import "./Row.css"
import axios from './axios'
import requests from './requests'
import './Row.css'


const base_url = 'https://image.tmdb.org/t/p/original/'


function Row({ title, fetchUrl, isLargeRow }) {
    //creating state
    const [movies, setMovies] = useState([])

    //need a snippet of code which runs based on specific condition/variable
    //need to run a piece of code when this component loads

    useEffect(() => {
        //if [] means run once when the row loads, and dont run again
        //lets say we pass in [movies] it will run every time movies changes
        //whenever u are using and aysnc function inside a useEffect it has to be dependent on that variable
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            //data will come back as data.results
            const allMovies = request.data.results
            setMovies(allMovies)
            return request
        }
        fetchData()
    }, [fetchUrl])

    // console.log('Request---->', movies)

    return (
        <div className='row'>
            <h1 className='row__title'>{title}</h1>
            {/* Container */}
            <div className="row__posters">
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />

                ))}

            </div>



        </div>
    )
}

export default Row

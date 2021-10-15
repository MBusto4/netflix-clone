import React, { useState, useEffect } from 'react'
import "./Row.css"
import axios from './axios'
import requests from './requests'

function Row({ title, fetchUrl }) {
    //creating state
    const [movies, setMovies] = useState([])

    //need a snippet of code which runs based on specific condition/variable
    //need to run a piece of code when this component loads

    useEffect(() => {
        //if [] means run once when the row loads, and dont run again
        //lets say we pass in [movies] it will run every time movies changes
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            //data will come back as data.results
            console.log('Request---->', request)
            return request

        }
        fetchData()


    }, [])

    return (
        <div className='row'>
            <h1>{title}</h1>
            {/* Container */}
            div.

        </div>
    )
}

export default Row

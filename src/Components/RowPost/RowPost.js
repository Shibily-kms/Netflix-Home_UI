import React, { useEffect, useState } from 'react'
import './RowPost.css'
import { imageUrl, API_KEY } from '../../constants/constants'
import axios from '../../axios'
import YouTube from 'react-youtube'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState('')

    useEffect(() => {
        axios.get(props.url).then((response) => {
            setMovies(response.data.results)
        }).catch((error) => {
            console.log(error);
        })
    })

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleMoviePlay = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log(response);
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0])
            } else {
                setUrlId('')
                alert('Sorry! No Video')
            }
        })
    }



    return (
        <div className='row'>
            <h2 className='semi-header'>{props.title}</h2>
            {urlId ? <YouTube videoId={urlId.key} opts={opts} /> : ''}
            <div className='posters'>
                {movies.map((obj) =>
                  
                        <div className='small-div'>
                            <img onClick={() => handleMoviePlay(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="" />
                            <p className='small-title'>{obj.title || obj.name}</p>
                        </div>
                  

                )}
            </div>
        </div>
    )
}

export default RowPost
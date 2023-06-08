import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../Axios/axios'
import { API_KEY, imageUrl } from '../../constants'
import Youtube from "react-youtube"


function RowPost(props) {
   const [movies,setMovies] = useState([])
   const [movieId,setMovieId] = useState('')
   useEffect(()=>{
        axios.get(props.url).then((response)=>{
            console.log(response);
            setMovies(response.data.results)
        }).catch(err=>{
            // alert('network error')
        })
   },[])

   const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

   const handleMovie=(id)=>{
    console.log("id: ",id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
        if(response.data.results.length !==0){
            setMovieId(response.data.results[0])
        }else{

        console.log("NO trailers available");
        }

    })
   }

   

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj)=>
                    <img onClick={()=>handleMovie(obj.id)}key={obj.id} className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrl + obj.backdrop_path}`} />
                 )}
               
            </div>
            { movieId && <Youtube opts={opts}  videoId={movieId.key} />}
        </div>
    )
}

export default RowPost
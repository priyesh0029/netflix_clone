import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../Axios/axios'
import { imageUrl } from '../../constants'


function RowPost(props) {
   const [movies,setMovies] = useState([])
   useEffect(()=>{
        axios.get(props.url).then((response)=>{
            console.log(response);
            setMovies(response.data.results)
        }).catch(err=>{
            // alert('network error')
        })
   },[])
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj)=>
                    <img className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrl + obj.backdrop_path}`} />
                 )}
               
            </div>
        </div>
    )
}

export default RowPost
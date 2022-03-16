import React, { useEffect, useState } from 'react';
import movieTrailer from 'movie-trailer';
import './banner.css';
import axios from './axios';
import requests from './requests';
import YouTube from 'react-youtube';

const opt= {
  height: "390px",
  width: "900px",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
}

function Banner() {
  const [movie,setMovie]=useState([]);
  useEffect(()=>{
   async function fetchdata(){
       const request=await axios.get(requests.fetchNetflixOriginals);
       
       setMovie(request.data.results
        [Math.floor(Math.random()*request.data.results.length-1)]
        );
       return request;
       
   }fetchdata();
  },[]);

function truncate(str,n)
{
  return str?.length > n ? str.substr(0,n-1)+"..." :str;
}
const [trailer,setTrailer]=useState("");

const  handleClick= (movie)=>{
  console.log(movie.name)
 if ( trailer){
 setTrailer("");}
 else
  { movieTrailer(movie?.name || "" )
  .then((url) => {
   
    console.log(url);
  const urlParams=new URLSearchParams(new URL(url).search);
  setTrailer( urlParams.get("v"));
  })
  .catch((error) => console.log(error));
 }
};
    return (
      
  <header className='banner' 
 style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "center-center",
      }}>
       
      <div className='banner_contents'>
         <h1 className='banner_title'>{ movie.name }</h1> 
      

      <div className='banner_buttons'>
        <button className='banner_button' 
        onClick={()=>{ handleClick(movie)  }}>
         Play
        </button>

        {/* <button className='banner_button'>
        My List
        </button> */}

      </div>
       { trailer && <YouTube videoId={trailer} opts={opt} /> }
      
     <h1 className='banner_description'>{truncate(movie.overview,150)}</h1>
       </div>
       <div className='banner_fade'> </div>
    </header>
    
    
  )
}

export default Banner;
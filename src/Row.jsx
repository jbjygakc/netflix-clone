import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import React,{useState , useEffect} from 'react';
import axios from './axios';
import './Row.css'
// var getYouTubeId =require ("get-youtube-id");


const base_url = "https://image.tmdb.org/t/p/original/";
const opt= {
  height: "390px",
  width: "900px",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
}

function Row(props) {
  const [movies ,setMovies]=useState([]);
  useEffect(()=>{
    async function  fetchdata(){
      const request=await axios.get(props.url);
      
      setMovies(request.data.results);
      return request;
    }fetchdata();
  },[props.url])

  const [trailer,setTrailer]=useState("");

const  handleClick= (movie)=>{
  
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
    <div className="row">
    <h1>{props.title}</h1>
    <div className="row_posters">
    {movies.map(movie=>(
       <img className={`row_poster ${props.isLarge && "row_posterlarge"}`}
       key={movie.id}
       onClick={()=>{ handleClick(movie)  }}
        src={`${base_url}${props.isLarge ? movie.poster_path : movie.backdrop_path}`}
        alt={movie.name}
      /> ))}   
    </div>
    { trailer && <YouTube videoId={trailer} opts={opt} /> }
    </div>
  )
}

export default Row;

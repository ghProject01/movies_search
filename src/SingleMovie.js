import React,{useEffect,useState} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { API_URL } from './context';

function SingleMovie() {
    const {id}=useParams();
    const [isLoading ,setIsLoading]=useState(true)
    const [movie,setMovie]=useState("")

    const getMovies= async (url)=>{
      try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        if(data.Response ==="True"){
          setIsLoading(false);
          setMovie(data);
        }
      }catch (error) {
          console.log(error)
      }
    };
    
  // debouncing is removed by setTimeout to fix more responce load use clearTimeout as a return in use effect 
  useEffect(()=>{
    let timeOut=setTimeout(()=>{getMovies(`${API_URL}&i=${id}`)},900)

    return()=>clearTimeout(timeOut);

  },[id])

  if(isLoading){
    return(
      <div className='movie-section'>
        <div className='loading'>Loading...</div>
      </div>
    )
  }
    

  return (
  
   <section className='movie-section'>
    <div className='movie-card'>
      <figure>
        <img src={movie.Poster} alt=""/>
      </figure>
      <div className='card-container'>
        <p className='title'>{movie.Title}</p>
        <p className='card-text'>{movie.Released}</p>
        <p className='card-text'>{movie.Genre}</p>
        <p className='card-text'>{movie.imdbRating}/10</p>
        <p className='card-text'>{movie.Country}</p>
        <NavLink to="/" className='back-btn'>Back</NavLink> 
      </div>

    </div>
   </section>
 
  )
}

export default SingleMovie
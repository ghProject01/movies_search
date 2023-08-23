import React from 'react'
import { GlobalContext } from './context'
import { NavLink } from 'react-router-dom';

function Movies() {
  const {movie,isLoading}=GlobalContext();

  return (
  
   <section className='movie-page'>
    <div className='container grid grid-4-col'>
        {movie.map((curMovi)=>{
          const {imdbID,Title,Poster}=curMovi;
          const movieName=Title.substring(0,15);
          return(
            <NavLink to={`movie/${imdbID}`} key={imdbID}>
              <div className='card'>
                <div className='card-info'>
                  <h2>{movieName.length >= 15 ? `${movieName}...`:movieName }</h2>
                  <img src={Poster} alt={imdbID}/>
                </div>
              </div>

            </NavLink>
          )

        })}
    </div>

   </section>
 
  
  )
}

export default Movies
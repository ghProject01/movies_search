import React from 'react'
import { GlobalContext } from './context'

function Search() {
   const {query,setQuery,isError}=GlobalContext();

  return (
   <section className='search-section'>
    <h2>search your movie hear</h2>
    <form action='#' onSubmit={(e)=>e.preventDefault()}>
      <div>
       <input type='text' value={query} placeholder='search hear' onChange={(e)=>setQuery(e.target.value)}/>
      </div> 
    </form>
       <div className='card-error'>
          <p>{isError.show && isError.msg}</p>
       </div>

   </section>
  )
}

export default Search
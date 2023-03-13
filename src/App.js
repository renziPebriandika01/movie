
import './App.css';
import { getMovieList,movieSearch }from './api';
import { useEffect, useState } from 'react';

const App =()=> {
  const [popularMovies,setPopularMovies]= useState ([])

  useEffect(()=>{
    getMovieList().then((result)=>{
      setPopularMovies(result)
    })
  },[])


  const search =async (q)=>{
    const query = await movieSearch(q);
    setPopularMovies(query.results)
  }

const PopularMovieList= ()=>{
  return popularMovies.map((movie,i)=>{
    return (
   
      <div className="Movie-wrapper" key= {i} > 
          <div className="Movie-tittle">{movie.title}</div>
          <img className="Movie-image" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}/>
          <div className="Movie-date">{movie.release_date}</div>
          <div className="Movie-rate">{movie.vote_average}</div>
      </div>

    
  
    )
  })
}
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="judul">FILM BIOSKOP</h1>
      <input placeholder='Cari film...' className="Movie-search" 
      onChange={({target})=>search(target.value)}/>

   <div className="Movie-container" >
    <PopularMovieList/>
  </div>
     </header>
    
    </div>
  );
}

export default App;

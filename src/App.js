
import './App.css';
import { getMovieList,movieSearch }from './api';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



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
   
      <div className="card" key= {i} style={{width:"18rem",alignItems:"center"}} > 
       <img className="card-img-top" style={{width:"70%",marginTop:"20px"}}src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}/>
       <div className="card-body">
          <h5 class="text-dark">{movie.title}</h5>
          <p class="text-danger">{movie.release_date}</p>
      </div>
      </div>
        
    
  
    )
  })
}
  return (
    <div className="App bg-dark">
      <header className="App-header">
      <h1 className="h1 mt-4">FILM BIOSKOP</h1>
      <input placeholder='Cari Film...' className="justify-content-cente mt-5 mb-5 input-group-sm " ariaLabel="Username" ariaDescribedby="basic-addon1"
      onChange={({target})=>search(target.value)}/>

   <div className="row ms-5 gap-3" >
    <PopularMovieList/>
  </div>
     </header>
    
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import Add from './Components/Add';
import MoviesList from './Components/MovieList';
import {movies} from './Components/movies'
import {useState} from 'react'
function App() {

const [movieList,setmovieList]=useState(movies)
    ///
    const addHandler= (newMovie)=> {
      setmovieList([...movieList,newMovie])
    }
      ////get the data

  const [search,setsearch] = useState("")

    ////get the data

  const [rating,setrating] = useState("5")


  console.log(movieList);
  return (
    <div className="App">
  <Navbar/>
  <Filter setsearch={setsearch}   rating={rating} setrating={setrating} />
  <Add addHandler= {addHandler} />
  <MoviesList movieList= {movieList} search ={search} rating={rating} />
    </div>
  );
}

export default App;

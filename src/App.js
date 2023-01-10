import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import {Routes,Route} from 'react-router-dom'
import {Actors,Movies,MovieInformation,Profile,Navbar} from "./components"
import useStyles from "./styles"
function App() {
  const classes=useStyles();
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path= "/movies" element={<Movies/>}/>
      <Route path="/actors/:id" element={<Actors/>}></Route>
      <Route path="/movie/:id" element={<MovieInformation/>}></Route>
      <Route path="/profile/:id" element={<Profile/>}></Route>
    </Routes>
    </div>
  );
}

export default App;

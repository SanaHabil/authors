import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import {useState} from 'react'
import AuthorsList from './components/AuthorsList'
import AuthorAdd from './components/AuthorAdd';
import AuthorEdit from './components/AuthorEdit';


function App() {
  const [authors,setAuthors]= useState([])
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element = {<Navigate to="/authors" />} path="/" />
        <Route element={< AuthorsList authors={authors} setAuthors={setAuthors} />} path="/authors" />
        <Route element={< AuthorAdd authors={authors} setAuthors={setAuthors}/>} path="/authors/add"/>
        <Route element={< AuthorEdit authors={authors} setAuthors={setAuthors}/>} path="/authors/edit/:id"/>
        
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

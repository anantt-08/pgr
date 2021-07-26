import React from "react"
import './App.css'
import Nav from './Navbar';

// SSEARCH BAR
import './components/Style/SearchBar.css'
import SearchBar from './components/SearchBar';

const Home = () =>{
  return(
    <>
    <Nav/>
    <h1>This is Home Page</h1>

    {/* search bar implementationk */}
    <div  className="SearchBar">
      <SearchBar/>
    </div>
   
    
    </>
  )
}

export default Home
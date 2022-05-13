import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { BsCloudSun } from "react-icons/bs";
import { GiBelgium } from "react-icons/gi";
import { BiWorld } from "react-icons/bi";
import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineSportsSoccer } from "react-icons/md"
import { GiTrafficLightsReadyToGo } from "react-icons/gi"
import "./style/navbar.css"
import SearchBar from '../SearchBar';
import { useState } from 'react';

import Menu from './Menu'

export default function Navbar({ menuOpen, setMenuOpen }) {
  const [keyword, setKeyword] = useState("")
  const navigate=useNavigate()

  const keywordHandle = (data) => {
    setKeyword(data)
  }

  return (
    <nav className={'navbar ' + (menuOpen && "active")}>
      <Link to="/">
        <img className='navbar_logo' src="./images/logo_newspaper.jpg" alt="" />
      </Link>
      <div className='itemsContainer'>


          <div className='test'>
              <Link className='icon' to="/belgiumnews">
                <span>Belgium News</span>
                <GiBelgium />
              </Link>
          </div>

          <div className='test'>
            <Link className='icon' to="/worldnews">
              <span>World News</span>
              <BiWorld />
            </Link>
          </div>

        <div className='test'>    
          <Link className='icon' to="/weathernews">
          <span>Weather News</span>
          <BsCloudSun />
          </Link>
        </div>

        <div className='test'>    
          <Link className='icon' to="/sportnews">
          <span>Sport News</span>
          <MdOutlineSportsSoccer />
          </Link>
        </div>
        
        <div className='test'>    
          <Link className='icon' to="/trafficnews">
          <span>Traffic News</span>
          <GiTrafficLightsReadyToGo />
          </Link>
        </div>
      </div>  
      <SearchBar keyword={keyword} keywordHandler={keywordHandle}  /> 
      
      {/* <Link className='searchBar' to={`searchpage?q=${keyword}`}>
        <BiSearchAlt className='searchGlass' />
      </Link> */}
      <button  onClick={()=>{
          navigate(`searchpage?q=${keyword}`)
          setKeyword("")
      }} className='searchBar'>
        <BiSearchAlt className='searchGlass' />
      </button>

      <div className="hamburger" onClick={() =>setMenuOpen(!menuOpen)}>
            <span className="lines line1"></span>
            <span className="lines line2"></span>
            <span className="lines line3"></span>
          </div>
    </nav>
  )
}

/*
https://medium.com/@pradityadhitama/simple-search-bar-component-functionality-in-react-6589fda3385d
*/

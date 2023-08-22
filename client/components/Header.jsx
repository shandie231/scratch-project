import React from 'react'
import { useDispatch } from 'react-redux'
// importing displayFavroites action
import { displaysFavorites } from '../slices/showSlice'

// render header 
const Header = () => {
  const dispatch = useDispatch()
  
  const onSubmit = e => {
    e.preventDefault();
    
    // invoking dispatch, passing in addFavorite(), passing in newSubmission(payload)
    // searchTV lives in showSlice.js
    dispatch(displaysFavorites());
  }


  return (
    <div className="title">
      <div><h1>What's Your Favorite Show?</h1></div>
        <div>
        <form onSubmit={onSubmit}>
          <button id="favoritesButton"> Favorites </button>
        </form>
        </div>
    </div>
  )
}

export default Header;
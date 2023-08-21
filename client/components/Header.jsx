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

  const deleteFavorite = () => {
    const favorite = {
      name: show.name,
    }
    dispatch(deleteFavorite(favorite))
  }

  return (
    <div className="title">
      <div><h1>What's Your Favorite Show?</h1></div>
        <div>
        <form onSubmit={onSubmit}>
          <button> Favorites </button>
        </form>
        </div>
      <button onClick={deleteFavorite}>Delete</button>
    </div>
  )
}

export default Header;
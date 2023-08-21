import React from 'react'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../slices/showSlice'
import { deleteFavorite } from '../slices/showSlice'

// child component of TVDisplay
const Recommendation = ({show}) => {
  // takes in the show prop passed down from it's parent
  // returns the id, title, genre, runtime, rating values from the element object
  const baseURL = 'https://image.tmdb.org/t/p/w300'
  const posterpath = show.poster_path
  const completeURL = baseURL + posterpath
  const dispatch = useDispatch()
  const addToFavorite = function () {
    const favorite = {
      name: show.name,
      vote_average: show.vote_average,
      first_air_date: show.first_air_date,
      overview: show.overview,
      poster_path: show.poster_path
    }
    dispatch(addFavorite(favorite))
  }

  const deleteFavorite = () => {
    const favorite = {
      name: show.name,
    }
    dispatch(deleteFavroite(favorite))
  }
  
  return (
    <div id ="list">
    <img id ='poster' src={completeURL}></img>
    <ul>
      <li>{'Show Name: '}{show.name}</li>
      <li>{'Rating: '}{show.vote_average}</li>
      <li>{'Air Date: '}{show.first_air_date}</li>
      <li>{'Summary: '}{show.overview}</li>
    </ul>
    <button onClick={addToFavorite}>Add to Favorites</button>

   
    </div>
  )
}
//export the recommendations object
export default Recommendation;
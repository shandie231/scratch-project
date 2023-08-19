import React from 'react'
// child component of TVDisplay
const Recommendation = ({show}) => {
  // takes in the show prop passed down from it's parent
  // returns the id, title, genre, runtime, rating values from the element object
  return (
    <li className="list">
      {show.id}
      {show.title}
      {show.genre}
      {show.runtime}
      {show.rating}
    </li>
  )
}
//export the recommendations object
export default Recommendation;
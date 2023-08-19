// importing built in createSlice from toolkit
// createSlice will reduce the amount of boilerplate code
// allows us to have action types, action creators, and reducers all in one
// action types will be something the toolkit does under the hood
import { createAsyncThunk, } from '@reduxjs/toolkit'
import { userAPI } from './userApi' //this will change

//export const searchTV = createAsyncThunk('shows/searchTV', async ())



const fetchTvShow = createAsyncThunk(
  'users/fetchByIdStatus', //This will change when we know our routes
  async(movie: movie,  thunkAPI) => {
      const response = await userAPI.fetchByIdStatus(movie)
      return response.data
    }


)

interface UserState {
  entities: []
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
  entities: [],
  loading: 'idle',
} as UserState



const showSlice = createSlice({
  name: 'shows',
  //will be empty - populated for testing purposes
  //initial state on app startup
  initialState: {
    shows: [
      // pass in id, title, genre, runtime, and rating to simulate actual data
      {
        id: 1,
        title: "Breaking Bad",
        genre: "Drama",
        runtime: 5,
        rating: 9.5
      },
      {
        id: 2,
        title: "Game of Thrones",
        genre: "Drama",
        runtime: 8,
        rating: 9.4
      },
      {
        id: 3,
        title: "Friends",
        genre: "Drama",
        runtime: 5,
        rating: 9.5
      },
    ]
  },
  //list of reducers 
  reducers: {
    //searchTV takes in state and action - action.payload is the new submission object
    searchTV: (state, action) => {
      //criteria will be the action payload
      const criteria = action.payload
      //set 
      const allShows = [...state.shows];
      console.log('allShows: ', JSON.parse(JSON.stringify(allShows)));
      // filter the shows by genre, runtime and rating matching the criteria (action.payload) values 
      const matchingShows = allShows.filter(show => {
        return show.genre === criteria.genre &&
               show.runtime === criteria.runtime &&
               show.rating === criteria.rating
      });
      
      console.log('Matching Shows: ', matchingShows)
      // reassigning the shows array in our state to be an updated array with only objects that match the criterias
      state.shows = matchingShows;
    }
  }
})

export const { searchTV } = showSlice.actions
export default showSlice.reducer;
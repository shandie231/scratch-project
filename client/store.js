import { configureStore } from '@reduxjs/toolkit'
import showReducer from './slices/showSlice'

// assign reducers to an object rootReducer
const rootReducer = {
  shows: showReducer
}

// using configureStore in place of createStore
// under the hood, combining our reducer (because of Redux toolkit)
const store = configureStore ({
  reducer: rootReducer
});

export default store;
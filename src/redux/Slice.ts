import {createSlice} from '@reduxjs/toolkit';
import { getMoviesList } from './asyncAction';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    isLogged: 'false',
    userEmail: '',
    movies:[]
  },
  reducers: {
    updateIsLogIn: (state, {payload}) => {    
      state.isLogged = payload;
    },
    logoutUser:(state,{payload})=>{
      state.isLogged = payload;
    }
   },
   extraReducers(builder) {
     builder.addCase(getMoviesList.pending,(state,{payload})=>{
      
     })
     builder.addCase(getMoviesList.fulfilled,(state,{payload})=>{
      state.movies=payload;
     })
     builder.addCase(getMoviesList.rejected,(state,{payload})=>{

     })
   },
});

export const {updateIsLogIn,logoutUser} = todosSlice.actions;
export default todosSlice.reducer;

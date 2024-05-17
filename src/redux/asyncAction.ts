import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Movie } from "./Interface";

export const getMoviesList = createAsyncThunk('todos/getMoviesList',async(args)=>{
    try {
        const response = await axios.get('https://dummyapi.online/api/movies');
        // console.log(response.data);
        if(response.status === 200){
            return response.data as Movie;
        }
        
    } catch (error) {
        
    }
})
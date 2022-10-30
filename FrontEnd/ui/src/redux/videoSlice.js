

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    video:null,
    loading:false,
    error:false
}

export const videoSlice = createSlice({
    name:'video',
    initialState,
    reducers: {
        fetchStart : (state) => {
            state.loading = true
        },
        fetchSuccess : (state,action) => {
            state.loading = false;
            state.video = action.payload;
        },
        fetchFailure : (state) => {
            state.loading = false;
            state.error = true;
        },
        like : (state,action) => {
            if(!state.video.likes.includes(action.payload)){
                state.video.likes.push(action.payload);
            }   state.video.dislikes.splice(
                state.video.dislikes.findIndex((userId) => userId===action.payload),1
            )
        }
 
    },
    dislike: (state, action) => {
        if (!state.currentVideo.dislikes.includes(action.payload)) {
          state.currentVideo.dislikes.push(action.payload);
          state.currentVideo.likes.splice(
            state.currentVideo.likes.findIndex(
              (userId) => userId === action.payload
            ),
            1
          );
        }
      },
    
})

export default videoSlice.reducer;
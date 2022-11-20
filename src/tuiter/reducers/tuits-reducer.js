import { createSlice } from "@reduxjs/toolkit";
import tuits from '../tuits/tuits.json';

const currentUser = {
 "userName": "NASA",
 "handle": "@nasa",
 "image": "nasa.jpg",
};

const templateTuit = {
 ...currentUser,
 "topic": "Space",
 "time": "2h",
 "liked": false,
 "replies": 0,
 "retuits": 0,
 "likes": 0,
};


const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: tuits,
 reducers: {
   deleteTuit(state, action) {
    const index = state
            .findIndex(tuit =>
               tuit._id === action.payload);
         state.splice(index, 1);
   },
   createTuit(state, action) {
     state.unshift({
       ...action.payload,
       ...templateTuit,
       _id: (new Date()).getTime(),
     })
   },
   changeLike(state, action) {
    const tuit = state.findIndex((tuit) => tuit._id === action.payload._id);
    if (state[tuit].liked) {
        state[tuit].liked = false;
        state[tuit].likes -= 1;
    }
    else {
        state[tuit].liked = true;
        state[tuit].likes += 1;
    }
   }
 }
});

export const {createTuit, deleteTuit, changeLike} = tuitsSlice.actions;
export default tuitsSlice.reducer;
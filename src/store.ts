// src/store/store.ts  
import { configureStore } from '@reduxjs/toolkit';  
import yourReducer from './Reducers'; // replace with your actual slice  

const store = configureStore({  
  reducer: {  
    yourFeature: yourReducer, // add your reducers here  
  },  
});  

export default store;  
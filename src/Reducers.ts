// src/store/yourSlice.ts  
import { createSlice } from '@reduxjs/toolkit';  

const yourSlice = createSlice({  
  name: 'yourFeature',  
  initialState: {  
    value: 0,  
  },  
  reducers: {  
    increment: (state) => {  
      state.value += 1;  
    },  
    decrement: (state) => {  
      state.value -= 1;  
    },  
    setValue: (state, action) => {  
      state.value = action.payload;  
    },  
  },  
});  

export const { increment, decrement, setValue } = yourSlice.actions;  
export default yourSlice.reducer;  
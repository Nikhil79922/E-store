/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

export const toggleSlice = createSlice({
    name: 'toggle',
    initialState: false,
    reducers: {
        togglevalue: (state,action)=>{
            return state=true;
        }
    },
  })
  
  // Action creators are generated for each case reducer function
 
  export const { togglevalue } = toggleSlice.actions
  export default toggleSlice.reducer
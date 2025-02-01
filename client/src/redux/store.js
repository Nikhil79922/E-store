import { configureStore } from '@reduxjs/toolkit'
import linkReducers from "./Slice/Link"
import toggleReducers from "./Slice/Toggle"

export const store = configureStore({
  reducer: {
    link: linkReducers,
    toggle: toggleReducers,
  },
})
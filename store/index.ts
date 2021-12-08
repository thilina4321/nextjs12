import counterSlice from "./counter";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;



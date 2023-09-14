import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchMovies = createAsyncThunk(
  "moviesSlice/fetchMovies",
  async () => {
    const res = await fetch("http://localhost:9000/films");
    const data = await res.json();
    return data;
  }
);
const moviesSlice = createSlice({
  initialState: [],
  name: "moviesSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const {} = moviesSlice.actions;
export default moviesSlice.reducer;

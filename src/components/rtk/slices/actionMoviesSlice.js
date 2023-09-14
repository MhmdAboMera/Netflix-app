import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchMoviesAction = createAsyncThunk(
  "actionMovies/fetchMoviesAction",
  async () => {
    const res = await fetch("http://localhost:9000/Action");
    const data = await res.json();
    return data;
  }
);
const actionMovies = createSlice({
  initialState: [],
  name: "actionMovies",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMoviesAction.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const {} = actionMovies.actions;
// export default actionMovies.reducer;
export default actionMovies.reducer;

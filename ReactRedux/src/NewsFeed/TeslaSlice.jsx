import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTeslaData = createAsyncThunk(
  "tesla/fetchTeslaData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=tesla&from=2025-09-28&sortBy=publishedAt&apiKey=59da39ae8c8e415085e08bda8d9d9af1"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch tesla news");
      }
      const data = await response.json();
      return data.articles;
    } catch (error) {
      return rejectWithValue("Error loading tesla news", error);
    }
  }
);

const initialState = {
  articles: [],
  loading: false,
  error: null,
};

const teslaSlice = createSlice({
  name: "tesla",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeslaData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTeslaData.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchTeslaData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "failed to load news data";
      });
  },
});

export default teslaSlice.reducer;

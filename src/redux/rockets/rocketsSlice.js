import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ROCKETS_URL = 'https://api.spacexdata.com/v4/rockets';
const initialState = {
  rockets: [],
  resevedRockets: [],
  status: 'idle',
  error: null,
};
export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await axios.get(`${ROCKETS_URL}`);
  return response.data;
});
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rocketId = action.payload;
      state.rockets = state.rockets.map((rocket) => {
        if (rocket.id === rocketId) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
    },
    cancelRocket: (state, action) => {
      const rocketId = action.payload;
      state.rockets = state.rockets.map((rocket) => {
        if (rocket.id === rocketId) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rockets = action.payload;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const { reserveRocket, cancelRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;

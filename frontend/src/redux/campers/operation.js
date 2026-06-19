import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const instance = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (params = {}, thunkApi) => {
    try {
      if (params?.transmission) params.transmission = "automatic";

      const { data } = await instance.get("/campers", { params });

      if (params?.transmission) params.transmission = "true";

      return data;
    } catch (error) {
      if (params?.transmission) params.transmission = "true";

      return thunkApi.rejectWithValue({
        status: error.response.status,
        message: error.message,
      });
    }
  },
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchCamperById",
  async (id, thunkApi) => {
    try {
      const { data } = await instance.get(`/campers/${id}`);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue({
        status: error.response.status,
        message: error.message,
      });
    }
  },
);

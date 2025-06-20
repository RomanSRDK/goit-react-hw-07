import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://663cc73d17145c4d8c379f8b.mockapi.io/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, ThunkAPI) => {
    try {
      const { data } = await axios.get("contacts");
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (user, ThunkAPI) => {
    try {
      const { data } = await axios.post("contacts", user);
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, ThunkAPI) => {
    try {
      const { data } = await axios.delete(`contacts/${contactId}`);
      return data.id;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

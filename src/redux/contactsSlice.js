import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
        state.loading = false;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      });
  },
});

export default slice.reducer;

const selectAllContacts = (state) => state.contacts.items;
const selectFindContact = (state) => state.filter.name;

export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectFindContact],
  (allContacts, findContact) => {
    return allContacts.filter(({ name }) =>
      name.toLowerCase().startsWith(findContact.toLowerCase())
    );
  }
);

export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

// import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import {
//   createContactsThunk,
//   deleteContactsThunk,
//   getContactsThunk,
// } from 'redux/contacts/contactsThunk';
// import { contactsInitialState } from 'redux/contacts/initialState';

// import { createPhonebookThunk } from './contactFormThunk';

// const handlePending = state => {
//   state.contacts.isLoading = true;
// };
// const handleFulfilledGet = (state, action) => {
//   state.contacts.isLoading = false;
//   state.contacts.items = action.payload;
//   state.contacts.error = null;
// };

// const handleFulfilledCreate = (state, action) => {
//   state.contacts.isLoading = false;
//   state.contacts.items = action.payload;
//   state.contacts.error = null;
// };
// const handleFulfilledDelete = (state, action) => {
//   state.contacts.isLoading = false;
//   state.contacts.items = action.payload;
//   state.contacts.error = null;
// };
// const handleRejected = (state, action) => {
//   state.contacts.isLoading = false;
//   state.contacts.error = action.payload;
// };

// export const contactFormSlice = createSlice({
//   name: 'contactForm',
//   initialState: contactsInitialState,
//   extraReducers: builder => {
//     builder
//       .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
//       .addCase(createContactsThunk.fulfilled, handleFulfilledCreate)
//       .addCase(deleteContactsThunk.fulfilled, handleFulfilledDelete)
//       .addMatcher(
//         isAnyOf(
//           getContactsThunk.pending,
//           deleteContactsThunk.pending,
//           createContactsThunk.pending
//         ),
//         handlePending
//       )
//       .addMatcher(
//         isAnyOf(
//           getContactsThunk.rejected,
//           deleteContactsThunk.rejected,
//           createContactsThunk.rejected
//         ),
//         handleRejected
//       );
//   },
// });

// export const contactFormReducer = contactFormSlice.reducer;
// export const { setName, setNumber } = contactFormSlice.actions;

// import { createSlice } from '@reduxjs/toolkit';
// import { contactFormInitialState } from './contactFormInitialState';

// export const contactFormSlice = createSlice({
//   name: 'contactForm',
//   initialState: contactFormInitialState,
//   reducers: {
//     setName: (state, action) => {
//       state.name = action.payload;
//     },
//     setNumber: (state, action) => {
//       state.number = action.payload;
//     },
//   },
// });

// export const contactFormReducer = contactFormSlice.reducer;
// export const { setName, setNumber } = contactFormSlice.actions;

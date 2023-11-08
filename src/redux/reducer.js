import { combineReducers } from '@reduxjs/toolkit';

import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

// import { combineReducers } from '@reduxjs/toolkit';
// import { contactFormReducer } from './contactForm/contactFormSlice';
// import { phonebookReducer } from './phonebook/phonebookSlice';

// export const reducer = combineReducers({
//   contactForm: contactFormReducer,
//   phonebook: phonebookReducer,
// });

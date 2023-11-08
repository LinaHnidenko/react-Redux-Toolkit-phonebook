import { getContacts } from 'components/api/api';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import css from './ContactList.module.css';

// const getVisibleContacts = (contacts, normalizedFilter) => {
//   if (!contacts) {
//     return [];
//   }

//   return contacts.filter(({ name }) => {
//     if (typeof name === 'string') {
//       return name.toLowerCase().includes(normalizedFilter);
//     }
//     return false;
//   });
// };

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // const normalizedFilter = filter ? filter.toLowerCase() : '';

  const handleFilterContacts = () => {
    // const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const filteredContacts = handleFilterContacts();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      <ul className={css.list}>
        {filteredContacts.map(({ name, number, id }) => {
          return (
            <ContactListItem key={id} id={id} name={name} number={number} />
          );
        })}
      </ul>
    </>
  );
};

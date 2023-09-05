import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import { ContactsList } from './Contacts/Contacts';


export default function AppPhoneBook() {
  const dispatch = useDispatch();

      useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);


  return (
    <div className="container">
      <h1 className="mainTitle">Phonebook</h1>
      <Phonebook />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}

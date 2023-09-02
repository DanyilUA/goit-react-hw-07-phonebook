import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import { ContactsList } from './Contacts/Contacts';


export default function AppPhoneBook() {

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

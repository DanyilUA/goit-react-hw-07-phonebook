import css from './Contact.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Contact } from 'components/ContactItem/ContactItem';
import { getContacts, getFilter } from 'redux/selectors';

export function ContactsList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  
    return (
      <ul className={css.contact__list}>
        {getFilteredContacts().map(contact => (
          <li key={contact.id} className={css.contact}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    );
}


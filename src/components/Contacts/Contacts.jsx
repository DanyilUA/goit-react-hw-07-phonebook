import css from './Contact.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Contact } from 'components/ContactItem/ContactItem';
import { selectContacts, selectFilter } from 'redux/selectors';

export function ContactsList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

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


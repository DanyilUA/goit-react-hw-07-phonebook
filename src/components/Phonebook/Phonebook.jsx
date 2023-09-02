import { nanoid } from 'nanoid';
import css from './Phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacsReducer';
import { getContacts } from 'redux/selectors';

export default function Phonebook() {

  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const nameInputId = nanoid();
  const phoneInputId = nanoid();


  const handleFomSubmit = event => {
    event.preventDefault();
    const form = event.target; 
      const name = form.elements.name.value;
      const number = form.elements.number.value;
    const existingContact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

    if (existingContact) {
      alert('This contact already exists.');
      return;
    }

    dispatch(addContact({
      id: nanoid(),
      name,
      number,
    }));
    
    form.reset();
  };

  return (
    <div className={css.container}>
      <form action="" onSubmit={handleFomSubmit} className={css.form}>
        <label htmlFor={nameInputId} className={css.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={nameInputId}
            className={css.input}
          />
        </label>
        <label htmlFor={phoneInputId} className={css.label}>
          Phone
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone should contain more then 5 numbers (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) ."
            required
            id={phoneInputId}
            className={css.input}
          />
        </label>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </div>
  );
}

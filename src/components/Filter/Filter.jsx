import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { filterContacts } from 'redux/filterSlice';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

   const handleInputChange = event => {
     dispatch(filterContacts(event.currentTarget.value));
   };



  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleInputChange}
        className={css.input}
      />
    </label>
  );
}

export default Filter;

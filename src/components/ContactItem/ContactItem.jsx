import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const Contact = ({contact}) => {
    const dispatch = useDispatch();
     return (
        <div>
            <p>
                {contact.name}: {contact.number}
            </p>
            <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
        </div>
    )
}


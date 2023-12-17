import s from './contacts.module.css';
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';
import { getContacts, getFilter } from 'redux/contacts/selectors';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDelete = id => dispatch(deleteContact(id));

  const normalizedFilter = filter.toLowerCase();
  const filteredList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      {!contacts || contacts.length === 0 ? (
        <p className={s.nocontacts}>No contacts found</p>
      ) : (
        <ul className={s.contactlist}>
          {filteredList.map(({ id, name, number }) => (
            <li key={id} id={id} className={s.contactitem}>
              <p>
                {name}: {number}
              </p>
              <button
                type="button"
                className={s.deletebutton}
                onClick={() => handleDelete(id)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

ContactsList.propTypes = {
  data: PropTypes.array,
  onDelete: PropTypes.func,
};

export default ContactsList;

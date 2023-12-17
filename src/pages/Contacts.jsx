import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { getIsLoading } from 'redux/contacts/selectors';
import ContactsList from 'components/contacts/ContactsList';
import Filter from 'components/Filter/Filter';
import Form from 'components/Form/Form';
const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h2>Your contacts</h2>
      <div>{isLoading && 'Request in progress...'}</div>
      <Filter />
      <ContactsList />
      <Form />
    </>
  );
};
export default Contacts;

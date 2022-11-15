import { Form } from './Form/Form';
import { ContactList } from './Contacts/Contacts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/operations';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div>
      <ToastContainer
      // position="top-right"
      // autoClose={5000}
      // hideProgressBar={false}
      // newestOnTop={false}
      // closeOnClick
      // rtl={false}
      // pauseOnFocusLoss
      // draggable
      // pauseOnHover
      // theme="colored"
      />
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <ContactList />
    </div>
  );
};

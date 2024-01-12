import { FormContact } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './ContactFilter/ContactFilter';

import './App.module.css';
import './redux/store';

export const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <FormContact />
      <h2>Contacts</h2>
      <ContactList />
      <Filter />
    </>
  );
};
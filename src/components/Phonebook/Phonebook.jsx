import ContactForm from '../ContactForm/ContactForm.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import Filter from 'components/Filter/Filter.jsx';

import {
  PhonebookContainer,
  PhonebookWrapper,
  PhonebookHeader,
} from './PhonebookStyles.js';

const Phonebook = () => {
  return (
    <>
      <PhonebookContainer>
        <PhonebookWrapper>
          <PhonebookHeader>Phonebook</PhonebookHeader>
          <ContactForm />

          <PhonebookHeader>Contacts</PhonebookHeader>
          <Filter />
          <ContactList />
        </PhonebookWrapper>
      </PhonebookContainer>
    </>
  );
};

export default Phonebook;

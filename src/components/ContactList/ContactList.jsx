import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from './ContactList.styled';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          {name}: {number}
          <button onClick={() => deleteContact(id)} type="button">
            Delete
          </button>
        </ContactItem>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ContactList;

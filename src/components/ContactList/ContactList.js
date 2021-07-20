import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import ContactListItem from '../ContactListItem';

export default function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          id={id}
          onDeleteContact={deleteContact}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
  deleteContact: PropTypes.func.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

export default function ContactListItem({ name, number, id, onDeleteContact }) {
  return (
    <li className={s.item}>
      <span className={s.marker}></span>
      <p className={s.name}>{`${name}:`}</p>
      <a className={s.tel} href={`tel:${number}`}>
        {number}
      </a>
      <button
        type="button"
        className={s.btn}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

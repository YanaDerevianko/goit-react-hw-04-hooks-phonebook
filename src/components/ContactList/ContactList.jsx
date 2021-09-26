import propTypes from "prop-types";
import React from "react";
import { ContactsList, ListItem, ButtonDelete } from "./ContactList.styled";

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <span>{name}</span>
          <span>{number}</span>
          <ButtonDelete type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </ButtonDelete>
        </ListItem>
      ))}
    </ContactsList>
  );
};
ContactList.propTypes = {
  contacts: propTypes.array.isRequired,
  onDeleteContact: propTypes.func.isRequired,
};

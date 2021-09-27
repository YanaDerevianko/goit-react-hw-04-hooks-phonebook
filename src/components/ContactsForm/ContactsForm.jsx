import { useState } from "react";
import propTypes from "prop-types";
import React from "react";
import shortid from "shortid";
import { AddForm, ContactsInput, ContactsButton } from "./ContactsForm.styled";

export function ContactsForm({onSubmit}) {
  
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        return setName(value);

      case "number":
        return setNumber(value);

      default:
        return;
    }
  };

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({name, number});
    setName(event.target.value='');
    setNumber(event.target.value='');

  };

  return (
    <>
      <h1>Phonebook</h1>
      <AddForm onSubmit={handleSubmit}>
        <label>
          Name:
          <ContactsInput
            id={nameInputId}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          Number:
          <ContactsInput
            id={numberInputId}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <ContactsButton type="submit">Add contact</ContactsButton>
      </AddForm>
    </>
  );
}

ContactsForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

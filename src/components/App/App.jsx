import { useState, useEffect } from "react";
import { ContactsForm } from "../ContactsForm/ContactsForm";
import { ContactList } from "../ContactList/ContactList";
import { Filter } from "../Filter/Filter";
import { Container } from "./App.styled";
import shortid from "shortid";

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts({ contacts: parsedContacts });
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts])

  const onSubmit = ({ name, number }) => {

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
  
    setContacts(prevState => [contact, ...prevState])
    
   
  };

  const deleteContact = (contactId) => {
    setContacts((prevState) => ({
      contacts: prevState.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (contacts.length) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };
  const changeFilter = (e) => {
    const { name, value } = e.target;
    setFilter({
      [name]: value,
    });
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <ContactsForm onSubmit={onSubmit} />
      <h2>Contacts</h2>
      {contacts.length > 1 && <Filter onChange={changeFilter} />}
      {contacts.length ? (
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      ) : (
        <p>There are no contacts here</p>
      )}
    </Container>
  );
}

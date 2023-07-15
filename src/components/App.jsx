import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addNewContact = data => {
    if (this.isDuplicate(data.name))
      return alert(`${data.name} is already in contacts.`);

    const newContact = {
      id: nanoid(),
      ...data,
    };

    this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
    }));
  };

  changeFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  isDuplicate = name =>
    this.state.contacts.find(contact => contact.name === name);

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addNewContact={this.addNewContact} />

        <h2>Contacts</h2>
        <Filter value={filter} changeFilter={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

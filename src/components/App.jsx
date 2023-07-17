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

  onAddNewContact = data => {
    if (this.isDuplicate(data.name))
      return alert(`${data.name} is already in contacts.`);

    if (!Number.isInteger(data.number)) {
      return alert('Enter a number!');
    }
    const newContact = {
      id: nanoid(),
      ...data,
    };

    this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
    }));
  };

  onChangeFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  isDuplicate = name =>
    this.state.contacts.find(contact => contact.name === name);

  onDeleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onAddNewContact={this.onAddNewContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.onChangeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </>
    );
  }
}

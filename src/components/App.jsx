import { Component } from 'react';
import { nanoid } from 'nanoid';
import Contacts from './Contacts/Contacts';
import ContactForm from './ContactForm/ContactForm ';
import Section from './Section/Section';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount = () => {
    const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localStorageContacts) {
      this.setState({ contacts: localStorageContacts });
    }
  };

  componentDidUpdate = () => {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  };

  handleDelete = event => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.name !== event.target.name
      ),
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name: event.target.name.value,
      number: event.target.number.value,
    };

    this.componentDidUpdate(newContact);

    this.state.contacts.find(
      contact => contact.name === event.target.name.value
    )
      ? window.alert(event.target.name.value + 'is already in contacts.')
      : this.setState(({ contacts }) => ({
          contacts: [...contacts, newContact],
        }));
    const form = event.target;
    form.reset();
  };

  handleChangeSerchContacts = evt => {
    this.setState({ filter: evt.target.value.toLowerCase() });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#010101',
        }}
      >
        <Section title="PhoneBook">
          <ContactForm handleSubmit={this.handleSubmit}></ContactForm>
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.handleChangeSerchContacts} />

          <Contacts
            contacts={contacts}
            filter={filter}
            handleDelete={this.handleDelete}
          ></Contacts>
        </Section>
      </div>
    );
  }
}
export default App;

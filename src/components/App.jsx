import { ContactForm } from "./Form/ContactForm";
import React, {Component} from "react";
import { Filter } from "./Filter/Filter";
import Section from "./Section/Section";
import { ContactList } from "./ContactList/ContactList";
import Notiflix from 'notiflix';
export class App extends Component {
  state = {
    contacts: [
     
    ],
    filter:''
    
  }

componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    } else {
      this.setState({
        contacts: [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
          { id: 'id-5', name: 'Sergey Mentor 2', number: '666-66-66' },
        ],
      });
    }
  }


  componentDidUpdate( prevState) {
    const newContact = this.state.contacts;
    const prevContacts = prevState.contacts;
  
    if (newContact !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(newContact));
    }
  }




  formSybmitHundler = data => {
    const findName = data.name.toLowerCase()
    this.setState(prevState => {
     if(this.state.contacts.some(contact => contact.name.toLowerCase() === findName)) {
      Notiflix.Notify.failure(`${data.name} is already in contacts.`)
      return
     }
      
      let test = [ ];
      test.push(data)
      const allContact = [...prevState.contacts, ...test]
      Notiflix.Notify.success(`${data.name} is add in contacts.`)
      return { contacts: allContact};
    });
  }
    
    removeContact = e => {
      this.setState(prevState => {
      return {contacts: prevState.contacts.filter(contact => e.target.id !== contact.id)}
    })
      
    }

    changeFilter = evt => {
      this.setState({
        filter: evt.currentTarget.value
      })
    }
    
    filteredContact = () => {
      const {contacts, filter} = this.state
      const contactFiltered = filter.toLowerCase()
      return contacts.filter(contact => contact.name.toLowerCase().includes(contactFiltered))
    }

  render() {
    const filteredContact = this.filteredContact()
    return (
      <div>
       <Section title="Phonebook">
              <ContactForm onSubmit={this.formSybmitHundler}/>     
       </Section>
       <Section title="Contacts">
              <Filter value={this.state.filter} onChange={this.changeFilter}/>
       </Section>
       <Section>
              <ContactList contacts={filteredContact} removeContact={this.removeContact} />
       </Section>   
      </div>
    );
  }
  
};

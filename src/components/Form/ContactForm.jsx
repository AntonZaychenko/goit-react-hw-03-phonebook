import { Component } from 'react';
import s from '../Form/Phonebook.module.css'

import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  
  

    state = {
        id: '',
        name: '',
        number: ''       
      }


    resetForm = () => {
        this.setState(() => ({
          name: '',
          number: '',
        }));
      }

    handleChange = e => {
        this.setState({
            [e.currentTarget.name] : e.currentTarget.value
        })
     }

     handleSubmit = e => {
        e.preventDefault() 
        this.setState(() => ({
            id: nanoid()
          }));
        this.props.onSubmit( this.state)
        this.resetForm()
     }

    render() {
        return (
            <div>
                <form className={s.form} 
                onSubmit={this.handleSubmit}>
                    <label className={s.label}>
                        Name
                    <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={this.state.name}
                    className={s.input}                    
                    onChange={this.handleChange}
                    />
                    </label>
                    <label className={s.label}>
                    Number
                    <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={this.state.number}
                    onChange={this.handleChange}
                    className={s.input} 
                    />  
                    </label>
                    <button 
                    type='submit'
                    className={s.btn}                    
                    >Add Contact</button>
                </form>
            </div>
        )
    }
}
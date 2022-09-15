import React, { Component } from 'react'
import s from '../ContactList/ContactList.module.css'
export class ContactList extends Component {
   
   
    render() {
        const { contacts, removeContact } = this.props;
        return (
           <div className={s.list}>
             <ul className={s.contactList}>
            {contacts.map(({ id, name, number }) => (
                <li key={id} className={s.item}>
                    <p >
                      {name}: {number}
                    </p>
                    <button 
                    id={id} 
                    onClick={removeContact}
                    className={s.btn}
                    >Delete</button>
                </li>
              ))}
            </ul> 
           </div>
        )
    }
}
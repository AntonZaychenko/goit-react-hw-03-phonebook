import React, {Component} from "react";
import s from '../Filter/Filter.module.css'
export class Filter extends Component {
    state = {
        filter:''
    }

   
    render() {
        const { value, onChange } = this.props;
        return (
        <label className={s.label}>
       Find contacts by name
       <input 
       type="text"
       value={value} 
       onChange={onChange}
       className={s.input}/>
       </label>
        )
    }
}
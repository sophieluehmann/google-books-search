import React from 'react';
import './style.css'

const Form = props => (
    <form onSubmit={props.getBooks}>
        <input type="text" name="bookName"/>
        <button>Search</button>
    </form>
);

export default Form;
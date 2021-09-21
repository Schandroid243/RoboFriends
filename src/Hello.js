import React from 'react';
import './Hello.css';

const Hello = (props) => {
    return(
        <div className='f1 tc'>
            <h1>Hello</h1>
            <h3>This is my first react component !</h3>
            <p>{props.greeting}</p>
        </div>
    );
}

export default Hello;
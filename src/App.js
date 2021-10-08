import React, { useState } from 'react';
import CardList from './CardList';
import { robots } from './robot';
import Searchbox from './Searchbox';

const App = () => {
    const [field, setFields] = useState('');
    const onSearchChange = (event) => {
        setFields(event.target.value);
    }
    const filteredRobots = robots.filter( robot => {
        return robot.name.toLocaleLowerCase().includes(field.toLocaleLowerCase());
    })
    return(
        <div className='tc'>
            <h1>Robot Friends</h1>
            <Searchbox searchfield={field} searchChange={onSearchChange}/>
            <CardList robots={filteredRobots}/>
        </div>
    );
}

export default App;
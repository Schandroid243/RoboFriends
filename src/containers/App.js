import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
// import { robots } from './robot';
import Searchbox from '../components/Searchbox';
import './App.css';
import axios from 'axios';
import Scroll from '../components/Scroll';
import ErrorBoundaries from '../components/ErrorBoundaries';

const App = () => {
    const [robots, setRobots] = useState([]);
    const [field, setFields] = useState('');
    useEffect(()=>{
        loadData();
    }, []);
    const onSearchChange = (event) => {
        setFields(event.target.value);
    }
    const loadData = async () => {
        await axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
            setRobots(response.data);
            console.log('Response: ', robots);
        })
    }
    
    const filteredRobots = robots.filter( robot => {
        return robot.name.toLocaleLowerCase().includes(field.toLocaleLowerCase());
    });

    return !robots.length ?
        <h1 className='tc'>Loading...</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>Robot Friends</h1>
                <Searchbox searchfield={field} searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundaries>
                         <CardList robots={filteredRobots}/>
                    </ErrorBoundaries>
                </Scroll>
            </div>
        );
}

export default App;
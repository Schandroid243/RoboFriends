import React from 'react';


const Searchbox = ({ searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type="search" 
                placeholder="search a robots"
                onChange= {searchChange}
                value={searchfield || ''}
            />
        </div>
    );
}

export default Searchbox;
import React from 'react';
import useData from '../../Hooks/useData';
import Tool from './Tool';

const Tools = () => {
    const [items] = useData();
    return (
        <div className='p-16'>
            <h2>OUR TOOLS</h2>
            <div className='grid grid-cols-3'>
                {
                    items.map(item => <Tool
                        key={item._id}
                        item={item}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;
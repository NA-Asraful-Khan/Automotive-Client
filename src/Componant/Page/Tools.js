import React, { useEffect, useState } from 'react';
import useData from '../../Hooks/useData';
import Tool from './Tool';

const Tools = () => {
    const [items, setItems] = useData();
    return (
        <div className='p-16'>
            <h2>OUR TOOLS</h2>
            <div className='flex justify-center'>
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
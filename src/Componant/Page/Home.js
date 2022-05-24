import React from 'react';
import { Link } from 'react-router-dom';
import useData from '../../Hooks/useData';
import FAQ from './FAQ';
import About from './Home/About';
import Banner from './Home/Banner';
import Summary from './Home/Summary';
import Reviews from './Reviews';
import Tool from './Tool';

const Home = () => {
    const [items, setItems] = useData();
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Summary></Summary>
            <div className='p-8'>
                <h1>Tools</h1>
                <div className='flex justify-center m-4'>
                    {
                        items.slice(0, 3).reverse().map(item => <Tool
                            key={item._id}
                            item={item}
                        ></Tool>)
                    }
                </div>
                <Link to='/Tools' className='btn btn-dark inline p-3'>Show All Tools</Link>
            </div>
            <Reviews></Reviews>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;
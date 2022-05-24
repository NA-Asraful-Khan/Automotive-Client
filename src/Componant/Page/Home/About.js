import React from 'react';
import about from '../../../Images/about.jpg'

const About = () => {
    return (
        <div className='p-12'>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row">
                    <img className='max-w-sm rounded-lg shadow-2xl' src={about} alt="" />
                    <div>
                        <h1 class="text-5xl font-bold">About Us</h1>
                        <p class="p-8 text-lg">Back in 1968 Automative Parts Manufacturing. was just a small hardware store on Market Street in Newark NJ.  This particular area of Newark NJ was called the "Ironbound" section because of the network of railroad tracks and the large metalworking industry in the area.  As a result of the close proximity of The Penn Station Train Terminal, Gene decided to call his business Penn Tool Co. Gene's business started out selling tools much like any other hardware store. Gene decided that tools would need to be put into catalogs and sent throughout the United States, thus expanding the market in a new way.  He created the catalogs in house which at the time was not very common in the tool industry.  Mailing lists were compiled and catalogs sent out.  It was a huge success.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
import React from 'react'
import About from './HomeComponents/About';
import Testimonials from './Testimonials';
import Hero from './HomeComponents/Hero';


function Home(){
    return(
        <body>
            <Hero />
            <About />
            <Testimonials />
        <div>
            <p>this is home page</p>

        </div>
        </body>
    )
}

export default Home;
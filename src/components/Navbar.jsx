import React from 'react'
import { useNavigate } from "react-router-dom";



function Navbar() {
    const navigate = useNavigate();
    const test1 = e => {
        e.preventDefault();
        navigate("/sigin");
    
      };
    return (
        <nav className='bg-zinc-50 p-3 '>
            <div className='container mx-auto flex justify-between item-center'>
                <button onClick={test1}  className='LOGO-button'>LOGO</button>

                <ul className='flex center'>
                    <li>
                        <a href='' className=' mt-6 mb-12 md:mb-0 md:mt-2 inline-block py-3 px-8 text-cyan-700  text-2xl font-semibold underline decoration-indigo-500 '>HOME</a>
                    </li>
                </ul>
                <div className='hidden md:block'>
                <div className='ml-3 flex items-baseline space-x-2'>
                <a href='/' className='signin-button' >Sign in</a>
                </div>
                </div>
            </div>   
        </nav>            
    )
}

    
    
  
      
 
    
  
  
  
   export default Navbar;
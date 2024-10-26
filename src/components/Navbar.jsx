import { NavLink } from 'react-router-dom'
//import lz_white from 'images/Logo/lz_white.png'
//import lz_black.png from '/public/images/Logo/lz_black.png'
import { navLinks } from '../constants';
import { useState } from 'react';

const NavItems = ({ onClick = () => {} }) => (
    <ul className="nav-ul">
      {navLinks.map((item) => (
        <li key={item.id} className="nav-li px-5 ">
          {/* <a href={item.href} className="nav-li_a" onClick={onClick}>
            {item.name}
          </a> */}
            <NavLink
                to={item.href}
                className={` 
                    ${ ({ isActive }) => {
                        console.log('isActive:', isActive);
                        return isActive ? 'opacity-0' : 'text-white-500'}}`
                }
                
                
                onClick={onClick}
            >
          {item.name}
        </NavLink>
        </li>
      ))}
    </ul>
  );

const Navbar = () => {

    const [setIsOpen, isOpen] = useState(false)

    const toggleMenu = () => isOpen(!setIsOpen)

    const closeMenu = () => isOpen(false)

    

    return (
        <header className='header bg-transparent'>
            <div className="max-w-7xl mx-auto ">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-2xl hover:text-white transition-colors">
                        LZ
                    </a>

                    <button
                        onClick={toggleMenu}
                        className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
                        aria-label="Toggle menu">
                        <img src={setIsOpen ? 'images/ham/close.svg' : 'images/ham/menu.svg'} alt="toggle" className="w-6 h-6" />
                    </button>

                    <nav className="w-full justify-center   sm:flex  hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar ${setIsOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                <NavItems onClick={closeMenu} />
                </nav>
            </div>


            
 



        </header>
  )
}

export default Navbar
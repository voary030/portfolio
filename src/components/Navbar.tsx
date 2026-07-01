import { Container } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center md:justify-between items-center p-4'>
        <a href="#"
        className='flex items-center font-bold text-3xl md:text-xl'
        >
            <Container className='mr-2' />
            VOARY 
            <span className="text-accent">DEV</span>
        </a>

        <ul className='hidden md:flex space-x-4'>
            <li>
                <a href="#" className='btn btn-sm btn-ghost'>
                    Acceuil
                </a>
            </li>
            <li>
                <a href="#" className='btn btn-sm btn-ghost'>
                    A propos
                </a>
            </li>
            <li>
                <a href="#" className='btn btn-sm btn-ghost'>
                    Mes experiences
                </a>
            </li>
            <li>
                <a href="#" className='btn btn-sm btn-ghost'>
                    Mes Projets
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
import { Navbar } from 'flowbite-react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <Navbar
            fluid={true}
            rounded={true}
        >

            <Link className='flex' to={"/"} >

                <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite
                </span>
            </Link>

            <Navbar.Toggle />
            <Navbar.Collapse>
                <NavLink to={"/"} >
                    Home
                </NavLink>


            </Navbar.Collapse>
        </Navbar>
    )
}

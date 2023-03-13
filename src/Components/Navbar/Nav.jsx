import { EmailIcon, HamburgerIcon } from '@chakra-ui/icons'
import React from 'react'

export const Nav = () => {
  return (
    <div id="nav-menu">
    <nav className='main-nav'>
        <div className='logo'>
            <h2>
                <span>A</span>nkit
                <span>S</span>harma
            </h2>
        </div>
        <div className="menu-link">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
            <div className="social-media">
                <ul className="social-media-desktop">
                    <li>
                        <a href=""><EmailIcon/></a>
                    </li>
                    <li>
                        <a href=""><EmailIcon/></a>
                    </li>
                    <li>
                        <a href=""><EmailIcon/></a>
                    </li>
                </ul>
            </div>
            <div className="hamburger-menu">
                <a href=""><HamburgerIcon className="ham"/></a>
            </div>
        </div>
        <div className="resume">Resume</div>
    </nav>
    </div>
  )
}

/*
image.png
*/

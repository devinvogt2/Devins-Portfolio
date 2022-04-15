import React from 'react'
import "./topbar.scss"
import { Person, Mail } from "@material-ui/icons"

function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={'topbar ' + (menuOpen && "active")}>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>Mr. Vogt</a>
                    <div className='iconContainer'>
                        <Person className='icon' />
                        <span>405-822-2110</span>
                    </div>
                    <div className='iconContainer'>
                        <Mail className='icon' />
                        <span>vogtdevinbusiness@gmail.com</span>
                    </div>
                </div>
                <div className='right'>
                    <div className='hamburgerIcon' onClick={() => setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
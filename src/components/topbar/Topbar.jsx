import React from 'react'
import "./topbar.scss"

function Topbar() {
    return (
        <div className='topbar'>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>Mr. Vogt</a>
                    <h1>Hello</h1>
                </div>
                <div className='right'>
                    this is right
                </div>
            </div>
        </div>
    )
}

export default Topbar
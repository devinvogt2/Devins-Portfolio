import React from 'react'
import "./intro.scss"
import { ArrowDownward } from "@material-ui/icons";

export default function Intro() {
    return (
        <div className='intro' id='intro'>
            <div className='left'>
                <div className='imgContainer'>
                    <img src="assets/devin-trans-background.png" alt='' />
                </div>
            </div>
            <div className='right'>
                <div className='wrapper'>
                    <h2>Hi There, I'm</h2>
                    <h1>Devin Vogt</h1>
                    <h3>Web<span>Developer</span></h3>
                </div>
                <a href='#portfolio'>
                    <ArrowDownward className='icon' />
                </a>
            </div>
        </div>
    )
}

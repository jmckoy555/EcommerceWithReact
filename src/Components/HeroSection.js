import React from 'react'
import { Button } from './Button';
import './HeroSection.css';
import '../App.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/Concert.mp4" autoPlay loop muted />
            <h1>Welcome to the Cotton Club</h1>
            <p>Your one stop shop for entertainment bookings.</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                    BOOK NOW
                </Button>

            </div>
        </div>

    )
}

export default HeroSection;

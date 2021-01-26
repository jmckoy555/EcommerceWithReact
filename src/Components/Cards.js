import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Bookings for Any Occassion!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='/images/Concerting.jpg'
                            text='We offer artist who are able to pack out venues. If you are looking for big name talent to sell out your venue we have them here!'
                            label='Concerts'
                            path='/products' />
                        <CardItem
                            src='/images/Gathering.jpg'
                            text='Intimate gatherings are special and here at The Cotton Club we want to make it special. We can give you an artist to fit your specific needs no matter how small the gathering may be.'
                            label='Social Gatherings'
                            path='/products' />
                        <CardItem
                            src='/images/Worship.jpg'
                            text='We have also have a talented group of gospel and worship artists who can help bring in your worship and Sunday services the correct way.'
                            label='Worship Services'
                            path='/products' />
                        <CardItem
                            src='/images/Birthday.jpg'
                            text='We want to help make your special day...special! Wether it is personal happy birthday calls or messages to in person birthday concerts we can help you book your favorite.'
                            label='Birthdays'
                            path='/products' />
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Cards

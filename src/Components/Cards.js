import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>The Cotton Club offers years of service and expertise at your disposal!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/confetti.jpg'
                            text='The Cotton Club offers an extensive resource pool to help you pull off a awesome event.'
                            label='Excitement'
                            path='/products'
                        />
                        <CardItem
                            src='images/jcole2.jpg'
                            text='We have partnered with multiple agents and entertainers to help bring you top of the line artist and creators.'
                            label='Talent'
                            path='/products'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/heroimg.jpeg'
                            text='Our mission is to bring out the inner creative in anyone.'
                            label='Creatives'
                            path='/products'
                        />
                        <CardItem
                            src='images/OutsidePer.jpg'
                            text='We have artist that can fill up the Sydney Opera House as well as your local entertainment venue.'
                            label='Venues'
                            path='/products'
                        />
                        <CardItem
                            src='images/Gathering.jpg'
                            text='The Cotton Club seeks to bring together creatives in a community network!'
                            label='Community'
                            path='/contact'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;



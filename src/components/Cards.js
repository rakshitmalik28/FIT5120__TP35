import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Cards (){
    return (
        <div className='cards'>
            <h1> Identify Butterflies </h1>
            <div className='cards__container'>
            <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                src='../images/001.jpeg'
                text='Read More'
                label='Butterfly1'
                path='/services'
                />
                <CardItem 
                src='../images/002.jpeg'
                text='Read More'
                label='Butterfly2'
                path='/services'
                />
                <CardItem 
                src='../images/003.jpeg'
                text='Read More'
                label='Butterfly3'
                path='/services'
                />
            </ul>
            <ul className='cards__items'>
            <CardItem 
                src='../images/004.jpeg'
                text='Read More'
                label='Butterfly4'
                path='/services'
                />
                <CardItem 
                src='../images/005.jpeg'
                text='Read More'
                label='Butterfly5'
                path='/services'
                />
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Cards
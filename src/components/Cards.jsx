import React from 'react'
import { useState, useEffect } from 'react'
import Bubble from './Bubble'

const Cards = () => {
    const [cardData, setCardData ] = useState({})

    const fetchData = async () => {
        await fetch(`https://api.magicthegathering.io/v1/cards`)
        .then((response) => response.json()) 
        .then((data) => setCardData(data)) 
        .catch((error) => console.log(error)); 
    }

    useEffect(() => {
        fetchData();
    }, []);

    // console.log(cardData.cards[0].name)

    const cardNames = cardData.cards.map(cards => {
        return(
            <Bubble 
                heading={cards.name}
                img={cards.imageUrl}
            />
        )
    })

    return  (
        <div className='grid grid-cols-4'>
            {cardNames}
        </div>
    )
}

export default Cards
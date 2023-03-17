import React from 'react'
import '../css/index.css'

const Bubble = (props) => {
    return (
        <div className='shadow-xl rounded-lg m-8 h-[90%] bg-orange-50 hover:scale-105'>
            <h2 className='font-kanitmedium text-black text-lg text-center mt-4'>{props.heading}</h2>
            <img className='ml-9 mt-4' src={props.img} alt={props.heading} />
        </div>
    )
}

export default Bubble
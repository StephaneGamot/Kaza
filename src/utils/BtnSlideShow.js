import React from 'react'
import leftArrow from '../assets/arrow-back.png'
import rightArrow from '../assets/arrow-forward.png'

export default function BtnSlider({direction, moveSlide}) {

    return (
        <button 
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next": "btn-slide prev"}>
            <img src={direction === "next" ? rightArrow : leftArrow} alt="icone flèche" />
        </button>
    )
}

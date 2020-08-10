/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import SlickSlider from 'react-slick';

const SliderCard: React.FC = ({ children }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    centerMode: false,
    variableWidth: true,
    adaptiveHeight: true,
  }
  return (
    <div>
      <SlickSlider {...settings}
      >
        {children}
      </SlickSlider>
    </div >
  )
}

export default SliderCard

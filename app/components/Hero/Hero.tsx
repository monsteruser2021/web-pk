import React from 'react'

const ImgCarousel = [
  {
    id: 1,
    img: 'imagen1',
    title: "Titulo 1",
    description: "descrpcion 1",
  },
]

const Hero = () => {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };

  return (
    <div className='w-screen h-screen bg-primary/30 dark:bg-quinary '>
      
    </div>
  )
}

export default Hero

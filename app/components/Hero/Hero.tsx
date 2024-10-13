import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import taza from "../../../public/assets/taza.png"
import Image from 'next/image';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const ImgCarousel = [
  {
    id: 1,
    img: taza,
    title: "¡Crea tu producto único!",
    subtitle: "Crea productos únicos que reflejen tu estilo.",
    description: "Personaliza una amplia variedad de articulos con tus diseños favoritos. Desde tazas y franelas hasta accesorios y decoración, tenemos todo lo que necesitas para hacer que cada regalo sea especial. ¡Descubre cómo convertir tus momentos más preciados en objetos únicos!",
    button: "Cotiza ahora!",
  },
  {
    id: 2,
    img: taza,
    title: "Impacta con tu marca",
    subtitle: "Material POP a medida para potenciar tus ventas",
    description: "Destaca entre la competencia con material POP diseñado a tu medida. Banners, flyers, exhibidores y mucho más para captar la atención de tus clientes en el punto de venta. ¡Te ayudamos a crear una imagen de marca sólida y memorable!",
    button: "Ver catálogo",
  },
  {
    id: 3,
    img: taza,
    title: "Acerca de nosotros",
    subtitle: "Nuestra pasión, tu éxito",
    description: "Somos un equipo de apasionados por el diseño y la personalización. Nos encanta crear productos únicos que hagan felices a nuestros clientes. Descubre nuestra historia, nuestros valores y cómo podemos ayudarte a alcanzar tus objetivos de marketing.",
    button: "Nuestro contacto",
  },
]

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="dark:text-gray-100 absolute hidden text-3xl ml-[2rem] right-[3rem] bottom-[1rem] -translate-y-1/2 lg:flex flex-col" onClick={onClick}>
      <FaArrowAltCircleRight className="mb-2" />
    </div>
  );
};


const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="dark:text-gray-100 absolute hidden text-3xl ml-[2rem] right-[3rem] bottom-[5rem] transform -translate-y-1/2 z-10 lg:flex flex-col lg:bottom-[5rem]" onClick={onClick}>
      <FaArrowAltCircleLeft />
    </div>
  );
};

{/*
const MobileNextArrow = (props) => {
  const {onClick} = props;
  return (
    <div className='dark:text-gray-100 absolute sm:hidden text-3xl flex justify-center items-center mx-a '>
      <FaArrowAltCircleRight/>
    </div>
  );
};

const MobilePrevArrow = (props) => {
  const {onClick} = props;
  return (
    <div>
      <FaArrowAltCircleLeft/>
    </div>
  );
};
*/}

const Hero = () => {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    waitForAnimate: false,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  };

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] w-screen h-screen bg-primary/10 dark:bg-quinary flex justify-center items-center duration-200'>
      <div className='container pb-8 sm:py-[0] '>
        <Slider {...settings}>
          {ImgCarousel.map((data) => (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:columns-2'>
              {/*Text & Button*/}
              <div className='relative flex flex-col justify-center gap-4 pt-12 sm:pt-auto text-center sm:text-left order-2 sm:order-1 mx-[5rem] mb-[2rem] z-10'>
                <h1 className='text-3xl sm:text-2xl lg:text-4xl dark:text-gray-100 uppercase font-bold'>
                  {data.title}
                </h1>
                <p className='text-md dark:text-gray-200 lg:mb-[1rem]'>
                  {data.subtitle}
                </p>
                <p className='text-md dark:text-gray-300 lg:mb-[1rem]'>
                  {data.description}
                </p>
                <div>
                  <button
                  className='bg-primary dark:bg-quaternary hover:scale-105 duration-200 text-slate-900 dark:text-gray-100 font-bold uppercase my-[1rem] py-2 px-4 rounded-full'>
                    {data.button}
                  </button>
                </div>
              </div>
              {/*Images*/}
              <div className='order-a sm:order-2'>
                <div className='relative z-10'>
                  <Image
                  src={data.img}
                  alt=''
                  className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-100 lg:scale-120 object-contain mx-auto '
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>  
  )
}

export default Hero

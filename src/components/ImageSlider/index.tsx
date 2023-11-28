import { type } from "os";
import React, { useState, useEffect } from "react"
import { FaLongArrowAltLeft,FaLongArrowAltRight } from "react-icons/fa"
import { BsChevronCompactLeft,BsChevronCompactRight } from "react-icons/bs"
import { RxDotFilled } from 'react-icons/rx';
interface SlideType {
  url: string
}
export default function ImageSlider({
  slides,
  smallLogos, //? This smallLogos prop is only for small size sliders
  home,
}: {
  slides: SlideType[],
  smallLogos?: boolean,
  home?: boolean,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);

  const prevSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setNextIndex(newIndex == slides.length - 1 ? 0 : newIndex + 1);
  };

  const nextSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setNextIndex(newIndex == slides.length - 1 ? 0 : newIndex + 1);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
    setNextIndex(slideIndex == slides.length - 1 ? 0 : slideIndex + 1);
  };
  return (
    <>
      <section className={`${home ? 'flex' : 'hidden'} justify-center bg-plainblue border border-plainblue`}>
        <div className={`h-full w-full mx-auto grid grid-cols-3 items-center`}>
          <div className={`col-span-2 h-full`}>
            <img src={slides[currentIndex].url} alt="Center"  className={`rounded-xl  w-[760px] h-[534px]`}/>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-end justify-center">
              {/* Left Arrow */}
              <div className={`text-white text-2xl rounded-full lg:mx-10 p-2 h-[50px] w-[50px] cursor-pointer`}>
                <FaLongArrowAltLeft onClick={prevSlide} size={25} />
              </div>
              {/* Right Arrow */}
              <div className={`text-white text-2xl rounded-full lg:mx-10 p-2 h-[50px] w-[50px] cursor-pointer`}>
                <FaLongArrowAltRight onClick={nextSlide} size={25} />
              </div>
            </div>
            <div className={``}>
              <img src={slides[nextIndex].url} alt="Right" className={`rounded-xl w-[380px] h-[500px]`} />
            </div>
          </div>
          <div className={`col-span-3 flex flex-row items-center justify-center pt-2`}>
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`text-2xl cursor-pointer ${ slideIndex === currentIndex ? 'text-white' : 'text-black-100'} hover:text-gray-400`}
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className={`${!home ? 'flex' : 'hidden'} justify-center`}>
        <div className={`h-full w-full mx-auto flex flex-row items-center ${smallLogos ? 'xl:px-10' : ''}`}>
          {/* Left Arrow */}
          <div className={`bg-plainblue text-black-100 text-2xl rounded-full lg:mx-10 p-2 h-[50px] w-[50px] cursor-pointer
            ${smallLogos ? 'bg-lightblue text-white' : 'bg-white text-black'}
          `}>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          <div className={`grid grid-cols-1 lg:grid-cols-3 ${smallLogos ? '' : 'gap-12'} place-items-center w-full h-[full] my-5`}>
            <div className={`hidden xl:block`}>
              <img src={slides[currentIndex == 0 ? slides.length - 1 : currentIndex - 1].url} alt="Left" className={`${smallLogos ? 'h-[80px] w-[80px] lg:h-[100px] lg:w-[100px] xl:h-[150px] xl:w-[150px]' : 'rounded-xl lg:h-[250px] lg:w-[250px] xl:h-[350px] xl:w-[350px]'}`}/>
            </div>
            <div className={`col-span-3 xl:col-span-1`}>
              <img src={slides[currentIndex].url} alt="Center"  className={`${smallLogos ? 'h-[80px] w-[80px] lg:h-[100px] lg:w-[100px] xl:h-[150px] xl:w-[150px]' : 'rounded-xl h-[200px] w-[200px] lg:h-[350px] lg:w-[350px]'}`}/>
            </div>
            <div className={`hidden xl:block`}>
              <img src={slides[nextIndex].url} alt="Right" className={`${smallLogos ? 'h-[80px] w-[80px] lg:h-[100px] lg:w-[100px] xl:h-[150px] xl:w-[150px]' : 'rounded-xl lg:h-[250px] lg:w-[250px] xl:h-[350px] xl:w-[350px]'}`} />
            </div>
            <div className={`col-span-3 ${smallLogos ? 'hidden' : ' hidden lg:flex'} items-center justify-center py-2`}>
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className={`text-2xl cursor-pointer ${ slideIndex === currentIndex ? 'text-purple' : 'text-black-100'} hover:text-gray-400`}
                >
                  <RxDotFilled />
                </div>
              ))}
            </div>
          </div>
          {/* Right Arrow */}
          <div className={`bg-plainblue text-black-100 text-2xl rounded-full lg:mx-10 p-2 h-[50px] w-[50px] cursor-pointer
            ${smallLogos ? 'bg-lightblue text-white' : 'bg-white text-black'}
          `}>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
        </div>
      </section>
    </>
  )
}

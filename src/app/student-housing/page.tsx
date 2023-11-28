'use client'
import React, {useState, useEffect} from "react"
import ImageSlider from "@/components/ImageSlider"

export default function Home() {
  const [cityUPercentage, setCityUPercentage] = useState(86.6)
  const [insidePercentage, setInsidePercentage] = useState(54)
  return (
    <section className=' text-white'>
      <div className="grid grid-cols-1 lg:grid-cols-5 w-full">
        <div className='col-span-2 flex flex-col place-items-center mt-2 lg:mt-20 px-2 sm:px-10 order-last lg:order-none'>
          <img src="/images/regiones_colombia.png" alt="Mapa por regiones" className='xl:p-10'/>
        </div>
        <div className='col-span-3 bg-plainblue flex flex-col w-full order-first lg:order-none'>
          <h1 className='flex text-white text-center text-4xl lg:text-7xl xl:text-9xl p-10'>NUESTROS ACTIVOS</h1>
          <div className='col-span-2 grid grid-cols-1 lg:grid-cols-2 items-center justify-center text-center'>
            <div className='flex flex-col p-10'>
              <img src="/images/cityu_foto.png" alt="CityU" className='w-[500px] h-[320px] rounded-xl'/>
              <h1 className='text-xl lg:text-4xl xl:text-6xl'>CityU</h1>
            </div>
            <div className='flex flex-col p-10'>
              <img src="/images/inside_foto_45.png" alt="Inside" className='w-[500px] h-[320px] rounded-xl'/>
              <h1 className='text-xl lg:text-4xl xl:text-6xl'>Inside</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-BgCity bg-cover bg-center flex flex-col'>
        <div className="p-10 xl:p-40">
          <h1 className='text-7xl xl:text-9xl my-5'>CityU</h1>
          <p className="text-lg lg:text-2xl xl:text-4xl w-full lg:w-5/6 xl:w-3/4 text-justify xl:my-10">
            Hoy CityU se consolida como un modelo de negocio capaz de transformar la forma en la que las personas viven a través de experiencias memorables y el acompañamiento continuo, propiciando espacios de encuentro y participación global, garantizando la calidad de vida y bienestar de nuestra comunidad.
          </p>
        </div>
        <div className="lg:px-20">
          <ImageSlider slides={cityu_slides}/>
        </div>
      </div>
      <div className="bg-white flex flex-row text-darkblue">
        <div className="basis-3/4 bg-lightGray text-xl lg:text-3xl xl:text-5xl flex items-center justify-center font-semibold font-sans">1.535 CAMAS</div>
        <div className="flex flex-col basis-1/4 items-center justify-center text-sm lg:text-lg xl:text-2xl my-2">
          <div>{cityUPercentage !== 0 ? cityUPercentage : ''}%</div>
          <div>Ocupación</div>
        </div>
      </div>
      <div className='bg-BgInside bg-cover bg-center grid grid-cols-1'>
        <div className="p-10 xl:p-40 flex flex-col self-center justify-items-end text-justify lg:text-right">
          <h1 className='text-7xl xl:text-9xl my-5'>Inside</h1>
          <p className="text-lg lg:text-2xl xl:text-4xl w-full lg:w-5/6 xl:w-3/4 xl:my-10 flex self-end">
            Hoy Boho by Ulife apunta a una transformación organizacional matricial innovadora, basadas en las relaciones de autoridad directa con el asesoramiento y ayuda de agentes externos a la organización base. <br/> Ulife espera promover el cambio y desarrollo de su cultura, a través del empoderamiento de su talento regional, alcanzando altos estándares en los más grandes modelos de crecimiento local en nuestro país.
          </p>
        </div>
        <div className="lg:px-20">
          <ImageSlider slides={inside_slides}/>
        </div>
      </div>
      <div className="bg-white flex flex-row text-darkblue">
        <div className="flex flex-col basis-1/4 items-center justify-center text-sm lg:text-lg xl:text-2xl my-2">
          <div>{insidePercentage !== 0 ? insidePercentage : ''}%</div>
          <div>Ocupación</div>
        </div>
        <div className="basis-3/4 bg-lightGray text-xl lg:text-3xl xl:text-5xl flex items-center justify-center font-semibold font-sans">344 CAMAS</div>
      </div>
    </section>
  )
}


const cityu_slides = [
  {url:'/images/Asset47.png'},
  {url:'/images/Asset48.png'},
  {url:'/images/Asset49.png'},
  {url:'/images/Asset50.png'}
]

const inside_slides = [
  {url:'/images/estandar1.jpg'},
  {url:'/images/estandar2.jpg'},
  {url:'/images/estandar3.jpg'},
  {url:'/images/estandar4.jpg'}
]
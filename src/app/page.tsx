'use client'
import { VscSearch, VscTriangleDown } from 'react-icons/vsc'
import { BsCheckCircleFill } from 'react-icons/bs'
import Valores from '@/components/Valores'
import ImageSlider from '@/components/ImageSlider'

export default function Home() {
  return (
    <main className=''>
      <div className="bg-homeBg1 bg-top bg-cover grid grid-cols-1 lg:grid-cols-5 w-full">
        <div className='col-span-2 flex flex-col place-items-center mt-2 lg:mt-20 px-2 sm:px-10'>
          <h1 className='text-darkblue text-2xl lg:text-5xl xl:text-8xl'>CONOCE ULIFE</h1>
          <p className='text-gray-400 text-xs lg:text-lg xl:text-xl text-justify'>
            Somos Líderes latinoamericanos en la creación y desarrollo de modelos de gestión organizacional, que proveen experiencias de vida inspiradoreas a nuestros clientes, logrando promover el desarrollo local a través de momentos memorables, intuitivos, somos un lugar a la vez.
          </p>
          <a href="/about-us" className='rounded-xl text-center text-xs lg:text-lg xl:text-xl font-bold my-2 lg:my-10 p-2 w-1/4 lg:w-2/5 xl:w-1/3 bg-lightblue'>
            LEER MÁS
          </a>
        </div>
        <div className='col-span-3 flex flex-col w-full rounded-b-xl'>
          <ImageSlider slides={fachada} home/>
        </div>
      </div>
      <div className={'flex flex-col place-items-center bg-homeBg2 bg-cover my-10'}>
        <div className='w-3/4 text-xl lg:text-4xl xl:text-7xl'>
          <div className='flex flex-col items-center justify-center col-span-3 text-white text-center pt-2'>
            <h1 className={'bg-lightblue rounded-xl my-5 p-5'}>EXPLORA NUESTROS ACTIVOS</h1>
            <ImageSlider slides={assets} />
            <div className='col-span-2 flex justify-between rounded-lg border border-darkblue bg-white text-black-100 w-4/5 lg:w-3/5 p-4 my-5'>
              <VscSearch size={20} />
              <VscTriangleDown size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className={'grid grid-cols-4 gap-5 text-white text-center p-2 text-xl lg:text-3xl xl:text-5xl'}>
        <div className={'bg-studentHousing bg-cover bg-center place-items-center p-10'}>
          <h1>{services1[0].title}</h1>
          <p className={'text-sm lg:text-xl xl:text-2xl text-justify my-10'}>{services1[0].description}</p>
        </div>
        <div className={'bg-hospitality bg-cover bg-center place-items-center p-10'}>
          <h1>{services1[1].title}</h1>
          <p className={'text-sm lg:text-xl xl:text-2xl text-justify my-10'}>{services1[1].description}</p>
        </div>
        <div className={'bg-coworking bg-cover bg-center place-items-center p-10'}>
          <h1>{services1[2].title}</h1>
          <p className={'text-sm lg:text-xl xl:text-2xl text-justify my-10'}>{services1[2].description}</p>
        </div>
        <div className={'grid grid-rows-2 gap-5'}>
          <div className={'bg-seniorHousing bg-cover bg-center place-items-center p-10'}>
            <h1>{services1[3].title}</h1>
            <p className={'text-sm lg:text-xl xl:text-2xl text-justify my-10'}>{services1[3].description}</p>
          </div>
          <div className={'bg-coliving bg-cover bg-center place-items-center p-10'}>
            <h1>{services1[4].title}</h1>
            <p className={'text-sm lg:text-xl xl:text-2xl text-justify my-10'}>{services1[4].description}</p>
          </div>
        </div>
      </div>
      <div className='bg-lightGray grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center py-10'>
        <img src="/images/col-map.png" alt="MapaColombia" />
        <div className='text-subtle text-center px-5 xl:px-10'>
          <h1 className='font-semibold text-5xl lg:text-7xl xl:text-9xl my-20'>SERVICIOS</h1>
          <p className='text-lg lg:text-xl xl:text-2xl text-justify'>
            Estamos presentes en dos de las principales ciudades de Colombia, siendo hogas de miles de jóvenes que son el futuro de nuestro país.
          </p>
          <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-items-start text-sm lg:text-xl xl:text-2xl'>
            {services2.map((service, index) => {
              return (
                <>
                  <div key={index} className='py-5 flex flex-row items-center'>
                    <div className='px-2 lg:px-0'><BsCheckCircleFill size={35} /></div>
                    <p className='grow'>&nbsp;{service}</p>
                  </div>
                </>
              )
            })}
            <a href='/business' className='bg-subtle text-white rounded-2xl p-2'>
              Más información
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

const services1 = [
  {title:'STUDENT HOUSING', description: 'Hoy CityU se consolida como un modelo de negocio capaz de transformar la forma en que las personas viven a través de experiencias memorables y el acompañamiento continuo, propiciando espacios de encuentro y participación global, garantizando la calidad de vida y bienestar de nuestra comunidad.'},
  {title:'HOSPITALITY', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et enim et tellus bibendum bibendum.'},
  {title:'COWORKING', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et enim et tellus bibendum bibendum.'},
  {title:'COLIVING', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et enim et tellus bibendum bibendum.'},
  {title:'SENIOR HOUSING', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et enim et tellus bibendum'},
]

const services2 = [
  'COHOUSING',
  'COWORKING',
  'COLIVING',
  'STUDENT HOUSING',
  'SENIOR HOUSING',
]

const fachada = [
  {url: '/images/cityu_foto.png'},
  {url: '/images/inside_foto.png'},
]

const assets = [
    {
      url: '/images/GALERIA_1.jpg',
    },
    {
      url: '/images/GALERIA_2.jpg',
    },
    {
      url: '/images/GALERIA_3.jpg',
    },
    {
      url: '/images/GALERIA_4.jpg',
    },
    {
      url: '/images/GALERIA_5.jpg',
    },
    {
      url: '/images/CARRUSEL_1.jpg',
    },
    {
      url: '/images/CARRUSEL_2.jpg',
    },
    {
      url: '/images/CARRUSEL_3.jpg',
    },
    {
      url: '/images/CARRUSEL_4.jpg',
    },
    {
      url: '/images/CARRUSEL_5.jpg',
    },
    {
      url: '/images/CARRUSEL_6.jpg',
    },
    {
      url: '/images/CARRUSEL_7.png',
    },
    {
      url: '/images/CARRUSEL_8.jpg',
    },
    {
      url: '/images/CARRUSEL_9.jpg',
    },
    {
      url: '/images/CARRUSEL_10.jpg',
    },
    {
      url: '/images/CARRUSEL_11.jpg',
    },
    {
      url: '/images/CARRUSEL_12.png',
    },
    {
      url: '/images/CARRUSEL_13.jpg',
    },
    {
      url: '/images/CARRUSEL_14.jpg',
    },
    {
      url: '/images/CARRUSEL_15.png',
    },
    {
      url: '/images/CARRUSEL_16.jpg',
    },
  ]
'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Transition } from '@headlessui/react';
import { usePathname } from 'next/navigation'
import SideBar from '../SideBar';
import { HiMenuAlt3 } from 'react-icons/hi';
import { SlClose } from 'react-icons/sl'


interface Props {
  children?: React.ReactNode;
  classname?: string;
  sideBar?: boolean;
  disable?: boolean;
}
const defaultClassName = '';
export default function Header({
  classname = defaultClassName,
  disable = false,
  sideBar = true,
  ...props
}: Props
) {
  // to fix nextjs modal error
  // see here https://github.com/themesberg/flowbite-react/issues/269#issuecomment-1179578263
  const [pageDoneLoading, setPageIsLoading] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigation = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setPageIsLoading(true);
  }, []);
  // fix done
  const [showModal, setShowModal] = useState(false);
  const pathName = usePathname()
  const buttonclassName =  'p-2 rounded-lg text-center flex items-center';

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (!navigation?.current?.contains(event.target)) {
        if (!isSidebarOpen) return;
        setSidebarOpen(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [isSidebarOpen, navigation]);
  useEffect(() => {
    const handleEscape = (event: any) => {
      if (isSidebarOpen && event.key !== 'Escape') {
        return false;
      }
      setSidebarOpen(false);
    };

    document.addEventListener('keyup', handleEscape);
    return () => document.removeEventListener('keyup', handleEscape);
  }, [isSidebarOpen]);
  return (
    <>      
      <section className="w-full bg-white select-none relative">
        <div className="flex flex-row items-top">
          <div className={`${sideBar ? '' : 'hidden'}`}>
            <Transition
              as="nav"
              className={` fixed left-0 top-0 lg:hidden z-50`}
              role="menu"
              show={isSidebarOpen}
              unmount={false}
              enter="transition ease-out duration-300"
              enterFrom="-translate-x-full opacity-25"
              enterTo="translate-x-0 opacity-100"
              entered="translate-x-0 opacity-100"
              leaveFrom="translate-x-0 opacity-100"
              leaveTo="-translate-x-full opacity-25"
            >
              <SideBar disable={disable} />
            </Transition>
            {/* <div className="hidden lg:block">
              <SideBar disable={disable} />
            </div> */}
          </div>
          <div className="w-full bg-white">
            <div
              ref={navigation}
              className="bg-darkblue lg:bg-white flex flex-col sticky top-0"
            >
              <div className={`my-5 lg:hidden flex justify-end`}>
                <button
                  onClick={() => setSidebarOpen(!isSidebarOpen)}
                  className="text-white focus:outline-none px-5"
                >
                  <HiMenuAlt3 size={40} />
                </button>
              </div>
              <div className='hidden lg:flex flex-row justify-center items-center'>
                <div className='w-full grid grid-cols-1 lg:grid-cols-5 items-center text-plainblue text-lg'>
                  <div className="col-span-2 flex flex-row justify-center px-10 xl:px-0">
                    <a href="/" className={`justify-self-center ${pathName === '/' ? '' : 'hidden'}`}>
                      <img src='/images/logo.png' alt='Logo' className='h-[100px] lg:h-[100px] p-5'/>
                    </a>
                    <a href="/" className={`justify-self-center ${pathName !== '/' ? '' : 'hidden'}`}>
                      <img src='/images/logo-short.jpg' alt='Logo' className='h-[100px] lg:h-[100px] p-2 mx-2'/>
                    </a>
                    <div className={`mx-5 self-center justify-self-center text-xl xl:text-3xl ${pathName === '/about-us' ? '' : 'hidden'}`}>
                      SOBRE NOSOTROS
                    </div>
                    <div className={`mx-5 self-center justify-self-center text-xl xl:text-3xl ${pathName === '/business' ? '' : 'hidden'}`}>
                      BUSINESS
                    </div>
                    <div className={`mx-5 self-center justify-self-center text-xl xl:text-3xl ${pathName === '/student-housing' ? '' : 'hidden'}`}>
                      STUDENT HOUSING
                    </div>
                    <div className={`mx-5 self-center justify-self-center text-xl xl:text-3xl ${pathName === '/contact' ? '' : 'hidden'}`}>
                      CONTACTO
                    </div>
                  </div>                  
                  <div className={`col-span-3 hidden lg:grid self-end bg-plainblue border border-plainblue font-semibold rounded-t-xl ${pathName === '/login' ? 'hidden' : ''}`}>
                    <div className="hidden col-span-2 rounded-t-lg lg:grid grid-cols-5 items-center justify-items-stretch text-center  mt-4 text-white lg:text-xs xl:text-xl">
                      <a href="/" className='my-5'>HOME</a>
                      <a href="/about-us" className='my-5'>SOBRE NOSOTROS</a>
                      <a href="/business" className='my-5'>BUSINESS</a>
                      <a href="/student-housing" className='my-5'>STUDENT HOUSING</a>
                      <a href="/contact" className='my-5'>CONTACTO</a>
                      <a href='/login' className={`${buttonclassName} hidden bg-white mx-5 ${pathName === '/login' ? 'hidden' : ''}`}>
                        Inicia Sesion
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>{props.children}</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* <div className='hidden'>
        {pageDoneLoading && (
          <Checkout 
            showState={showModal}
            setShowState={setShowModal}
          />
        )}
      </div> */}
    </>
  )
}

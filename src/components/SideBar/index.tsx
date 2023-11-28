import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { TiHome } from 'react-icons/ti';
import { GiNotebook } from 'react-icons/gi'
import { MdBusinessCenter, MdContactPhone } from 'react-icons/md';
import { BsFillBuildingFill } from 'react-icons/bs';
import { HiOutlineLogout } from 'react-icons/hi';
import { NavLink } from '../NavLink';

interface Props {
  disable?: boolean;
}

const SideBar = ({ disable = false }: Props) => {
  const pathName = usePathname()
  const userLogOut = () => {
    signOut()
  };
  const [menuSection] = useState([
    [
      {
        title: 'HOME',
        icon: TiHome,
        href: '/',
      },
      {
        title: 'SOBRE NOSOTROS',
        icon: GiNotebook,
        href: '/about-us'
      },
      {
        title: 'BUSINESS',
        icon: MdBusinessCenter,
        href: '/business',
      },
      {
        title: 'STUDENT HOUSING',
        icon: BsFillBuildingFill,
        href: '/student-housing',
      },
      {
        title: 'CONTACTO',
        icon: MdContactPhone,
        href: '/contact',
      },
    ],
    // [
    //   {
    //     title: 'Inicia Sesion',
    //     icon: AiOutlineUser,
    //     href: ['/login'],
    //   },
    //   // { title: 'Soporte', icon: BiSupport, href: ['/support'] },
    // ],
  ]);

  return (
    <section>
      <aside className="w-72" aria-label="Sidebar">
        <div className="h-screen py-4 px-3 bg-darkblue flex flex-col">
          <div className="mt-1.5 ml-7">
            <Link href="/" className='flex items-center justify-center'>
              <img src="/images/ulife-logo.png" alt="Ulife Logo"  className=''/>
            </Link>
          </div>
          <div className="grow">
            {menuSection.map((section, key) => (
              <nav
                className={`${key === 0 ? '' : 'border-t border-gray-700'}`}
                key={key}
              >
                <ul className="my-12 mx-5 space-y-2">
                  {section.map((value, key_) => (
                    <li key={key_}>
                      <NavLink
                        href={value.href}
                        disable={disable}
                        className={`flex items-center p-2 rounded-lg 
                          ${ disable
                              ? 'cursor-default'
                              : 'hover:bg-white hover:text-darkblue'
                          }
                        `}
                      >
                        <value.icon size={22} />
                        <span className={`ml-3 text-base`}>{value.title}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
          <div className="hidden my-2 mx-5 mb-10">
            <span
              onClick={userLogOut}
              className="flex items-center p-2 cursor-pointer"
            >
              <HiOutlineLogout size={22} color="red" />
              <span className="ml-3 text-base text-red">Logout</span>
            </span>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default SideBar;

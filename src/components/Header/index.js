import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import Link from "next/link";
import Image from 'next/image';

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Header = ({
    userName = 'Kevin Coveña'
}) => {

    const [openMobile, setOpenMobile] = useState(false);
    const handleOpenMobile = () => { setOpenMobile(!openMobile) }

    const _Links = [
        { name: 'Preguntas', path: 'questions' },
        { name: 'Areas', path: 'areas' },
        { name: 'Ranking', path: 'ranking' }
    ]

    const nameApp = 'Dude';

    return (
        <nav className='bg-gray-50 w-full border-b shadow px-10 py-2 mb-2 relative'>
            <div className='flex justify-between md:items-end items-center'>

                <HeaderLeft nameApp={nameApp} _Links={_Links} />

                <HeaderRight className='md:hidden block' />

            </div>

            <button onClick={handleOpenMobile} className='absolute top-5 right-10' >
                {
                    !openMobile ?
                        <AiOutlineMenu className='block md:hidden cursor-pointer focus:outline-none' />
                        :
                        <AiOutlineClose className='block md:hidden cursor-pointer focus:outline-none' />
                }
            </button>

            <Menu as="div">
                <div>
                    <Menu.Button className='absolute top-5 right-10'>

                        <AiOutlineMenu className='block md:hidden cursor-pointer focus:outline-none' />

                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="">
                        {({ active }) => (
                            <>
                                <Menu.Item>
                                    <h3 className='text-2xl font-medium font-serif'>{nameApp}</h3>
                                </Menu.Item>
                                <ul>
                                    {
                                        _Links.map((e, key) => {
                                            return (
                                                <Menu.Item key={key}>
                                                    <li>
                                                        <Link href={`/${e.path}`}>
                                                            <a>
                                                                {e.name}
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </Menu.Item>
                                            );
                                        })
                                    }
                                </ul>
                                <Menu.Item>
                                    <div className='flex flex-row items-start space-x-1 mt-3'>
                                        <Image src='https://picsum.photos/200' width={75} height={75} />
                                        <div>
                                            <small className='font-medium'>{userName}</small>
                                            <ul>
                                                <li><a href='/profile'>Perfil</a></li>
                                                <li><a href='/logout'>Cerrar sesión</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Menu.Item>
                            </>
                        )}
                    </Menu.Items>
                </Transition>
            </Menu>

        </nav>
    )
}

export default Header;
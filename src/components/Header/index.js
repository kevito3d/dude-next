import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import Mobile from './mobile';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


const Header = () => {

    const [openMobile, setOpenMobile] = useState(false);
    const handleOpenMobile = () => { setOpenMobile(!openMobile) }

    const _Links = [
        { name: 'Preguntas', path: 'questions' },
        { name: 'Areas', path: 'areas' },
        { name: 'Ranking', path: 'ranking' }
    ]

    const nameApp = 'Dude';

    return (
        <nav className='bg-gray-50 w-full border-b shadow px-10 py-2 mb-2'>
            <div className='flex justify-between md:items-end items-center'>

                <HeaderLeft nameApp={nameApp} _Links={_Links} />
                <button onClick={handleOpenMobile} >
                    {
                        !openMobile ?
                            <AiOutlineMenu className='block md:hidden cursor-pointer focus:outline-none' />
                            :
                            <AiOutlineClose className='block md:hidden cursor-pointer focus:outline-none' />
                    }
                </button>

                <HeaderRight className='md:hidden block' />

            </div>

            {
                openMobile &&
                <Mobile nameApp={nameApp} _Links={_Links} />
            }

        </nav>
    )
}

export default Header;
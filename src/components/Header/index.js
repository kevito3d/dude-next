import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const Header = () => {
    return (
        <nav className='bg-gray-50 w-full border-b shadow px-10 py-2 mb-2'>
            <div className='flex justify-between items-end'>

                <HeaderLeft nameApp='Dude' />

                <HeaderRight />

            </div>
        </nav>
    )
}

export default Header;
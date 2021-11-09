import Logo from 'assets/img/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const HeaderLeft = ({
    nameApp = 'nameApp',
    _Links
}) => {
    return (
        <div className='flex justify-between'>
            <div className='flex items-end mr-16'>
                <img src={`${Logo.src}`} className='w-11 h-11 md:w-16 md:h-16' />
                <h3 className='text-2xl font-medium font-serif hidden md:block'>{nameApp}</h3>
            </div>

            <HeaderLinks _Links={_Links} />

        </div>
    );
}

const HeaderLinks = ({ _Links }) => {

    return (
        <ul className='md:flex items-end font-serif hidden'>
            {
                _Links.map((e, key) => {
                    return (
                        <li className='px-2' key={key}>
                            <Link href={`/${e.path}`}>
                                <a>
                                    {e.name}
                                </a>
                            </Link>
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default HeaderLeft;
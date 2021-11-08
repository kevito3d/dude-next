import Logo from 'assets/img/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {

    const _Links = [
        { name: 'Preguntas', path: 'questions' },
        { name: 'Areas', path: 'areas' },
        { name: 'Ranking', path: 'ranking' }
    ]


    return (
        <nav className='bg-gray-50 w-full border-b shadow px-10 py-2 mb-2'>
            <div className='flex justify-between items-end'>

                <HeaderLeft _Links={_Links} />

                <HeaderRight />

            </div>
        </nav>
    )
}

const HeaderLeft = ({ _Links }) => {
    return (
        <div className='flex justify-between'>
            <div className='flex items-end mr-16'>
                <Image src={`${Logo.src}`} height={65} width={65} />
                <h3 className='text-2xl font-medium font-serif'>Dude</h3>
            </div>

            <HeaderLinks _Links={_Links} />

        </div>
    );
}

const HeaderLinks = ({ _Links }) => {
    return (
        <ul className='flex items-end font-serif'>
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

const HeaderRight = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <Image src='https://picsum.photos/200' width={50} height={50} className='rounded-full' />
            <small>Kevin Coveña</small>
        </div>
    );
}

export default Header;
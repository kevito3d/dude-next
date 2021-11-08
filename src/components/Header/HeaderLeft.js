import Logo from 'assets/img/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const HeaderLeft = ({
    nameApp = 'nameApp'
}) => {
    return (
        <div className='flex justify-between'>
            <div className='flex items-end mr-16'>
                <Image src={`${Logo.src}`} height={65} width={65} />
                <h3 className='text-2xl font-medium font-serif'>{nameApp}</h3>
            </div>

            <HeaderLinks />

        </div>
    );
}

const HeaderLinks = () => {

    const _Links = [
        { name: 'Preguntas', path: 'questions' },
        { name: 'Areas', path: 'areas' },
        { name: 'Ranking', path: 'ranking' }
    ]

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

export default HeaderLeft;
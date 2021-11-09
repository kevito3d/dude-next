import Link from "next/link";
import Image from 'next/image';

const Mobile = ({
    nameApp = 'nameApp',
    _Links
}) => {
    return (
        <div className={`md:hidden pt-3 transform transition-all duration-500 z-0`}>
            <h3 className='text-2xl font-medium font-serif'>{nameApp}</h3>

            <Links _Links={_Links} />
            <Profile />
        </div>
    );
}

const Links = ({ _Links }) => {
    return (
        <ul className='border-t mt-1'>
            {
                _Links.map((e, key) => {
                    return (
                        <li key={key}>
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

const Profile = ({
    userName = 'Kevin Coveña'
}) => {
    return (
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
    );
}


export default Mobile;
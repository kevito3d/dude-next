import Logo from 'assets/img/logo.png';
import Image from 'next/image';

const HeaderRight = ({
    userName = 'Kevin Coveña'
}) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <Image src='https://picsum.photos/200' width={50} height={50} className='rounded-full' />
            <small>{userName}</small>
        </div>
    );
}

export default HeaderRight;
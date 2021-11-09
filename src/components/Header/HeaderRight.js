import Image from 'next/image';
import {Menu, Transition } from "@headlessui/react";

const HeaderRight = ({
    userName = 'Kevin Coveña'
}) => {
    return (
        <div className='md:flex flex-col justify-center items-center hidden'>
            <Image src='https://picsum.photos/200' width={50} height={50} className='rounded-full' />
            <small>{userName}</small>
        </div>
    );
}

export default HeaderRight;
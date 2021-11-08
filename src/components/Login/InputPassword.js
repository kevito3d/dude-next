import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useState } from 'react';

const TextPassword = ({
    name = 'input',
    text = 'Input'
}) => {

    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    }

    return (
        <div className="flex justify-center  my-5 w-full relative">
            <label className="font-medium text-2xl pr-4 text-green-600" htmlFor={name}>{text}</label>
            <input className="border focus:outline-none focus:border-green-600 rounded-md pl-3 w-52" id={name} name={name} type={show ? 'text' : 'password'} required />

            <div className='-ml-8 mt-2'>
                {
                    show ?
                        <AiFillEyeInvisible className='cursor-pointer' onClick={handleShow} />
                        :
                        <AiFillEye className='cursor-pointer' onClick={handleShow} />
                }

            </div>

        </div>
    );
}

export default TextPassword;
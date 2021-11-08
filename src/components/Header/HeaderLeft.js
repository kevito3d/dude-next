import Logo from 'assets/img/logo.png';
import Image from 'next/image';

const HeaderLeft = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex items-end mr-16'>
                <Image src={`${Logo.src}`} height={65} width={65} />
                <h3>Dude</h3>
            </div>

            <div className='flex items-end'>
                <ul className='flex'>
                    <li>Preguntas</li>
                    <li>Areas</li>
                    <li>Ranking</li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderLeft;
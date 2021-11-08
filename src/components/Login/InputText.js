const TextInput = ({
    name = 'input',
    text = 'Input'
}) => {
    return (
        <div className="flex justify-center  my-5 w-full">
            <label className="font-medium text-2xl pr-4 text-green-600" htmlFor={name}>{text}</label>
            <input className="border focus:outline-none focus:border-green-600 rounded-md pl-3 w-52" id={name} name={name} type='text' required />
        </div>
    );
}

export default TextInput;
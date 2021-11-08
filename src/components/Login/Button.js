const Button = ({
    text = 'Button',
    loading = false
}) => {

    return (
        loading ?
            <div className="w-16 h-16 rounded-full border-l-2 border-r-2 animate-spin border-green-700  mb-2"></div>
            :
            <button type="submit" className="bg-green-500 font-medium text-3xl rounded-xl p-2 text-white mb-2">{text}</button>
    );

}

export default Button;
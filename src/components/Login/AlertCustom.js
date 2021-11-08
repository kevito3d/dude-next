const AlertCustom = ({
    menssage,
    onClick
}) => {
    return (
        <div className="flex p-2 rounded-md bg-red-200 w-full justify-around">
            <div className="text_alert">
                <strong>Hey !</strong> {menssage}
            </div>
            <button onClick={onClick} type="button">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
}

export default AlertCustom;
import { useState } from "react";

const Login = () => {
    const [loading, setLoading] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(!loading);
    };
    const [mensaje, setMensaje] = useState(true);
    const close = () => {
        setMensaje(false);
    };
    
    return (
        <div className="w-full h-screen flex flex-col items-center ">
            <label className="font-bold text-5xl text-green-900 mt-28 mb-5">Dude App</label>
            <form id="form-signin" className="w-3/5"  onSubmit={handleSubmit}>
                <div className="bg-gray-100 p-8 shadow-md border rounded-md">
                    <div className="flex flex-col items-center ">
                        <div className="pb-4">
                            <label className="font-bold text-3xl text-green-700">Iniciar Secion</label>


                        </div>
                        {
                            mensaje && <div id="alert" className="flex p-2 rounded-md bg-red-200 w-full justify-around">
                            <div className="text_alert">
                                <strong>Hey !</strong> Tu usuario/email y/o contraseña son
                                incorrecta(s)
                            </div>
                            <button
                                onClick={close}
                                type="button"
                                className="close"
                                data-dismiss="alert"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        }
                        

                        <div className="flex justify-center  my-5 w-full">
                            <label className="font-medium text-2xl pr-4 text-green-600" for="username">Usuario</label>
                            <input className="border focus:outline-none focus:border-green-600 rounded-md pl-3 w-52" id="username" name="user " type="text" required />
                        </div>
                        <div className="flex justify-center my-5 w-full">
                            <label className="font-medium text-2xl pr-4 text-green-600" for="password">Contraseña</label>
                            <input className="border focus:outline-none focus:border-green-600 rounded-md pl-3 w-52" id="password" name="pass " type="password" required />
                        </div>
                        {
                            loading ?
                                <div className="w-16 h-16 rounded-full border-l-2 border-r-2 animate-spin border-green-700  mb-2">

                                </div>
                                :
                                <button  id="login"  type="submit" className="bg-green-500 font-medium text-3xl rounded-xl p-2 text-white mb-2">ENTRAR</button>
                        }
                        <div id="spinner" className="content">
                            <div className="spinner"></div>
                        </div>
                        <a className="createA" href="/signup">no tengo cuenta, registrarme</a>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;
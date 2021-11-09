import TextInput from "components/Login/InputText";
import TextPassword from "components/Login/InputPassword";
import AlertCustom from 'components/Login/AlertCustom';
import Button from "components/Login/Button";
import {host} from "../app.config"

import { useState } from "react";

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [visibleAlert, setVisibleAlert] = useState(false);
    const [data, setData] = useState({});

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: [e.target.value]
        })
    }


    const handleSubmit =async (e) => {
        console.log(data.user);
        console.log(host);
        console.log(data.password);
        e.preventDefault();
        setVisibleAlert(false)
        setLoading(true);
        const resultado = await fetch(`${host}/auth/signin`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode:'cors',
            body:JSON.stringify(
                {
                user: data.user[0],
                password: data.password[0]
                }
            )
        });
        console.log("Asd")
        const resultado_ = await resultado.json();
        console.log(resultado_.error)
        
        if(resultado_.error!=null ){
            setVisibleAlert(true);
            setLoading(false);
           
        }else{
            window.location.replace("/ranking")
            setLoading(false);
        }
        
    };
    const handleClose = () => {
        setVisibleAlert(false);
    };

    return (
        <div className="w-full h-screen flex flex-col items-center ">
            <label className="font-bold text-5xl text-green-900 mt-28 mb-5">Dude App</label>
            <form id="form-signin" className="w-3/5" onSubmit={handleSubmit}>
                <div className="bg-gray-100 p-8 shadow-md border rounded-md">
                    <div className="flex flex-col items-center ">
                        <div className="pb-4">
                            <label className="font-bold text-3xl text-green-700">Iniciar Secion</label>


                        </div>

                        {visibleAlert &&
                            <AlertCustom
                                menssage='Tu usuario/email y/o contraseña sonincorrecta(s)'
                                onClick={handleClose}
                            />}


                        <TextInput onChange={handleChange} value={data.user || ''} text='Usuario' name='user' />
                        <TextPassword onChange={handleChange} value={data.password || ''} text='Contraseña' name='password' />

                        <Button loading={loading} text='ENTRAR' />

                        <a className="text-gray-600" href="/signup">no tengo cuenta, registrarme</a>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;
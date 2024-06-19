import React, { useState } from 'react'
import axios from 'axios'

const urlInicioSesion = "https://127.0.0.1/auth/login";

export const HookLogin = () => {

    const [loginUser, setLoginUser] = useState(false);

    const [dataUser, setDataUser] = useState({
        usuario: "",
        nombre: "",
        correo: ""
    });

    const setLocalStorageLog = (value) => {
        try {
            window.localStorage.setItem('xinfodatax', value);
            location.reload();
        } catch (err) {
            console.log(err.message);
        }
    }

    const setUserId = (value) => {
        try {
            window.localStorage.setItem('ixuserappinfo', JSON.stringify(value));
        } catch (err) {
            console.log(err.message);
        }
    }

    const iniciarSesion = async (usuario, contrasena) => {
        const dataLoginUser = {
            usuario,
            contrasena
        };

        try {
            const response = await axios.post(urlInicioSesion, dataLoginUser);
            const data = (await response).data;
            console.log(data);

            if (data.response_code == 0) {
                setLocalStorageLog(data.info_user);
                setUserId(data.user_id);
                window.location.href = "http://localhost:5173/employees";
            } else {
                document.getElementById("msgerror").removeAttribute("hidden");
            }
        } catch (error) {
            console.log(error);

            /*if (axios.isAxiosError(error)) {
                const { response } = error;
                const { data } = response;
            } else {
                console.log("Error Inesperado")
            }*/
        }
    }

    return {
        //propiedades
        loginUser,
        //metodos
        iniciarSesion
    }
}

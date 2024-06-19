import React, { useState } from 'react'
import { HookLogin } from './HookLogin'

export const HookLoginHelper = () => {

    const { loginUser, iniciarSesion } = HookLogin();

    const [dataForm, setDataForm] = useState({
        usuario: "",
        contrasena: ""
    })

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setDataForm({ ...dataForm, [name]: value });
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        iniciarSesion(dataForm.usuario, dataForm.contrasena);
    }

    return {
        //propiedades
        dataForm,
        loginUser,
        //metodos
        changeHandler, 
        submitHandler
    }
}

import React, { useState } from 'react'
import axios from 'axios'

export const HookCreateUser = (endPoint) => {
    const [dataForm, setDataForm] = useState({});
    const [token, setToken] = useState(window.localStorage.getItem('xinfodatax'));
    
    const changeHandler = (event) => {
        const { name, value } = event.target; 
        setDataForm({ ...dataForm, [name]: value })
    }

    const changeHandlerImg = (event) =>{
        const imagen = event.target.files[0];
        setDataForm({ ...dataForm, imagen: imagen });
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        try {
            const result = await axios.post(endPoint, dataForm);
            const data = (await result).data;
            
            if (data.response_code == 0){
                document.getElementById("msok").removeAttribute("hidden");
            } else if (data.response_code == 404){
                document.getElementById("msgpass").removeAttribute("hidden");
                document.getElementById("msgtextwar").innerText = "Lo sentimos, "+data.message;
            } else {
                document.getElementById("msgerror").removeAttribute("hidden");
                document.getElementById("msgtext").innerText = "Lo sentimos, "+data;
            }
        } catch (error) {
            console.log(error);
            document.getElementById("msgtext").innerText = "Existe un error al crear tu usuario, por favor intentar en unos minutos.";
            document.getElementById("msgerror").removeAttribute("hidden");
                        
            if (axios.isAxiosError(error)) {
                const { response } = error;
                //const { data } = response;
            } else {
                console.log("Error desconocido")
            }
        }
    }
    
    const submitHandlerImg = async (event) => {
        event.preventDefault();
        try {
            const result = await axios.post(endPoint, dataForm, {headers: {"Content-Type": "multipart/form-data"}});
            const data = (await result).data;
            
            if (data.response_code == 0){
                document.getElementById("msok").removeAttribute("hidden");
            } else if (data.response_code == 404){
                document.getElementById("msgpass").removeAttribute("hidden");
                document.getElementById("msgtextwar").innerText = "Lo sentimos, "+data.message;
            } else {
                document.getElementById("msgerror").removeAttribute("hidden");
                document.getElementById("msgtext").innerText = "Lo sentimos, "+data.message;
            }
        } catch (error) {
            console.log(error);
            document.getElementById("msgtext").innerText = "Existe un error al crear tu usuario, por favor intentar en unos minutos.";
            document.getElementById("msgerror").removeAttribute("hidden");
                        
            if (axios.isAxiosError(error)) {
                const { response } = error;
                const { data } = response;
            } else {
                console.log("Error desconocido")
            }
        }
    }

    return {
        //propiedades

        //metodos
        changeHandler,
        submitHandler, 
        submitHandlerImg, 
        changeHandlerImg
    }
}

import React, { useEffect, useState } from 'react';
import { HookCreateUser } from '../Hooks/HookCreateUser';
import logo from '../assets/img/logo.png'; // with import
import '../assets/css/style.css';
 
export const CreateUser = () => {
    const { changeHandler, submitHandler, changeHandlerImg, submitHandlerImg } = HookCreateUser("https://127.0.0.1/user/create");
    const [required, setRequired] = useState(true);
    const [spanusu, setSpanusu] = useState("hidden");
    const [spannombre, setSpannombre] = useState("hidden");
    const [spancorreo, setSpancorreo] = useState("hidden");
    const [spanclave, setSpanclave] = useState("hidden");

    const atras = () => {
        setRequired(false);
        window.location.href = "http://localhost:5173";
    };

    return (
        <>
            <div className='container col-sm-4 col-md-4 col-lg-4 mt-5' id='main' >
                <div className='text-center'>
                    <img src={logo} className='img-fluid' alt="" height={100} width={250} /> 
                </div>
                <div id="msok" className='mb-4' hidden>
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                        <span style={{fontSize: "15px"}}><strong>Felicidades!, </strong> Tu usuario ha sido creado exitosamente. &nbsp;<a href="http://localhost:5173/">Haz click aqui</a></span>
                        <button type="button" className="btn-close font-size-10" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
                <div id="msgerror" className='mb-4' hidden>
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <span><strong>Error!</strong> <span id="msgtext" style={{fontSize: "15px"}}></span> </span>
                        <button type="button" className="btn-close font-size-10" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
                <div id="msgpass" className='mb-4' hidden>
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        <span><strong>Alerta!</strong> <span id="msgtextwar" style={{fontSize: "15px"}}></span> </span>
                        <button type="button" className="btn-close font-size-10" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
                <div className="card ">
                    <div className="card-header text-center" style={{ background: "#5cff000f" }}>En unos segundos serás parte de nuestra red, vamos a crear tu usuario.</div>
                    <div className="card-body">
                        <form onSubmit={submitHandlerImg} >
                            <div className='mb-3'>
                                <label className="form-label">Nombre Usuario</label>
                                <input name="usuario" type='text' className="form-control" onChange={changeHandler} minLength={5} maxLength={15} required={{ required }} />
                                <div id="usuarioHelp" className="form-text error-input" hidden>Debe de ingresar un nombre de usuario válido entre 5 y 15 caracteres</div>
                            </div>
                            <div className='mb-3'>
                                <label className="form-label">Nombre completo</label>
                                <input name="nombre_completo" type='text' className="form-control" onChange={changeHandler} minLength={12} maxLength={55} required={{ required }} />
                                <div id="nombreHelp" className="form-text error-input" hidden >Debe de ingresar su nombre completo </div>
                            </div>
                            <div className='mb-3'>
                                <label className="form-label">Correo</label>
                                <input name="correo" type='email' className="form-control" onChange={changeHandler} minLength={10} maxLength={45} required={{ required }} />
                                <div id="correoHelp" className="form-text error-input" hidden >Debe de ingresar un correo válido </div>
                            </div>
                            <div className='mb-3'>
                                <label className="form-label">Contraseña</label>
                                <input name="contrasena" type='password' className="form-control" onChange={changeHandler} minLength={5} maxLength={15} required={{ required }} />
                                <div id="contrasenaHelp" className="form-text error-input" hidden >Debe de ingresar una contraseña entre 5 y 15 caracteres de longitud</div>
                            </div>
                            <div className='mb-3'>
                                <label className="form-label">Imagen</label>
                                <input name="imagen" type='file' className="form-control" onChange={changeHandlerImg} />
                            </div>
                            <div className='text-center'>
                                <button type='button' className='btn btn-outline-secondary' onClick={atras} >Regresar</button>&nbsp;&nbsp;
                                <button className='btn btn-outline-primary'>Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

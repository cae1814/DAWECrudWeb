import { HookLoginHelper } from '../Hooks/HookLoginHelper';
import logo from '../assets/img/logo.png'; // with import
import '../assets/css/style.css';

export const LoginUser = () => {

    window.localStorage.removeItem('xinfodatax');
    const {changeHandler, submitHandler } = HookLoginHelper();

    return (
        <>
            <div className='container col-sm-4 col-md-4 col-lg-4 mt-5' id='main' >
                <div className='text-center'>
                    <img src={logo} className='img-fluid' alt="" height={100} width={250} /> 
                </div>
                <div id="msgerror" className='mb-4' hidden>
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <span><strong>Error!</strong> El usuario o la clave ingresados son incorrectos.</span>
                        <button type="button" className="btn-close font-size-10" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
                <div className="card ">
                    <div className="card-header text-center" style={{background: "#60d9f9" , color: "#ffff"}}>Autenticación</div>
                        <div className="card-body">
                            <form onSubmit={submitHandler} >
                                <div className='mb-3'>
                                    <input onChange={changeHandler} name="usuario" type='text' className="form-control" placeholder='Usuario' />
                                    <span className="error-input spusuario text-start" hidden>Debe de ingresar un usuario válido</span>
                                </div>
                                <div className='mb-3'>
                                    <input onChange={changeHandler} name="contrasena" type='password' className="form-control" placeholder='Contraseña' />
                                    <span className="error-input spclave text-start" hidden>Ingresa una contraseña</span>
                                </div>
                                <button type='submit' className='btn btn-primary w-100 mb-3' id="btonSubmit"> &nbsp;&nbsp;Iniciar Sesión</button>
                                <p>¿No tienes cuenta? &nbsp;<a href="http://localhost:5173/create">Haz click aqui</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </>
    )
}
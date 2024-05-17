import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/style.css";
import { HookToEmployees } from "../Hooks/HookToEmployees";

export const Employees = () => {
  const { dataForm, resultado, changeHandler, submitHandler } = HookToEmployees();
  const [dataUrl, setDataUrl] = useState([]);
  
  const load = () => {
    cargarData();
  }

  const cargarData = async () => {
    const url = `http://127.0.0.1:3000/employees`;
    const result = await axios.get(url);
    const resultData = await result;
    setDataUrl(resultData.data);
  }

  useEffect(() => {
    cargarData();
  }, []);

  return (
    <>
      <div className="mt-2 ml-4">
        <nav className="nav nav-pills nav-fill">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/employees">Employees</a>
            </li>
            <li className="nav-item"><a className="nav-link" href="/departments">Departments</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/managers">Managers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/salaries">Salaries</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/titles">Titles</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/deptoManagers">DeptoManagers</a>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <section className="container mt-4 mb-1 show" id="crud1">
          <div className="text-start" id="employees">
            <h5>Create Employees</h5>
          </div>
          <div className="border pt-3 px-3 col-sm-9 col-md-9 col-lg-9 form" style={{ paddingright: "7px" }} >
            <form onSubmit={submitHandler}>
              <div className="row col-sm-12 col-md-12 col-lg-12">
                <div className="mb-3 col-sm-4 col-md-4 col-lg-4">
                  <input type="text" className="form-control" name="nombres" id="nombres" aria-labelledby="emailHelp" placeholder="Nombres" onChange={changeHandler}/>
                </div>
                <div className="mb-3 col-sm-4 col-md-4 col-lg-4">
                  <input type="text" className="form-control" name="apellidos" id="apellidos" aria-labelledby="emailHelp" placeholder="Apellidos" onChange={changeHandler} />
                </div>
                <div className="mb-3 col-sm-4 col-md-4 col-lg-4">
                  <input type="text" className="form-control" name="dni" id="dni" aria-labelledby="emailHelp" placeholder="DNI" onChange={changeHandler}/>
                </div>
              </div>
              <div className="row col-sm-12 col-md-12 col-lg-12">
                <div className="mb-3 col-sm-4 col-md-4 col-lg-4">
                  <input type="date" className="form-control" name="fecha_nacimiento" id="fecha_nacimiento" aria-labelledby="emailHelp" placeholder="Fecha Nacimiento" onChange={changeHandler}/>
                </div>
                <div className="mb-3 col-sm-4 col-md-4 col-lg-4">
                  <select className="form-select" name="genero" id="genero" aria-label="Default select example" onChange={changeHandler}>
                    <option defaultValue>Genero</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                  </select>
                </div>
              </div>
              <div className="gap-2 mb-3">
                <button type="submit" className="btn btn-primary">Guardar </button>
              </div>
              </form>
            <div className="hidden" id="alertok">
              <div className="alert alert-success gap-2 mb-3" role="alert">Insert successfully into database.</div>
            </div>
            <div className="hidden" id="alertnok">
              <div className="alert alert-danger" role="alert">Insert failed, please check your app logs.</div>
              <br></br>
            </div>
          </div>
          <br></br>
          <div className="text-start" id="listemployees">
            <div className="mb-2 row col-sm-6 col-md-6 col-lg-6">
              <div className="col-sm-3 col-md-3 col-lg-3">
                <h5>List Employees</h5>
              </div>
              <div className="col-sm-1 col-md-2 col-lg-1">
                <button type="button" className="btn btn-success" id="refresh" onClick={load}> Refrescar </button>
              </div>
            </div>
          </div>
          <div className="border pt-3 px-3 col-sm-9 col-md-9 col-lg-9 form2">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nombres</th>
                  <th scope="col">Apellidos</th>
                  <th scope="col">DNI</th>
                  <th scope="col">Fecha Nac.</th>
                  <th scope="col">Genero</th>
                  <th scope="col">Estado</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {dataUrl.map((item) => (
                  <tr key={item.id}>
                    <th scope="row"> {item.id} </th>
                    <td> {item.nombres} </td>
                    <td> {item.apellidos} </td>
                    <td> {item.dni} </td>
                    <td> {item.fecha_nacimiento} </td>
                    <td> {item.genero} </td>
                    <td> {item.estado} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
};

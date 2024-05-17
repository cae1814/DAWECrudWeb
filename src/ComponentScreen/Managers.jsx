import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/style.css";
import { HookToManagers } from "../Hooks/HookToManagers";

export const Managers = () => {
  const { dataForm, resultado, changeHandler, submitHandler } = HookToManagers();

  const [dataUrl, setDataUrl] = useState([]);
  const [dataUrlEmp, setDataUrlEmp] = useState([]);

  const cargarData = async () => {
    const url = `http://127.0.0.1:3000/managers`;
    const result = await axios.get(url);
    console.log(result);
    const resultData = await result;
    setDataUrl(resultData.data);
  };

  const cargarDataEmp = async () => {
    const urlEmp = `http://127.0.0.1:3000/employees`;
    const resultEmp = await axios.get(urlEmp);
    const resultDataEmp = await resultEmp;
    setDataUrlEmp(resultDataEmp.data);
  };

  const load = () => {
    cargarData();
  }

  useEffect(() => {
    cargarData();
    cargarDataEmp();
  }, []);

  return (
    <>
      <div className="mt-2 ml-4">
        <nav className="nav nav-pills nav-fill">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link" href="/">
              Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/employees">
                Employees
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/departments">
                Departments
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/managers">
                Managers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/salaries">
                Salaries
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/titles">
                Titles
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/deptoManagers">
                DeptoManagers
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <section className="container mt-4 mb-1 show" id="crud1">
          <div className="text-start" id="employees">
            <h5>Create Managers</h5>
          </div>
          <div
            className="border pt-3 px-3 col-sm-9 col-md-9 col-lg-9 form"
            style={{ paddingright: "7px" }}
          >
            <form onSubmit={submitHandler}>
              <div className="row col-sm-12 col-md-12 col-lg-12">
                <div className="mb-3 col-sm-4 col-md-4 col-lg-4">
                  <select className="form-select" aria-label="Default select example" name="id_employee" id="id_employee" onChange={changeHandler}>
                    <option defaultValue disabled>Employees</option>
                    {dataUrlEmp.map((item) => (
                    <option key={item.id} value={item.id}>{item.nombres} {item.apellidos}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3 col-sm-3 col-md-3 col-lg-3">
                  <input type="date" className="form-control" id="desde" name="desde" aria-labelledby="emailHelp" placeholder="Desde" onChange={changeHandler}/>
                </div>
                <div className="mb-3 col-sm-3 col-md-3 col-lg-3">
                  <input type="date" className="form-control" id="hasta" name="hasta" aria-labelledby="emailHelp" placeholder="Hasta" onChange={changeHandler} />
                </div>
              </div>
              <div className="gap-2 mb-3">
                <button type="submit" className="btn btn-primary">
                  Guardar
                </button>
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
                <h5>List Managers</h5>
              </div>
              <div className="col-sm-2 col-md-2 col-lg-2">
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
                  <th scope="col">Desde</th>
                  <th scope="col">Hasta</th>
                  <th scope="col">Creado por</th>
                  <th scope="col">Creaci&oacute;n</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {dataUrl.map((item) => (
                  <tr key={item.id}>
                    <th scope="row"> {item.id} </th>
                    <td> {item.nombres} </td>
                    <td> {item.apellidos} </td>
                    <td> {item.desde} </td>
                    <td> {item.hasta} </td>
                    <td> {item.creado_por} </td>
                    <td> {item.fecha_creacion} </td>
                    <td><button type="button" className="btn btn-danger" onClick={(item.id)}>Delete</button></td>
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

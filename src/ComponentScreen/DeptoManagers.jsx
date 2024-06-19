import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/style.css";
import { HookToDeptoManagers } from "../Hooks/HookToDeptoManagers";

export const DeptoManagers = () => {
  const { dataForm, resultado, changeHandler, submitHandler } = HookToDeptoManagers();

  const [dataUrl, setDataUrl] = useState([]);
  const [dataUrlEmp, setDataUrlEmp] = useState([]);
  const [dataUrlDep, setDataUrlDep] = useState([]);
  const logInfo = window.localStorage.getItem('xinfodatax');

  const cargarData = async () => {
    const url = `https://127.0.0.1/deptoManagers`;
    const result = await axios.get(url, {headers: {'Authorization': `Bear ${logInfo}`}});
    const resultData = await result;
    setDataUrl(resultData.data);
  };

  const cargarDataEmp = async () => {
    const urlEmp = `https://127.0.0.1/employees`;
    const resultEmp = await axios.get(urlEmp, {headers: {'Authorization': `Bear ${logInfo}`}});
    const resultDataEmp = await resultEmp;
    setDataUrlEmp(resultDataEmp.data);
  };

  const cargarDataDep = async () => {
    const urlDep = `https://127.0.0.1/departments`;
    const resultDep = await axios.get(urlDep, {headers: {'Authorization': `Bear ${logInfo}`}});
    const resultDataDep = await resultDep;
    setDataUrlDep(resultDataDep.data);
  };

  const load = () => {
    cargarData();
  }
  
  useEffect(() => {
    cargarData();
    cargarDataEmp();
    cargarDataDep();
  }, []);

  return (
    <>
      <div className="mt-2 ml-4">
        <nav className="nav nav-pills nav-fill">
          <ul className="nav nav-pills">
              <li className="nav-item">
                <a className="nav-link" href="/"><i className='fa fa-home' style={{ fontSize: "19px" }}></i>&nbsp;Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/employees"><i className='fa fa-users' style={{ fontSize: "19px" }}></i>&nbsp;Employees</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/departments"><i className='fa fa-cogs' style={{ fontSize: "19px" }}></i>&nbsp;Departments</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/managers"><i className='fa fa-suitcase' style={{ fontSize: "19px" }}></i>&nbsp;Managers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/salaries"><i className='fa fa-money' style={{ fontSize: "19px" }}></i>&nbsp;Salaries</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/titles"><i className='fa fa-graduation-cap' style={{ fontSize: "19px" }}></i>&nbsp;Titles</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/deptoManagers"><i className='fa fa-sitemap' style={{ fontSize: "19px" }}></i>&nbsp;DeptoManagers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login"><i className='fa fa-sign-out' style={{ fontSize: "19px" }}></i>&nbsp;Signout</a>
              </li>
          </ul>
        </nav>
      </div>
      <div>
        <section className="container mt-4 mb-1 show" id="crud1">
          <div className="text-start" id="employees">
            <h5><i className='fa fa-plus-circle' style={{ fontSize: "19px", color: "green" }}></i>&nbsp;Create DeptoManagers</h5>
          </div>
          <div
            className="border pt-3 px-3 col-sm-9 col-md-9 col-lg-9 form"
            style={{ paddingright: "7px" }}
          >
            <form onSubmit={submitHandler}>
              <div className="row col-sm-12 col-md-12 col-lg-12">
                <div className="mb-3 col-sm-3 col-md-3 col-lg-3">
                  <select
                    className="form-select" aria-label="Default select example" name="id_employee" id="id_employee" onChange={changeHandler}>
                    <option defaultValue disabled>Employees</option>
                    {dataUrlEmp.map((item) => (
                    <option key={item.id} value={item.id}>{item.nombres} {item.apellidos}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3 col-sm-3 col-md-3 col-lg-3">
                  <select className="form-select" aria-label="Default select example" name="id_departments" id="id_departments" onChange={changeHandler}>
                    <option defaultValue disabled>Departaments</option>
                    {dataUrlDep.map((item) => (
                    <option key={item.id} value={item.id}>{item.nombre}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-2 col-sm-2 col-md-2 col-lg-2">
                  <input
                    type="date"
                    className="form-control"
                    name="desde" id="desde"
                    aria-labelledby="emailHelp"
                    placeholder="Desde" onChange={changeHandler}
                  />
                </div>
                <div className="mb-2 col-sm-2 col-md-2 col-lg-2">
                  <input
                    type="date"
                    className="form-control"
                    name="hasta" id="hasta"
                    aria-labelledby="emailHelp"
                    placeholder="Hasta" onChange={changeHandler}
                  />
                </div>
              </div>
              <div className="gap-2 mb-3">
                <button type="submit" className="btn btn-primary btn-sm"><i className='fa fa-check-square' style={{ fontSize: "16px"}}></i>&nbsp;Save</button>
              </div>
              </form>
            <div className="hidden" id="alertok">
              <div className="alert alert-success gap-2 mb-3" role="alert"><i className='fa fa-check-circle' style={{ fontSize: "19px" }}></i>&nbsp;Insert successfully into database.</div>
            </div>
            <div className="hidden" id="alertnok">
              <div className="alert alert-danger" role="alert"><i className='fa fa-times' style={{ fontSize: "19px" }}></i>&nbsp;Insert failed, please check your app logs.</div>
              <br></br>
            </div>
          </div>
          <br></br>
          <div className="text-start" id="listemployees">
            <div className="mb-2 row col-sm-6 col-md-6 col-lg-6">
              <div className="col-sm-4 col-md-4 col-lg-4">
                <h5>List DeptoManagers</h5>
              </div>
              <div className="col-sm-2 col-md-2 col-lg-2">
                <button type="button" className="btn btn-success btn-sm" id="refresh" onClick={load}><i className='fa fa-refresh' style={{ fontSize: "16px"}}></i>&nbsp;Refresh </button>
              </div>
            </div>
          </div>
          <div className="border pt-3 px-3 col-sm-9 col-md-9 col-lg-9 form2">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Nombres</th>
                  <th scope="col">Apellidos</th>
                  <th scope="col">Desde</th>
                  <th scope="col">Hasta</th>
                  <th scope="col">Creado por</th>
                  <th scope="col">Creaci&oacute;n</th>
                </tr>
              </thead>
              <tbody>
                {dataUrl.map((item) => (
                  <tr key={item.id}>
                    <th scope="row"> {item.id} </th>
                    <td> {item.nombre} </td>
                    <td> {item.nombres} </td>
                    <td> {item.apellidos} </td>
                    <td> {item.desde} </td>
                    <td> {item.hasta} </td>
                    <td> {item.creado_por} </td>
                    <td> {item.fecha_creacion} </td>
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

import { useState } from 'react'
import { Employees } from './ComponentScreen/Employees';
import {Departments} from './ComponentScreen/Departments';
import { Managers } from './ComponentScreen/Managers';
import { Salaries } from './ComponentScreen/Salaries';
import { Titles } from './ComponentScreen/Titles';
import { DeptoManagers } from './ComponentScreen/DeptoManagers';
import {LoginUser} from './ComponentScreen/Login';
import {CreateUser} from './ComponentScreen/CreateUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App = () => {
  const [logInfo, setlogInfo] = useState(window.localStorage.getItem('xinfodatax'));
  const [isLog, setIsLog] = useState(logInfo ? true : false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {isLog ? <Route path='/' element={<Employees/>}  /> : <Route path='/' element={<LoginUser />} />}
          {isLog ? <Route path='/employees' element={<Employees/>}  /> : <Route path='/' element={<LoginUser />} />}
          {isLog ? <Route path='/departments' element={<Departments/>}  /> : <Route path='/' element={<LoginUser />} />}
          {isLog ? <Route path='/managers' element={<Managers/>}  /> : <Route path='/' element={<LoginUser />} />}
          {isLog ? <Route path='/salaries' element={<Salaries/>}  /> : <Route path='/' element={<LoginUser />} />}
          {isLog ? <Route path='/titles' element={<Titles/>}  /> : <Route path='/' element={<LoginUser />} />}
          {isLog ? <Route path='/deptoManagers' element={<DeptoManagers/>}  /> : <Route path='/' element={<LoginUser />} />}
          <Route path='/create' element={<CreateUser/>}  />
          <Route path='*' element={<LoginUser/>}  />
        </Routes>
      </BrowserRouter>
    </>
  )
}


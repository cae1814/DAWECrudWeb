import { Employees } from './ComponentScreen/Employees'
import {Departments} from './ComponentScreen/Departments'
import { Managers } from './ComponentScreen/Managers'
import { Salaries } from './ComponentScreen/Salaries'
import { Titles } from './ComponentScreen/Titles'
import { DeptoManagers } from './ComponentScreen/DeptoManagers'
import {ErrorPage} from './ComponentScreen/ErrorPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Employees/>}  />
          <Route path='/employees' element={<Employees/>}  />
          <Route path='/departments' element={<Departments/>}  />
          <Route path='/managers' element={<Managers/>}  />
          <Route path='/salaries' element={<Salaries/>}  />
          <Route path='/titles' element={<Titles/>}  />
          <Route path='/deptoManagers' element={<DeptoManagers/>}  />
          <Route path='*' element={<ErrorPage/>}  />
        </Routes>
      </BrowserRouter>
    </>
  )
}


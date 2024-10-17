import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Organization, RegionUser } from '../pages'
import CapitalUser from '../pages/CapitalUser'
import OrganizationMore from '../pages/OrganizationMore'
import OrganizationAdd from '../pages/OrganizationAdd'

function CustomRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Organization/>} />
        <Route path='/add' element={<OrganizationAdd/>} />
        <Route path='/:id' element={<OrganizationMore/>} />
        <Route path='/capital-users' element={<CapitalUser/>} />
        <Route path='/region-users' element={<RegionUser/>} />

    </Routes>
  )
}

export default CustomRoutes

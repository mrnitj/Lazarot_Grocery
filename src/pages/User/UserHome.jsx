import { Box, styled } from '@mui/material'
import React from 'react'
import NavbarComp from '../../components/root/NavbarComp'


const Maincontainer = styled(Box)(({theme})=>({

}))

const UserHome = () => {
  return (
    <Maincontainer>
      <NavbarComp/>
    </Maincontainer>
  )
}

export default UserHome
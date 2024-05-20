import React from 'react'

import { Box, Typography, styled } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const MainContainer = styled(Box)(({theme})=>({}))
const SubContainer = styled(Box)(({theme})=>({
    width:'100%',
    display:'flex',
    justifyContent:'space-between'    ,
    alignItems:'center'
}))
const Total = styled(Box)(({theme})=>({}))
const TotalItem = styled(Typography)(({theme})=>({
    fontWeight:700,
    fontSize:'17px'
}))
const TotalPrice = styled(Typography)(({theme})=>({
    fontWeight:700,
    fontSize:'17px'
}))
const Buttons = styled (Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    gap:'1rem'
}))

const CartTotal = () => {
    const theme = useTheme()
  return (
    <MainContainer>
        <SubContainer>
            <Total>
                <TotalItem>Total Item : 3</TotalItem>
                <TotalPrice>Total Price : $55</TotalPrice>
            </Total>
            <Buttons>
                <button style={{padding:'.4rem 1rem', fontSize:'17px',color:`${theme.palette.primary.contrastText}`, background:'transparent', border:'1px solid grey', cursor:'pointer'}}>clear cart</button>
                <button style={{padding:'.4rem 1rem', fontSize:'17px',color:`${theme.palette.primary.contrastText}`, background:'transparent', border:'1px solid grey', cursor:'pointer'}}>continue</button>
            </Buttons>
        </SubContainer>
    </MainContainer>
  )
}

export default CartTotal
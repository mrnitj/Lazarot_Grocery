import { createTheme } from "@mui/material";

export const lightTheme = createTheme ({
    palette: {
        mode :'light',
        primary: {
            main: '#0D0D0D', 
        },
         
        
      
    }
})

export const darkTheme = createTheme ({
    palette:{
        mode:'dark',
        primary: {
            main: '#FFFFFF',
        },
    
        
    }
})
import React from "react";
import LoginDialog from "./account/login";
import { AppBar ,Toolbar,styled,Box, } from '@mui/material'
import ChatDialog from "./chat/chatDiolog";
import { useContext } from "react";
import { AccountContext } from "../context/AccountPr";

const Component= styled(Box)`
height:100vh;
background:#DCDCDC;`

const Header=styled(AppBar)`
height:120px;
background-color:blue;
box-shadow:none;
`
const LoginHeader=styled(AppBar)`
height:250px;
background-color:BLUE;
box-shadow:none;
`

const Messanger =()=>{
    const {account}=useContext(AccountContext)
    return(
        <Component>
        {
            account? <>
            <Header>
            <Toolbar>
                
            </Toolbar>
        </Header>
        <ChatDialog/>
            </>:
            <>
            <LoginHeader>
            <Toolbar>
                
            </Toolbar>
        </LoginHeader>
           <LoginDialog/>
            </>
        }
       
        </Component>
    )
}
export default Messanger;
import React  from "react";
import { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import Conversations from "./Conversations";
import {Box} from '@mui/material'
const Menu=()=>{
const [text,setText]=useState('');
    return(
        <Box>
            <Header/>
            <Search setText={setText}/>
            <Conversations text={text}/>
        </Box>
    )
}
export default Menu
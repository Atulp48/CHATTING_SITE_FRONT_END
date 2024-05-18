import React from "react";
import { Dialog, Box, styled } from '@mui/material'
import Menu from "./menu/menu";
import EmptyChat from "./chat/EmptyChat";
import ChatBox from "./chat/Chatbox";
import { AccountContext } from "../../context/AccountPr";
import { useContext } from "react";

const Component = styled(Box)`
display:flex`

const LeftComponent = styled(Box)`
min-width:445px`

const RightComponent = styled(Box)`
width:73%;
min-width:300px;
heigh:100%;
border-left:1px solid rgba(0,0,0,0.16)`

const dialogStyle = {
    height: '90%',
    width: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden'
}

const ChatDialog = () => {

    const { person } = useContext(AccountContext);

    return (
        <Dialog
            open={true}
            PaperProps={{ sx: dialogStyle }}
            hideBackdrop={true}
            maxWidth={'md'}
        >
            <Component>
                <LeftComponent>
                    <Menu />
                </LeftComponent>
                <RightComponent>
                    {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
                </RightComponent>
            </Component>
        </Dialog>
    )
}
export default ChatDialog
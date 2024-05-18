import { Box } from '@mui/material'
import ChatHeader from './ChatHeader';
import Messages from './Message';
import { useContext } from 'react';
import { AccountContext } from '../../../context/AccountPr';
import { useEffect } from 'react';
import { useState } from 'react';
import { getConversation } from '../../../service/api';

const ChatBox = () => {

    const { person,account } = useContext(AccountContext)

    const [conversation,setConversation]=useState({});

    useEffect(() => {
        const getConversationDetails = async () => {
          let data=  await getConversation({ senderId:account.sub, receiverId:person.sub})
          setConversation(data);
        }
        getConversationDetails();
    }, [account.sub, person.sub]);

    return (
        <Box style={{ height: '75%' }}>
            <ChatHeader person={person} />
            <Messages person={person} conversation={conversation} />
        </Box>
    )
}
export default ChatBox;
import { createContext, useState,useRef ,useEffect} from 'react';
import { io } from 'socket.io-client'

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {

    const [account, setAccount] = useState();
    const [person, setPerson] = useState({});
    const [activeUsers,setActiveUsers]=useState()
    const [newMessageFlag, setNewMessageFlag] = useState(false)

    const socket=useRef();

    const REACT_APP_URL_SOCKET="https://web-message-back.onrender.com/"
    // const REACT_APP_URL_SOCKET="ws://web-message-back.onrender.com"

    useEffect(() => {
        socket.current = io(REACT_APP_URL_SOCKET);
    }, [])

    return (
        <AccountContext.Provider value={{
            account,
            setAccount,
            person,
            setPerson,
            socket,
            activeUsers,
            setActiveUsers,
            newMessageFlag,
            setNewMessageFlag
        }}>
            {children}
        </AccountContext.Provider>
    )
}
export default AccountProvider;
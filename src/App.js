import Messanger from './components/messanger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import AccountProvider from './context/AccountPr';
const clientId='696152680213-7u5vhnlndh9sqt81eutcka095ef5df2f.apps.googleusercontent.com'
console.log("hello world")

function App() {
  return (<GoogleOAuthProvider clientId={clientId}>
  <AccountProvider>
  <Messanger/>
  </AccountProvider>
   </GoogleOAuthProvider>
  );
}

export default App;

import { Dialog, Typography, List, ListItem, Box, styled } from '@mui/material';
import { useContext } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { qrCodeImage } from '../../../src/constant/data'
import jwt_decode from 'jwt-decode'
import { AccountContext } from '../../context/AccountPr';
import { addUser } from '../../service/api';
const Component = styled(Box)`
    display: flex; 
`;

const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`;

const QRCOde = styled('img')({
    margin: '50px 0 0 50px',
    height: 264,
    width: 264,
    borderRadius:150
});

const Title = styled(Typography)`
    font-size: 26px;
    margin-bottom: 25px;
    color: #525252;
    font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;
    font-weight: 300;
`;

const StyledList = styled(List)`
    &  > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`;

const dialogStyle = {
    marginTop: '12%',
    height: '95%',
    width: '60%',
    maxWidth: '100',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden'
}

const LoginDialog = () => {

    const {setAccount}=useContext(AccountContext)

    const onLoginSuccess = async (res) => {
      const decode= jwt_decode(res.credential)
      console.log(decode)
      setAccount(decode)
      addUser(decode)
    };

    const onLoginFailure = (res) => {
console.log('login failed',res)
    };
    return (
        <Dialog
            open={true}
            BackdropProps={{style: {backgroundColor: 'unset'}}}
            maxWidth={'md'}
            PaperProps={{ sx: dialogStyle }}
            hideBackdrop={true}
        >
            <Component>
                <Container>
                    <Title>To start conversion with your friend</Title>
                    <StyledList>
                        <ListItem>1. open your pc browser</ListItem>
                        <ListItem>2.  ligin with your gmail account</ListItem>
                        <ListItem>3. authenticate with your gmail account</ListItem>
                    </StyledList>
                </Container>
                <Box style={{position:'relative'}}>
                    <QRCOde src={qrCodeImage} alt="" />
                    <Box style={{position: 'absolute', top: '50%', transform: 'translateX(25%) translateY(-25%)'}}>
                            <GoogleLogin
                                buttonText=""
                                onSuccess={onLoginSuccess}
                                onError={onLoginFailure}
                            />
                    </Box>
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog;
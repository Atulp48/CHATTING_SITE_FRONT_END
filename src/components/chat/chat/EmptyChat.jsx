import React from "react";
import {emptyChatImage} from '../../../constant/data'
import { Box ,styled} from "@mui/system";
import { Typography, } from "@mui/material";

const Component = styled(Box)`
    background: #f8f9fa;
    padding: 30px 0;
    text-align: center;
    height: 100%;
`;

const Container = styled(Box)`
    padding: 0 200px;
`;
    
const Image = styled('img')({
    marginTop: 100,
    width: 400
})
const SubTitle = styled(Typography)`
    font-size: 14px;
    color: #667781;
    font-weight: 400;
    font-family: inherit;
`;

const EmptyChat=()=>{
    return(
<>
<Component>
            <Container>
                <Image src={emptyChatImage} alt="empty" />
                <SubTitle>Now send and receive messages with gmail login</SubTitle>
            </Container>
        </Component>

 </>
    )
}
export default EmptyChat;
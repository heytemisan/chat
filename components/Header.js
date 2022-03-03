import styled from 'styled-components'
import { Avatar, IconButton } from "@material-ui/core";
import FiberNewIcon from '@mui/icons-material/FiberNew';
import ChatIcon from '@mui/icons-material/Chat';
//reusable aspect of our app.

function HeaderSection() {
    return (
            <Header>
                <UserAvater />
                <Text>
                    Terry Restuarant
                </Text>
                <IconsContainer>
                    <FiberNewIcon style={{ color: 'white', cursor: 'pointer'}}/> 
                    <IconButton>
                        <ChatIcon style={{color:'white'}}/>
                    </IconButton>
                </IconsContainer>
            </Header>
    )
}

export default HeaderSection;

const Header = styled.div`
    display:flex;
    position: sticky;
    background: #DB1E3D;
    z-index: 1;
    justify-content:space-between;
    padding:10px;
    align-items: center;
    border-bottom:1px solid whitesmoke;
`;
const UserAvater = styled(Avatar)`
    background-color: rgb(39 39 42);
    cursor:pointer;
    :hover {
        opacity: 0.8;
    }
`;
const IconsContainer = styled.div`
    display:flex;
    align-items:center;
`;

const Text = styled.h1`
    color: white;
    font-size: 2vw;
    text-align:center;
`;

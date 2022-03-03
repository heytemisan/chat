import styled from 'styled-components'
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
//reusable aspect of our app.

function Sidebar() {
    return (
        <Container>
            <Header>
                <UserAvater />
                <IconsContainer>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <MoreVertIcon/>
                </IconsContainer>
            </Header>
        </Container>
    )
}

export default Sidebar;

const Container = styled.div``;
const Header = styled.div`
    display:flex;
    position: sticky;
    background: #155165;
    z-index: 1;
    justify-content:space-between;
    width:50%;
    margin: auto;
    padding:10px;
    align-items: center;
    border-bottom:1px solid whitesmoke;
`;
const UserAvater = styled(Avatar)`
    background-color: rgb(39 39 42);
    cursor:pointer;
`;
const IconsContainer = styled.div`
    display:flex;
    align-items:center;
`;

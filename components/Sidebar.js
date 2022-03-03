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
const Header = styled.div``;
const UserAvater = styled(Avatar)``;
const IconsContainer = styled.div``;

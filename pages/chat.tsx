import styled from 'styled-components'
import { Avatar, IconButton } from "@material-ui/core";
import HeaderSection from '../components/Header'
//reusable aspect of our app.

function Chat() {
    return (
            <HeaderSection/>
    )
}

export default Chat;

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
    :hover {
        opacity: 0.8;
    }
`;
const IconsContainer = styled.div`
    display:flex;
    align-items:center;
`

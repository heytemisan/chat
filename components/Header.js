import styled from 'styled-components'
import { Avatar, IconButton } from "@material-ui/core";
import FiberNewIcon from '@mui/icons-material/FiberNew';
import ChatIcon from '@mui/icons-material/Chat';
import * as EmailValidator from 'email-validator'
import {auth, db}from '../firebase.js'
import { addDoc, collection } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
//reusable aspect of our app.


function HeaderSection() {

    const [user] = useAuthState(auth);

    const createChat = () => {
        const input = prompt('Please enter an email address for the user you wish to chat with');
        //secure input from validation errors
        if (!input) return null;
        //check if email is valid or email exist
        if (EmailValidator.validate(input)) {
            //we need to add the chat into the Db 'chats' collection
            const c = collection(db, 'chats');
            addDoc( //addDoc auth generates an id for the user
                c, {
                    users: [user.email, input]
            })
            alert('new chat created!')
        }
    }
    return (
            <Header>
            <UserAvater onClick={() => {
                confirm("log out")&&auth.signOut()
            }}/>
                <Text>
                    Terry Restuarant
                </Text>
                <IconsContainer>
                    <FiberNewIcon onClick={createChat} style={{ color: 'white', cursor: 'pointer'}}/> 
                    <IconButton>
                        <ChatIcon style={{color:'white'}} />
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

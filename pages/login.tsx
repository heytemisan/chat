import Head from 'next/head';
import React from 'react'
import styled from 'styled-components';
import LogoImg from '../img/talking.png'
import Image from 'next/image'
import { auth, provider } from '../firebase';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";


function login() {
    const signIn = () => {
        signInWithPopup(auth, provider).then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;
        }).catch((error) => {
            
        });
    }

    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>
            <LoginContainer>
                <Logo style={{ }}>
                    <Image src={LogoImg} alt="logo"/>
                </Logo> 
                <Button onClick={signIn}>Sign in with google</Button>
            </LoginContainer>
        </Container>
    )
}

export default login;

const Container = styled.div`
    display: grid;
    place-items: center;
    height:100vh;
`;
const LoginContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding: 100px;
    background-color: #DB1E3D;
    border-radius:20px;
    box-shadow: 0px 4px 14px -3px rgba(0,0, 0,0.7);
`;
const Logo = styled.div`
    margin-bottom: 10px;
    height: 200px;
    width: 200px;
`;

const Button = styled.div`
    border: 1px solid black;
    padding:10px;
    border-radius:10px;
    text-align:center;
    cursor: pointer;
    background:white;

    &:hover {
        background: #50E1CC;
        transition: 2s ease-in-out;
    }
`


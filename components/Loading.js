import LogoImg from '../img/talking.png'
import Image from 'next/image'
import styled from 'styled-components';

function Loading() {
    return (
        <Loader>
            <AvatarContainer>
                <Image src={LogoImg} alt="logo" />
            </AvatarContainer>
        </Loader>
    )
}

export default Loading;

const Loader = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin:auto;
    margin-top:90px;
    width:100%;
`

const AvatarContainer = styled.div`
    margin-top:30px;
    width:300px;
`
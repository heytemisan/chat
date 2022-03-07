import LogoImg from '../img/talking.png'
import Image from 'next/image'
import { Circle } from 'better-react-spinkit';
import Classes from './Loading.module.css'

function Loading() {
    return (
        <div className={Classes.loader}>
            <div className={Classes.imgContainer}>
                <Image src={LogoImg} alt="logo" />
            </div>
            <Circle color="#DB1E3D" size={60}/>
        </div>
    )
}

export default Loading;

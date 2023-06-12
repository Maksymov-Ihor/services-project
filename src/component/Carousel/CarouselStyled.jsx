import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const CaryselWrapp = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
`

const Window = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
`

const Box1 = styled.div`
    min-width: 100%;
    max-width: 100%;
    display: flex;
`

const Box2 = styled.div`
    min-width: 100%;
    max-width: 100%;
    background-color: blue;
    display: flex;
`

const Img = styled.img`
    width: 100%;
`

const ArrowLeft = styled(AiOutlineArrowLeft)`
    position: absolute;
    left: 45%;
    bottom: 20px;
    transform: translate(-50%);
    z-index: 1;
    fill: red;
`

const ArrowRight = styled(AiOutlineArrowRight)`
    position: absolute;
    right: 45%;
    bottom: 20px;
    transform: translate(-50%);
    z-index: 1;
    fill: red;
`

export {
    CaryselWrapp,
    Window,
    Box1,
    Box2,
    Img,
    ArrowLeft,
    ArrowRight
}
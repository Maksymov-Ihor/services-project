import { useState } from 'react';

import {
    CaryselWrapp,
    Window,
    Box1,
    Box2,
    Img,
    ArrowLeft,
    ArrowRight
} from './CarouselStyled';

const Carousel = ({image}) => {

    const [offset, setOffset] = useState(0)

    const handleLeft = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + 250;
            return Math.min(newOffset, 0);
        })
    }

    const handleRight = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - 250;
            return Math.max(newOffset, -500);
        })
    }

    return (
        <CaryselWrapp>
            <ArrowLeft onClick={handleLeft} />
            <Window>
                <Box1 style={{ transform: `translateX(${offset}px)` }}><Img src={ image } alt='qwe' /></Box1>
                {/* <Box2 style={{transform: `translateX(${offset}px)`}}></Box2> */}
            </Window>
            <ArrowRight onClick={handleRight} />
        </CaryselWrapp>
    )
}

export default Carousel;

{/* <Img src={ image } alt='qwe' /> */}
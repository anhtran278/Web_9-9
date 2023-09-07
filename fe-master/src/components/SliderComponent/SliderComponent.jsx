import { Image } from 'antd';
import React , { useEffect, useState } from 'react'
import { WrapperSliderStyle } from './style';
import './slider.css'

const SliderComponent = ({ arrImages }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: windowWidth <= 769 ? 1 : 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    
    return (
        <WrapperSliderStyle className='slide' {...settings}>
            {arrImages.map((image) => {
                return (
                    <div className='img' key={image}>
                        <div className="imageDefault">
                            <Image src={image.src} alt="slider" preview={false} style={{objectFit:'cover'}} width="100%" height="300px" />
                        </div>
                        <div className="imageHover">
                            <Image src={image.hoverSrc} alt="slider-hover" preview={false} style={{objectFit:'cover'}} width="100%" height="300px" />
                        </div>
                        <div className="slider-caption">
                            <h2 className='title_slider'>{image.title}</h2>
                            <p className='price_slider'>{image.price}</p>
                        </div>
                    </div>
                );
            })}
        </WrapperSliderStyle>
    );
}


export default SliderComponent
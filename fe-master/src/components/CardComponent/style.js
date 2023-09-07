import { Card } from "antd";
import styled from "styled-components";



export const WrapperCardStyle = styled(Card)`
    width: 568px;
    margin: 0 5px 50px 5px;
    position: relative;
    
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    & img {
        height: 709px;
        width: auto;
        object-fit: cover;
    },
    &::hover {
    ${'' /* background-image: url(${props => props.hoverImage || ''}); */}
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
    }
    @media screen and (max-width: 769px) {
        margin: 0 5px 50px 40px;
    }
    @media screen and (max-width: 379px) {
        width: 370px;
        margin: -10px 20px 50px -60px;
    & img {
        height: 450px;
        width: auto;
    }
    }
`

export const StyleNameProduct = styled.div`
    color:#212121;
    font-family: Caslon Bold;
    font-size:16px;
    font-weight:500;
    letter-spacing:1px;
    line-height:19.25px;
    padding:0px 0px 10px;
    text-align:center;
    text-transform:uppercase;
`

export const WrapperPriceText = styled.div`
    font-family: News Gothic No 2;
    color:#212121;
    font-size:14px;
    font-weight:400;
    letter-spacing:1px;
    line-height:16.5px;
    text-align:center;
    text-transform:uppercase;
    margin-top:10px;
`
export const WrapperReportText = styled.div`
    font-size: 11px;
    color: rgb(128, 128, 137);
    display: flex;
    align-items: center;
    margin: 6px 0 0px;
`






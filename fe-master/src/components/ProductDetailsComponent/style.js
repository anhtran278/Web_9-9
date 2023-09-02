import { Col, Image, InputNumber } from "antd";
import styled from "styled-components";

export const Article = styled.article`
    display: flex;
    justify-content: space-around;
    width: 100%;
`

export const Section1 = styled.section`
    margin: 50px 20px 0 -40px;
    border-top: 1px solid;
    width: 20%;
    h1{
    font-family: Caslon Bold;
    font-style: italic;
    font-size: 28px;
    font-weight: 100;
    width: 100%;
    margin-top: 25px;
    }       
    h2{
    font-family: Caslon Bold;
    font-size: 25px;
    font-weight:400;
    line-height: 30px;
    margin: 0px 0 10px 0;
    }
    h3{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 100;
    font-size: 16px;
    width: 70%;
    margin: 0;
    }
    .small-img{
    width: 100%;
    margin-top: 30px;
    }
    .small-img img{
    width: 30%;
    margin: 2px 2px;
    cursor: pointer;
    }
    .bt input{
        margin: 6px 0;
        padding: 11px 0;
        width: 17%;
    }
    .bt button{
        padding: 10px 0;
        width: 50%;
        padding: 12px 0;
        font-size: 12px;
        margin-left: 20px;
        outline: none;
        background-color: #021d49;
        color: #FFFFFF;
    }

    .bt h4{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 15px;
        font-weight: 200;
    }
`

export const Section2 = styled.section`
    width: 48%;
    margin-top: 50px;

    img{
    width: 100%;
    margin-top: 30px;
    }
`

export const Section3 = styled.section`
    margin: 50px -35px 0 0px;
    width: 20%;
    border-top: 1px solid;
    div{
    font-family: 'News Cycle', sans-serif;
    font-size: 17px;
    width: 100%;
    text-align: left;
    margin-bottom: 20px;
    margin-top: 25px;
    }

`
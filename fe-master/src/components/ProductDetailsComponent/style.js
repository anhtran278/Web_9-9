import styled from "styled-components";

export const Article = styled.article`
    display: flex;
    justify-content: space-around;
    width: 100%;
    @media screen and (max-width: 769px) {
        justify-content: space-between;
        padding-bottom: 100px;
        border-bottom: 1px solid grey;
    }
    @media screen and (max-width: 379px) {
        flex-direction: column-reverse;
    }
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
    margin: 2px 8px 8px 0px;
    cursor: pointer;
    }
    .bt input{
        margin: 6px 0;
        text-align: center;
        padding: 11px 0;
        width: auto;
        height: 45px;

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
    .description_2{
        display: none;
    }
    @media screen and (max-width: 769px) {
        margin-left: 10px ;
        border-top: 1px solid;
        width: 40%;
        h1{
        font-size: 25px;
        }       
        h2{
        font-family: Caslon Bold;
        font-size: 22px;
        }
        h3{
        font-size: 13px;
        }
        .bt{
            flex-direction: column;
        }
        .bt button{
            margin-left: 20px;
        }
        .description_2{
            display: block;
            padding-top: 20px;
        }
        .small-img{
            display: none;
        }
    }
    @media screen and (max-width: 379px){
        width: 90%;
        border:none;
        margin-top: 15px;
        h1{
            display:none;
        }
        .description_2{
            padding-top: 20px;
        }
    }
`

export const Section3 = styled.section`
    margin: 50px -35px 0 0px;
    width: 20%;
    border-top: 1px solid;
    .description_1{
    font-family: 'News Cycle', sans-serif;
    font-size: 17px;
    width: 100%;
    text-align: left;
    margin-bottom: 20px;
    margin-top: 25px;
    }
    @media screen and (max-width:769px) {
        display:none;
    }
`

export const Section2 = styled.section`
    width: 48%;
    margin-top: 50px;

    img{
    width: 100%;
    margin-top: 30px;
    }
    h1{
    display:none;
    font-family: Caslon Bold;
    font-style: italic;
    font-size: 28px;
    font-weight: 100;
    width: 100%;
    margin-top: 25px;
    }
    .small-img{
    display:none;
    width: 100%;
    margin-top: 30px;
    }
    .small-img img{
    width: 30%;
    margin: 2px 8px 8px 0px;
    cursor: pointer;
    }
    @media screen and (max-width: 769px) {
        width: 60%;
        padding-left: 10px;
        .small-img {
            display: block
        }
    }
    @media screen and (max-width: 379px) {
        width: 100%;
        h1{
            display: block;
        }
        img{
            width: 100%;
            margin-top: 0px;
        }
    }
`



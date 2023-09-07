import styled from "styled-components";

export const Article = styled.article`
    display: flex;
    justify-content: space-around;
    width: 100%;
    @media screen and (max-width: 769px) {
        justify-content: space-between;
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
    margin: 2px 2px;
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
        margin-left: 20px ;
        border-top: 1px solid;
        width: 50%;
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
            display: block
        }
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
    @media screen and (max-width: 769px) {
        width: 50%;
        margin-top: 50px;
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



export const NewLetter = styled.div`
    display: flex;
    height: 300px;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    background-repeat: no-repeat;
    background-position: 20% 30%;
    background-color: #000;
    font-family: 'Poppins', sans-serif;
    padding: 40px 150px;

    h4 {
        font-size: 40px;
        font-weight: 700;
        color: #088178;
        padding-bottom: 10px;
    }

    p {
        font-size: 20px;
        font-weight: 600;
        color: rgb(47, 47, 47);
    }

    p span {
        color: rgba(189, 131, 57, 0.93);
    }

    .form {
        display: flex;
        width: 35%;
    }

    .form input {
        height: 6.3rem;
        padding: 1.75rem;
        font-size: 14px;
        width: 100%;
        border: 1px solid transparent;
        outline: none;
        border-radius: 5px;
        border-radius: 5px 0 0 5px;
    }

    .form button {
        background-color: #088178;
        color: #fff;
        font-size: 15px;
        white-space: nowrap;
        padding: 0 4rem;
        border-radius: 0 5px 5px 0;
        border: none;
        cursor: pointer;
        white-space: 10px;
        transition: all 0.35s ease;
    }

    button:hover {
        background-color: #055f59;
    }
    @media screen and (max-width: 769px) {
    margin-top:100px;
    margin-left:-50px;
    margin-right:-50px;
    padding: 40px 150px;
    width: 100%;
    height: 300px;
    justify-content: space-between;
    align-items: center;
    background-repeat: no-repeat;
    background-position: 20% 30%;
    background-color: #000;
    font-family: 'Poppins', sans-serif;
    h4{
        font-size: 30px;
        font-weight: 700;
        color: #088178;
        padding-bottom: 10px;
    }
    p{
        font-size: 20px;
        font-weight: 600;
        color: rgb(47, 47, 47);
    }
    p span{
        color: rgba(189, 131, 57, 0.93);
    }
    .form{
        display: flex;
        width: 100%;
    }
    input{
        height: 6.3rem;
        padding: 1.75rem;
        font-size: 14px;
        width: 100%;
        border: 1px solid transparent;
        outline: none;
        border-radius: 5px;
        border-radius:  5px 0 0 5px;
    } 
    button{
        background-color: #088178;
        color: #fff;
        font-size: 15px;
        white-space: nowrap;
        padding: 0 3rem;
        border-radius: 0 5px 5px 0;
        border: none;
        cursor: pointer;
        white-space: 10px;
        transition: all 0.35s ease;
    }
    button:hover{
        background-color: #055f59;
    }
    }
    @media screen and (max-width: 379px) {
    padding: 20px 10px;
    width: 100%;
    height: 300px;
    justify-content: space-between;
    align-items: center;
    background-repeat: no-repeat;
    background-position: 40% 20%;
    h4{
        font-size: 30px;
        font-weight: 700;
        color: #088178;
        padding-bottom: 10px;
    }
    p{
        font-size: 18px;
        font-weight: 600;
        color: rgb(47, 47, 47);
    }
    p span{
        color: rgba(189, 131, 57, 0.93);
    }
    .form{
        display: flex;
        width: 100%;
    }
    input{
        height: 6.3rem;
        padding: 1.75rem;
        font-size: 14px;
        width: 100%;
        border: 1px solid transparent;
        outline: none;
        border-radius: 5px;
        border-radius:  5px 0 0 5px;
    } 
    button{
        background-color: #088178;
        color: #fff;
        font-size: 15px;
        white-space: nowrap;
        padding: 0 3rem;
        border-radius: 0 5px 5px 0;
        border: none;
        cursor: pointer;
        white-space: 10px;
        transition: all 0.35s ease;
    }
    button:hover{
        background-color: #055f59;
    }
    }
`
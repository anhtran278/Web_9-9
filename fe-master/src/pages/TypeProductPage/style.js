import { Col } from "antd"
import styled from "styled-components"

export const WrapperProducts = styled.div`
    display: flex;
    gap: 11px;
    margin-top:20px;
    flex-wrap: wrap;
    @media screen and (max-width: 379px){
        margin-left: -13px;
    }
`

export const WrapperNavbar = styled(Col)`
    background: #fff; 
    margin-right: 10px;
    padding: 10px;
    border-radius: 4px;
    height: fit-content;
    margin-top:20px;
    width: 200px;
`

export const PageHeader = styled.div`
    width: 100%;
    height: 40vh;
    background-size: cover;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    padding: 14px;
    align-self: center;
    background-repeat: no-repeat;
    margin-top: 50px;
    h1{
    font-size: 60px;
    color: #fff;
    font-family: 'Times New Roman', Times, serif;
    font-style: italic;
    letter-spacing: 5px;
    }
    p{
        padding: 10px;
        font-size: 25px;
        color: #fff;
        font-style: italic;
        font-weight: 500;
    }
    @media screen and (max-width: 379px) {
        height: 30vh;
        h1{
            font-size: 40px;
        }
        p{
            font-size: 15px;
        }
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
    .section_p1 {
    padding: 40px 150px;
    }

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
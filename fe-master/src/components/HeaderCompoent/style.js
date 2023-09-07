import styled from "styled-components";


export const WrapperContentPopup = styled.p`
    cursor: pointer;
    &:hover {
        color: rgb(26, 148, 255);
    }
`

export const Header = styled.header`
    margin: 0 80px;
    @media screen and ( max-width: 769px ) {
        margin: 20px 50px;
    }

    @media screen and ( max-width: 376px ) {
        margin: 10px 30px;
    }
`;

export const HelpLogin = styled.div`
    padding: 15px;
`;


export const HeaderTop = styled.div`
    display: flex;
    justify-content: flex-end;
    border-bottom: #3d4752 1px solid;
    padding: 10px 0;
    
`;

export const HeaderItemsList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: flex-end;
    font-size:16px;
`;

export const HeaderLink = styled.a`
    color: #3d4752;
    text-decoration: none;
    font-weight: 700;
    transition: 0.35s all ease;
    padding: 0 10px;
    &:hover {
    color: #0ba49a;
    }
`;

export const SignIn = styled.a`
    color: #3d4752;
    text-decoration: none;
    font-weight: 700;
    transition: 0.35s all ease;
    padding-left: 15px;
    &:hover {
    color: #0ba49a;
    }
`;

export const HeaderMid = styled.div`
    display: flex;
    align-items: flex-start;
    margin: 30px 0 45px 0px;
    #open{
        display:none;
    }
    @media screen and (max-width:769px){
        #open{
        display: block;
        position: absolute;
        font-size: 23px;
        }
        .searchBox{
        position: absolute;
        top: 225px;
        left: 280px;
        font-size: 1px
        }
        .searchButton{
        right: 0px;
        font-size: 15px;
        }
    }
    @media screen and (max-width:376px){
        #open{
        display: block;
        position: absolute;
        font-size: 18px;
        }
        .searchBox{
        position: absolute;
        top: 200px;
        left: 110px;
        }
        .searchButton{
        right: 0px;
        font-size: 15px;
        }
    }
`;

export const NgonNgu = styled.div`
    margin-right: 45%;
    @media screen and (max-width:769px) {
        display:none
    }
    
`;

export const HeaderMidImage = styled.img`
    height: 100px;
    margin-bottom: 30px;
    display: block;
    @media screen and (max-width:769px) {
        position: relative;
        display: block;
        margin: 0 290px;
    }
    @media screen and (max-width:376px) {
        position: relative;
        height: 70px;
        display: block;
        margin: 0 130px;
    }
`;

export const NgonNgu2 = styled.div`
    display: none;
    @media screen and (max-width: 769px) {
        display: block;
        margin: 30px 20px;
    }
    @media screen and (max-width: 376px) {
        display: block;
        margin: 30px 20px;
    }
`;

export const HeaderBottom = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: #222 1px solid;
    padding-bottom: 30px;
    #menu{
        display: flex;
    }
    #menu li{
        list-style: none;
        padding: 0 20px;
    }
    #menu li a{
        text-decoration: none;
        color: #222;
        padding: 5px;
        position: relative;
        font-size: 17px;
        font-weight: 400;
        color: #1a1a1a;
        transition: all 0.3 ease;
        
        &:hover{
            color: #1a1a1a;
        }
        &::before {
            content: "";
            height: 2px;
            width: 0;
            background-color: #088178;
            position: absolute;
            bottom: 0;
            left: 0;
            transition: 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        
        &:hover::before {
            width: 100%;
        }
    }
    #close{
        display:none;
    }
    
    @media screen and (max-width: 769px) {
        #menu{
            padding: 50px 0 0 0 ;
            position: fixed;
            top: 0;
            left: -100%;
            width: 350px;
            height: 100vh;
            background-color: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            box-shadow: 2px 0 5px -2px #888;
            border-left: 7px solid #055f59dd;
            z-index: 100000;
            transition: all 0.35s ease-in-out;
        }
        #menu.active{
            left: 0px;
        }
        #menu li{
            border-bottom: 1px solid grey;
            padding: 15px;
        }
        #menu li a{
            margin-right: 100px;
            font-size: 17px;
            font-weight: 500;
        }
        #close{
                display: block;
                position: absolute;
                top: 20px;
                right: 20px;
                color: rgba(0, 0, 0, 0.527);
                font-size: 20px;
        }
        .shoppingOutLined{
        position: relative;
            bottom: 140px;
        }
    }
    @media screen and (max-width: 376px) {
        #menu{
            padding: 50px 0 0 0 ;
            position: fixed;
            top: 0;
            right: 100%;
            max-width: 290px;
            height: 100vh;
            background-color: #f2f2f2;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            box-shadow: 2px 0 5px -2px #888;
            border-left: 7px solid #055f59dd;
            z-index: 100000;
            transition: all 0.4s ease;
        }
        #menu.active{
            left: 0px;
        }
        #menu li{
            border-bottom: 1px solid grey;
            padding: 15px;
        }
        #menu li a{
            margin-right: 100px;
            font-size: 17px;
            font-weight: 500;
        }
        #close{
            display: block;
            position: absolute;
            top: 20px;
            right: 20px;
            color: rgba(0, 0, 0, 0.527);
            font-size: 20px;
        }
        .shoppingOutLined{
            position: relative;
            bottom: 115px;
        }
    }
    
`;








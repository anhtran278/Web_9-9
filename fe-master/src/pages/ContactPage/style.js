import styled from "styled-components";

export const Section = styled.div`

    @media screen and (max-width: 799px) {
        .section_p1{
            padding: 40px 30px;
        }
        #contact_details .details h2{
        font-size: 20px ;
        }
        #contact_details .details h3{
            font-size: 15px;
        }
        #contact_details .details div li p,
        #contact_details .details div li i{
            font-size: 13px;
        }
        #form_details{
            flex-direction: column;
            padding: 20px 30px;
            margin: 40px 40px ;
        }
        #form_details form{
            width: 100%;
            padding-bottom: 70px;
        }
        .people{
            flex-direction: wrap;
            margin: 0 auto;
        }
        #form_details form button{
            width: 100%;
        }
    }
    @media screen and (max-width: 379px) {
        #newsletter h4{
            font-size: 25px;
        }
        #newsletter{
            padding: 10px;
            text-align: center;
        }
        #contact_details{
        display: flex;
        flex-direction: column;
        }
        #contact_details .details{
            width: 100%;
            margin: -20px;
        }
        #contact_details .map {
            width: 100%;
            height: auto;
        }
        #form_details{
        margin: 0px;
        }
    }

`
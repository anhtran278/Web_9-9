import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperPriceText, } from './style'
// import { StarFilled } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { convertPrice } from '../../utils'



const CardComponent = (props) => {
    
    const {  image, name, price, id } = props
    const navigate = useNavigate()
    const handleDetailsProduct = (id) => {
        navigate(`/product-details/${id}`)
    }
    return (
        <WrapperCardStyle
            hoverable
            cover={<img alt="Product" src={image} />}
            hoverImage={props.hoverImage}
            onClick={() =>  handleDetailsProduct(id)}
        >
            <StyleNameProduct>{name}</StyleNameProduct>
            <WrapperPriceText>
                <span>{convertPrice(price)}</span>
            </WrapperPriceText>
        </WrapperCardStyle>
    )
}

export default CardComponent
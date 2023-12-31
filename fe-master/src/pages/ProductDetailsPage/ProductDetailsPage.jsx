import React from 'react'
import './reponsive.css'
import { useNavigate, useParams } from 'react-router-dom'
import ProductDetailsComponent from '../../components/ProductDetailsComponent/ProductDetailsComponent'

const ProductDetailsPage = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  return (
    <div className='homePage' style={{
      margin: '20px 5.1vw 40px 5.1vw',
      fontFamily:'Arial, Helvetica, sans-serif',
      fontSize: '18px'
    }}>
        <h5><span style={{cursor: 'pointer', fontWeight: 'bold'}} onClick={() => {navigate('/')}}>Home</span> / Product details</h5>
        <ProductDetailsComponent idProduct={id} />
    </div>
  )
}

export default ProductDetailsPage
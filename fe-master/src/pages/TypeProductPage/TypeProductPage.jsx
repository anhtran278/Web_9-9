import React, { Fragment } from 'react'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Col, Pagination, Row } from 'antd'
import {  WrapperProducts,PageHeader,NewLetter } from './style'
import { useLocation } from 'react-router-dom'
import * as ProductService from '../../services/ProductService'
import { useEffect } from 'react'
import { useState } from 'react'
import Loading from '../../components/LoadingComponent/Loading'
import { useSelector } from 'react-redux'
import { useDebounce } from '../../hooks/useDebounce'
import backgroundFooter from '../../assets/images/backgound2.jpg';
import backgroundHeader from '../../assets/images/book_background.jpg';

const TypeProductPage = () => {
    const searchProduct = useSelector((state) => state?.product?.search)
    const searchDebounce = useDebounce(searchProduct, 500)

    const { state}  = useLocation()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [panigate, setPanigate] = useState({
        page: 0,
        limit: 10,
        total: 1,
    })
    const fetchProductType = async (type, page, limit) => {
        setLoading(true)
        const res = await ProductService.getProductType(type, page, limit)
        if(res?.status == 'OK') {
            setLoading(false)
            setProducts(res?.data)
            setPanigate({...panigate, total: res?.totalPage})
        }else {
            setLoading(false)
        }
    }

    useEffect(() => {
        if(state){
            fetchProductType(state, panigate.page, panigate.limit)
        }
    }, [state,panigate.page, panigate.limit])


    const onChange = (current, pageSize) => {
        setPanigate({...panigate, page: current - 1, limit: pageSize})    
    }
    return (
    <>
        <PageHeader style={{backgroundImage: `url(${backgroundHeader})`}}>
            <h1>#add to cart</h1>
            <p>"Unlock Knowledge, Expand Your Mind - Buying Books is Investing in Your Intellect."</p>
        </PageHeader>
        <Loading isLoading={loading}>
            <div style={{margin: '50px 0 50px 80px',}}>
                <div style={{}}>
                    <Row style={{ }}>
                        
                        <Col span={24} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                            <WrapperProducts >
                                {products?.filter((pro) => {
                                    if(searchDebounce === '') {
                                        return pro
                                    }else if(pro?.name?.toLowerCase()?.includes(searchDebounce?.toLowerCase())) {
                                        return pro
                                    }
                                })?.map((product) => {
                                    return (
                                        <CardComponent
                                            key={product._id}
                                            countInStock={product.countInStock}
                                            description={product.description}
                                            image={product.image}
                                            name={product.name}
                                            price={product.price}
                                            rating={product.rating}
                                            type={product.type}
                                            selled={product.selled}
                                            discount={product.discount}
                                            id={product._id}
                                        />
                                    )
                                })}
                            </WrapperProducts>
                            <Pagination defaultCurrent={panigate.page + 1} total={panigate?.total} onChange={onChange} style={{ textAlign: 'center', marginTop: '20px' }} />
                        </Col>
                    </Row>
                </div>
            </div>
        </Loading>
        <NewLetter className="section_p1" style={{backgroundImage: `url(${backgroundFooter})`}}>
            <div className="newstext">
                <h4>Sign Up For Newsletters</h4>
                <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
            </div>
            <div className="form">
                <input type="text" placeholder="Your email address..."/>
                <button>Sign Up</button>
            </div>
    </NewLetter>
    </>
    )
}

export default TypeProductPage
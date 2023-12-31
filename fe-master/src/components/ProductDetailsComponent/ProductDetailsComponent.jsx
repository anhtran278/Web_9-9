    import React, { useState, useEffect } from 'react';
    import ButtonComponent from '../ButtonComponent/ButtonComponent';
    import * as ProductService from '../../services/ProductService';
    import { useQuery } from '@tanstack/react-query';
    import Loading from '../LoadingComponent/Loading';
    import { useDispatch, useSelector } from 'react-redux';
    import { useLocation, useNavigate } from 'react-router-dom';
    import { addOrderProduct } from '../../redux/slides/orderSlide';
    import pro_1 from '../../assets/images/product_details_5.webp'
    import pro_2 from '../../assets/images/product_details_2.webp'
    import pro_3 from '../../assets/images/product_details_3.webp'
    import pro_4 from '../../assets/images/product_details_1.webp'
    import pro_5 from '../../assets/images/product_details_4.webp'
    import { convertPrice } from '../../utils';
    import {
    Article,
    Section1,
    Section2,
    Section3,
    } from './style';

    const ProductDetailsComponent = ({ idProduct }) => {
    const [numProduct, setNumProduct] = useState(1);
    const user = useSelector((state) => state.user);
    const order = useSelector((state) => state.order);
    const [errorLimitOrder, setErrorLimitOrder] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const [currentImage, setCurrentImage] = useState('');
    const [stateProduct, setStateProduct] = useState({
        previewImages: [],
    });

    const fetchGetDetailsProduct = async (id) => {
        if (id) {
        const res = await ProductService.getDetailsProduct(id);
        const productData = res.data;

        // Check if productData.images is defined before mapping
        const previewImages = productData.images ? productData.images.map((image) => ({
            uid: image,
            name: image,
            status: 'done',
            url: image,
        })) : [];

        setStateProduct((prevState) => ({
            ...prevState,
            previewImages,
        }));

        return productData;
        }
    };

    useEffect(() => {
        if (idProduct) {
        fetchGetDetailsProduct(idProduct);
        }
    }, [idProduct]);

    const handleAddOrderProduct = () => {
        if (!user?.id) {
        navigate('/sign-in', { state: location?.pathname });
        } else {
        const orderRedux = order?.orderItems?.find((item) => item.product === productDetails?._id);
        if ((orderRedux?.amount + numProduct) <= orderRedux?.countInStock || (!orderRedux && productDetails?.countInStock > 0)) {
            dispatch(addOrderProduct({
            orderItem: {
                name: productDetails?.name,
                amount: numProduct,
                image: productDetails?.image,
                detailImg: productDetails?.detailImg,
                price: productDetails?.price,
                product: productDetails?._id,
                discount: productDetails?.discount,
                countInstock: productDetails?.countInStock,
            },
            }));
        } else {
            setErrorLimitOrder(true);
        }
        }
    };

    const handleSmallImageClick = (imageURL) => {
        setCurrentImage(imageURL);
    };


    const { isLoading, data: productDetails } = useQuery(['product-details', idProduct], () => fetchGetDetailsProduct(idProduct), { enabled: !!idProduct });

    return (
    <>
        <Loading isLoading={isLoading}>
        <Article>
            <Section1 style={{ fontSize: '15px' }}>
            <h1 style={{textTransform: 'uppercase'}}>{productDetails?.name}</h1>
            <h2>{convertPrice(productDetails?.price)} USD</h2>
            <h3>
                <b>Pay in 4 interest-free installments of</b>{' '}
                <b>
                {convertPrice(productDetails?.price / 4)} with{' '}
                <ins style={{ cursor: 'pointer' }}>Learn More</ins>
                </b>
            </h3>
            <div className="bt">
                <h4>Quantity: </h4>
                <input
                type="number"
                placeholder="1"
                value={numProduct}
                onChange={(e) => setNumProduct(Number(e.target.value))}
                min="1"
                max={productDetails?.countInStock}
                />
                <ButtonComponent
                styleButton={{
                    background: '#021d49',
                    height: '48px',
                    width: '150px',
                    border: 'none',
                    borderRadius: '4px',
                }}
                onClick={handleAddOrderProduct}
                textbutton={'ADD TO CART'}
                styleTextButton={{
                    color: '#fff',
                    fontSize: '15px',
                    fontWeight: '700',
                }}
                ></ButtonComponent>
                {errorLimitOrder && <div style={{ color: 'red' }}>Sold Out</div>}
                <div className="small-img">
                    <div className="small-img">
                        <img src={pro_1} className="smallimg" onClick={() => handleSmallImageClick(pro_1)} alt="" />
                        <img src={pro_2} className="smallimg" onClick={() => handleSmallImageClick(pro_2)} alt="" />
                        <img src={pro_3} className="smallimg" onClick={() => handleSmallImageClick(pro_3)} alt="" />
                        <img src={pro_4} className="smallimg" onClick={() => handleSmallImageClick(pro_4)} alt="" />
                        <img src={pro_5} className="smallimg" onClick={() => handleSmallImageClick(pro_5)} alt="" />
                    </div>
                </div>
            </div>
            <div className='description_2'>
                <i>{productDetails?.description}</i>
            </div>
            </Section1>

            <Section2>
            <h1 style={{textTransform: 'uppercase'}}>{productDetails?.name}</h1>
            <img src={currentImage || productDetails?.image} id="mainimg" alt=""/>
            <div className="small-img">
                <div className="small-img">
                    <img src={pro_1} className="smallimg" onClick={() => handleSmallImageClick(pro_1)} alt="" />
                    <img src={pro_2} className="smallimg" onClick={() => handleSmallImageClick(pro_2)} alt="" />
                    <img src={pro_3} className="smallimg" onClick={() => handleSmallImageClick(pro_3)} alt="" />
                    <img src={pro_4} className="smallimg" onClick={() => handleSmallImageClick(pro_4)} alt="" />
                    <img src={pro_5} className="smallimg" onClick={() => handleSmallImageClick(pro_5)} alt="" />
                </div>
            </div>
            </Section2>
            
            <Section3>
            <div className='description_1'>
                <i>{productDetails?.description}</i>
            </div>
            </Section3>
        </Article>
        </Loading>
    </>
    );
    };

    export default ProductDetailsComponent;

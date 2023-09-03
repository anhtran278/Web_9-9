    import React, { useState, useEffect } from 'react';
    import ButtonComponent from '../ButtonComponent/ButtonComponent';
    import * as ProductService from '../../services/ProductService';
    import { useQuery } from '@tanstack/react-query';
    import Loading from '../LoadingComponent/Loading';
    import { useDispatch, useSelector } from 'react-redux';
    import { useLocation, useNavigate } from 'react-router-dom';
    import { addOrderProduct } from '../../redux/slides/orderSlide';
    import { convertPrice } from '../../utils';
    import LikeButtonComponent from '../LikeButtonComponent/LikeButtonComponent';
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

    const handleThumbnailClick = (newImage) => {
        setCurrentImage(newImage);
    };

    const { isLoading, data: productDetails } = useQuery(['product-details', idProduct], () => fetchGetDetailsProduct(idProduct), { enabled: !!idProduct });

    return (
        <Loading isLoading={isLoading}>
        <Article>
            <Section1 style={{ fontSize: '15px' }}>
            <h1>{productDetails?.name}</h1>
            <h2>{convertPrice(productDetails?.price)} USD</h2>
            <h3>
                <b>Pay in 4 interest-free installments of</b>{' '}
                <b>
                {convertPrice(productDetails?.price / 4)} with{' '}
                <ins style={{ cursor: 'pointer' }}>Learn More</ins>
                </b>
            </h3>
            <LikeButtonComponent
                dataHref={
                process.env.REACT_APP_IS_LOCAL
                    ? 'https://developers.facebook.com/docs/plugins/'
                    : window.location.href
                }
            />
            <div className="bt">
                <h4>Quantity</h4>
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
                    width: '200px',
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
                {productDetails?.images &&
                    productDetails.images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        className="smallimg"
                        onClick={() => handleThumbnailClick(image)}
                        alt=""
                    />
                    ))}
                </div>
            </div>
            </Section1>

            <Section2>
            <img
                src={currentImage || productDetails?.image}
                id="mainimg"
                alt=""
            />
            </Section2>
            
            <Section3>
            <div>
                <i>{productDetails?.description}</i>
            </div>
            </Section3>
        </Article>
        </Loading>
    );
    };

    export default ProductDetailsComponent;

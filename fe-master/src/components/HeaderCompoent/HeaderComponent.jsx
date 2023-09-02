import { Badge, Button, Col, Popover } from 'antd'
import React from 'react'
import logo from '../../assets/images/BookShop_Flat_x360.webp'
import {
SearchOutlined,
UserOutlined,
ShoppingOutlined,
} from '@ant-design/icons';
import {
  Header,
  HeaderTop,
  HeaderLink,
  HeaderMid,
  NgonNgu,
  HeaderMidImage,
  SearchContainer,
  SearchBox,
  SearchSubmit,
  HeaderBottom,
  HeaderBottomList,
  HeaderBottomListItem,
  HeaderBottomLink,
  WrapperContentPopup,
  NgonNgu2,
  CloseButton,
  SignIn,
} from './style';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as UserService from '../../services/UserService'
import { resetUser } from '../../redux/slides/userSlide'
import { useState } from 'react';
import Loading from '../LoadingComponent/Loading';
import { useEffect } from 'react';
import { searchProduct } from '../../redux/slides/productSlide';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import ButttonInputSearch from '../ButtonInputSearch/ButttonInputSearch';

  const HeaderComponent = ({ isHiddenSearch = false, isHiddenCart = false }) => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [userName, setUserName] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [search,setSearch] = useState('')
  const [isOpenPopup, setIsOpenPopup] = useState(false)
  const order = useSelector((state) => state.order)
  const [loading, setLoading] = useState(false)
  const handleNavigateLogin = () => {
    navigate('/sign-in')
  }
  const handleNavigateSignUP = () => {
    navigate('/sign-up')
  }
  const handleNavigateHome = () => {
    navigate('/')
  }
  const handleNavigateBook = () => {
    navigate('/home')
  }
  const handleNavigateBlog = () => {
    navigate('/blog')
  }
  const handleNavigateContact = () => {
    navigate('/contact')
  }
  const handleNavigateAbout = () => {
    navigate('/about')
  }
  

  const handleLogout = async () => {
    setLoading(true)
    await UserService.logoutUser()
    dispatch(resetUser())
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    setUserName(user?.name)
    setUserAvatar(user?.avatar)
    setLoading(false)
  }, [user?.name, user?.avatar])

  const content = (
    <div>
      <WrapperContentPopup onClick={() => handleClickNavigate('profile')}>Thông tin người dùng</WrapperContentPopup>
      {user?.isAdmin && (

        <WrapperContentPopup onClick={() => handleClickNavigate('admin')}>Quản lí hệ thống</WrapperContentPopup>
      )}
      <WrapperContentPopup onClick={() => handleClickNavigate('my-order')}>Đơn hàng của tôi</WrapperContentPopup>
      <WrapperContentPopup onClick={() => handleClickNavigate('')}>Đăng xuất</WrapperContentPopup>
    </div>
  );

  const handleClickNavigate = (type) => {
    if(type === 'profile') {
      navigate('/profile-user')
    }else if(type === 'admin') {
      navigate('/system/admin')
    }else if(type === 'my-order') {
      navigate('/my-order',{ state : {
          id: user?.id,
          token : user?.access_token
        }
      })
    }else {
      handleLogout()
    }
    setIsOpenPopup(false)
  }

  const onSearch = (e) => {
    setSearch(e.target.value)
    dispatch(searchProduct(e.target.value))
  }

  return (
    <Header>
        <Loading isLoading={loading}>
        <HeaderTop style={{ justifyContent: isHiddenSearch && isHiddenSearch }}>
        {userAvatar ? (
                <img src={userAvatar} alt="avatar" style={{height: '30px',width: '30px',borderRadius: '50%',objectFit: 'cover'}} />
              ):(
                <UserOutlined style={{ fontSize: '18px', marginRight: '5px', alignItems:'baseline' }} />
              )}
        {user?.access_token ?(
        <>
        <Popover content={content} trigger="click" open={isOpenPopup}>
          <div style={{ cursor: 'pointer',maxWidth: 1000, overflow: 'hidden', textOverflow: 'ellipsis' }} onClick={() => setIsOpenPopup((prev) => !prev)}>{userName?.length ? userName : user?.email}</div>
        </Popover>
        </>
        ):(
          <div>
            <HeaderLink>Help</HeaderLink>
          <span>|</span>
            <HeaderLink onClick={handleNavigateLogin}>Log In</HeaderLink>
          <span>|</span>
            <SignIn onClick={handleNavigateSignUP}>Sign Up</SignIn>
          </div>
        )}
      </HeaderTop>
        </Loading>
      <HeaderMid>
        <i id="open" className="fa-solid fa-bars"></i>
        <NgonNgu>
          <select name="" id="">
            <option value="">VN</option>
            <option value="">EN</option>
          </select>
        </NgonNgu>
        <HeaderMidImage src={logo} alt="" />
        {!isHiddenSearch && (
        <div style={{
          position: 'absolute',
          right: '77px'}}>
        <ButttonInputSearch
        placeholder="input text here" 
        onChange={onSearch} 
        style={{ width: 200, borderBottom: '1px solid #ebebeb' }}
        />
        </div>
      )}

      </HeaderMid>
      <HeaderBottom>
        <span></span>
        <HeaderBottomList >
          <HeaderBottomListItem >
            <HeaderBottomLink onClick={handleNavigateHome}>HOME</HeaderBottomLink>
          </HeaderBottomListItem>
          <HeaderBottomListItem >
            <HeaderBottomLink onClick={handleNavigateBook}>BOOKS</HeaderBottomLink>
          </HeaderBottomListItem>
          <HeaderBottomListItem>
            <HeaderBottomLink >ART</HeaderBottomLink>
          </HeaderBottomListItem>
          <HeaderBottomListItem>
            <HeaderBottomLink >LIBRARIE HAYDÉE</HeaderBottomLink>
          </HeaderBottomListItem>
          <HeaderBottomListItem>
            <HeaderBottomLink onClick={handleNavigateBlog}>BLOG</HeaderBottomLink>
          </HeaderBottomListItem>
          <HeaderBottomListItem >
            <HeaderBottomLink onClick={handleNavigateAbout}>ABOUT</HeaderBottomLink>
          </HeaderBottomListItem>
          <HeaderBottomListItem>
            <HeaderBottomLink onClick={handleNavigateContact}>CONTACT</HeaderBottomLink>
          </HeaderBottomListItem>
          <NgonNgu2>
            <select name="" id="">
              <option value="">VN</option>
              <option value="">EN</option>
            </select>
          </NgonNgu2>
          <CloseButton id="close" className="fa-solid fa-xmark"></CloseButton>
        </HeaderBottomList>
        {!isHiddenCart && (
        <div onClick={() => navigate('/order')}>
          <Badge count={order?.orderItems?.length} size='small' >
            <ShoppingOutlined style={{ fontSize:'25px', cursor:'pointer'}}/>
          </Badge>
        </div>
          )}

      </HeaderBottom>
    </Header>
  )
}


export default HeaderComponent
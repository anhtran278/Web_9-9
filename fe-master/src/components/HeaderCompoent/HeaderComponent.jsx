import { Badge, Popover } from 'antd';
import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/images/BookShop_Flat_x360.webp';
import {
  UserOutlined,
  ShoppingOutlined,
  BarsOutlined,
  CloseOutlined,
  UpCircleOutlined
} from '@ant-design/icons';
import {
  Header,
  HeaderTop,
  HeaderLink,
  HeaderMid,
  NgonNgu,
  HeaderMidImage,
  HeaderBottom,
  WrapperContentPopup,
  NgonNgu2,
  SignIn,
} from './style';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as UserService from '../../services/UserService';
import Loading from '../LoadingComponent/Loading';
import { resetUser } from '../../redux/slides/userSlide';
import { searchProduct } from '../../redux/slides/productSlide';
import ButttonInputSearch from '../ButtonInputSearch/ButttonInputSearch';

const HeaderComponent = ({ isHiddenSearch = false, isHiddenCart = false }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [search, setSearch] = useState('');
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const order = useSelector((state) => state.order);
  const [loading, setLoading] = useState(false);
  const menuRef = useRef(null);

  const handleNavigateLogin = () => {
    navigate('/sign-in');
  };

  const handleNavigateSignUP = () => {
    navigate('/sign-up');
  };
   
  const handleNavigateHome = () => {
    navigate('/');
  };

  const handleLogout = async () => {
    setLoading(true);
    await UserService.logoutUser();
    dispatch(resetUser());
    setLoading(false);
  };


  useEffect(() => {
    setLoading(true);
    setUserName(user?.name);
    setUserAvatar(user?.avatar);
    setLoading(false);
  }, [user?.name, user?.avatar]);

  const content = (
    <div>
      <WrapperContentPopup onClick={() => handleClickNavigate('profile')}>User Profile</WrapperContentPopup>
      {user?.isAdmin && (
        <WrapperContentPopup onClick={() => handleClickNavigate('admin')}>System Management</WrapperContentPopup>
      )}
      <WrapperContentPopup onClick={() => handleClickNavigate('my-order')}>My Order</WrapperContentPopup>
      <WrapperContentPopup onClick={handleLogout}  >Log Out</WrapperContentPopup>
    </div>
  );

  const handleClickNavigate = (type) => {
    if (type === 'profile') {
      navigate('/profile-user');
    } else if (type === 'admin') {
      navigate('/system/admin');
    } else if (type === 'my-order') {
      navigate('/my-order', {
        state: {
          id: user?.id,
          token: user?.access_token
        }
      });
    } else {
      handleLogout();
    }
    setIsOpenPopup(false);
  };

  const onSearch = (e) => {
    setSearch(e.target.value);
    dispatch(searchProduct(e.target.value));
  };
  
  useEffect(() => {
    const handleClickOpenMenu = () => {
      if (menuRef.current) {
        menuRef.current.classList.add('active');
        document.body.classList.add('menu-open');
      }
    };

    const handleClickCloseMenu = () => {
      if (menuRef.current) {
        menuRef.current.classList.remove('active');
        document.body.classList.remove('menu-open');
      }
    };

    const open = document.getElementById('open');
    const close = document.getElementById('close');

    if (open) {
      open.addEventListener('click', () => {
        handleClickOpenMenu();
      });
    }

    if (close) {
      close.addEventListener('click', () => {
        handleClickCloseMenu();
      });
    }
  }, []);

  return (
    <Header id='header'>
      <Loading isLoading={loading}>
        <HeaderTop style={{ justifyContent: isHiddenSearch && isHiddenSearch }}>
          {userAvatar ? (
            <img src={userAvatar} alt="avatar" style={{ height: '30px', width: '30px', borderRadius: '50%', objectFit: 'cover' }} />
          ) : (
            <UserOutlined style={{ fontSize: '18px', marginRight: '5px', alignItems: 'baseline' }} />
          )}
          {user?.access_token ? (
            <>
              <Popover content={content} trigger="click" open={isOpenPopup}>
                <div style={{ cursor: 'pointer', maxWidth: 1000, overflow: 'hidden', textOverflow: 'ellipsis' }} onClick={() => setIsOpenPopup((prev) => !prev)}>{userName?.length ? userName : user?.email}</div>
              </Popover>
            </>
          ) : (
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
        <i id='open'><BarsOutlined /></i>
        <NgonNgu>
          <select name="" id="">
            <option value="">VN</option>
            <option value="">EN</option>
          </select>
        </NgonNgu>
        <a href='/'><HeaderMidImage src={logo} alt="logo.BookShop" /></a>
        {!isHiddenSearch && (
          <div className='searchBox' style={{
            position: 'absolute',
            right: '77px'
          }}>
            <ButttonInputSearch
              className='searchButton'
              placeholder="input text here"
              onChange={onSearch}
              style={{ width: 200, borderBottom: '1px solid #ebebeb' }}
            />
          </div>
        )}
        
      </HeaderMid>

      <HeaderBottom>
        <span></span>
        <ul id='menu' ref={menuRef}>
          <li ><a href='/'>HOME</a>
          </li>
          <li ><a href='/home'>BOOKS</a>
          </li>
          <li><a href='/'>ART</a>
          </li>
          <li><a href='/'>LIBRARIE HAYDÉE</a>
          </li>
          <li><a href='/blog'>BLOG</a>
          </li>
          <li ><a href='/about'>ABOUT</a>
          </li>
          <li><a href='/contact'>CONTACT</a>
          </li>
          <NgonNgu2>
            <select name="" id="">
              <option value="">VN</option>
              <option value="">EN</option>
            </select>
          </NgonNgu2>
          <i id='close'><CloseOutlined /></i>
        </ul>
        {!isHiddenCart && (
          <div className='shoppingOutLined' onClick={() => navigate('/order')}>
            <Badge count={order?.orderItems?.length} size='small' >
              <ShoppingOutlined style={{ fontSize: '25px', cursor: 'pointer' }} />
            </Badge>
          </div>
        )}
      </HeaderBottom>
      
    </Header>
    
  );
}

export default HeaderComponent;

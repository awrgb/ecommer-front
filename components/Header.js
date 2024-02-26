import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import {useContext, useState} from "react";
import {CartContext} from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import { FiSearch } from 'react-icons/fi';
import { IoCartOutline } from 'react-icons/io5';

const StyledHeader = styled.header`
  background-color: #222;
`;
const Logo = styled(Link)`
  color:#fff;
  text-decoration:none;
  position: relative;
  z-index: 3;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const StyledNav = styled.nav`
  ${props => props.mobileNavActive ? `
    display: block;
  ` : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;
const NavLink = styled(Link)`
  display: block;
  color:#aaa;
  text-decoration:none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding:0;
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border:0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const {cartProducts} = useContext(CartContext);
  const [mobileNavActive,setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={'/'}>Tech Haven</Logo>
          <StyledNav mobileNavActive={mobileNavActive} style={{alignItems:'center', justifyContent:'center', }}>
            <NavLink href={'/'} style={{alignItems:'center', justifyContent:'center'}}>Home</NavLink>
            <NavLink href={'/products'} style={{alignItems:'center', justifyContent:'center'}}>All products</NavLink>
            {/* <NavLink href={'/categories'}>Categories</NavLink>
            <NavLink href={'/account'}>Account</NavLink> */}
            <NavLink href={'/cart'}><IoCartOutline className="size-0.5" style={{ alignItems:'center', justifyContent:'center',width: '15.7px', height: '15.7px' }}/> { cartProducts.length}</NavLink>
            <FiSearch style={{ color:"#aaa", width: '15px', height: '15px' }} />
          </StyledNav>
          <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
            <BarsIcon />
            
          </NavButton>
          
        
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
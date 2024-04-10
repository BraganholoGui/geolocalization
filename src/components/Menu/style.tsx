import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const COLORS ={
  primaryDark: '#15739e',
  primaryLight: '#b6edc8',
};

interface Props {
  clicked: any;

}

export const MenuLabel = styled.label`
  position: fixed;
  top: 1.7rem;
  left: 0.2rem;
  border-radius: 0% 0% 50% 0%;
  height:4rem;
  width: 4rem;
  cursor: pointer;
  z-index: 99999;
  text-align: center; 
  display: flex;
  justify-content: center;
  flex-direction: center;
`;
export const Nav = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99998;
  border-radius:${(props:any) => (!props.clicked? " 0% 0% 0% 0%":"0% 0% 50% 0%")};
  background-image: radial-gradient(${COLORS.primaryLight},${COLORS.primaryDark});
  /* background:${(props:any) => (!props.clicked? " #15739e":"#b6edc8")}; */
  /* border-radius: 0% 0% 100% 0%; */
  width: ${(props:any) => (props.clicked? "5rem":"14rem")};
  height: ${(props:any) => (props.clicked? "5rem":"100%")};
  transition: transform 3.2s;
`;
export const Icon = styled.span<Props>`
cursor: pointer;
 background-color:${(props:any) => (props.clicked? "transparent":"white")};
 width: 1.5rem;
 height: 2px;
 display: inline-block;
 position: relative;
 margin-top: 0.5rem;
 margin: 0.5rem  0rem 0rem  0.5rem ;
 &::before, &::after{
  content: '';
  background-color: ${(props:any) => (props.clicked? "black":"white")};;
  width: 1.5rem;
  height: 2px;
  display: inline-block;
  position: absolute;
  left: 0;
  transition: all 0.3s ;
 }
 &::before{
  top:${(props:any) => (props.clicked? "0":"-0.4rem")};
  transform:${(props:any) => (props.clicked? "rotate(135deg)":"rotate(0)")};
 }
 &::after{
  top:${(props:any) => (props.clicked? "0)":"0.4rem")};
  transform:${(props:any) => (props.clicked? "rotate(-135deg)":"rotate(0)")};
 }
`;

export const Navigation = styled.nav`
 height: 50vh;
 width: 14vh; 
 display: flex;
 /* justify-content: center;
 align-items: center; */
`;

export const List = styled.ul`
position: absolute;
list-style:none;
top: 50%;
left: 50%;
transform:translate(-50%,-50%);
text-align: start;
width: 100%;
display: flex;
flex-direction: column;
li{
  /* margin-bottom: 10px; */
  display: flex;
  align-items: center;
  a{
    display: flex;
    align-items: flex-end;
    font-size: 1.5rem;
    font-weight: 300;
    text-decoration: none;
    color: #000;
    &:hover{
      font-weight: 450;
      margin-left: 5px;
    }
  }
}
@media (max-width: 1000px) {
  li{
  margin-left: 10%;
  display: flex;
  align-items: center;
  a{
    display: flex;
    align-items: flex-end;
    font-size: 1.5rem;
    font-weight: 300;
    text-decoration: none;
    color: #000;
    &:hover{
      font-weight: 450;
      margin-left: 5px;
    }
  }
}
  }
`;

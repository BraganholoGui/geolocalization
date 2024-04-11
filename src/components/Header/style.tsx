import styled from 'styled-components';

export const ContainerMain = styled.div`
  width: 100%;
  display:flex;
  justify-content: flex-end;
  align-items: center;
  background-color:#15739e;
  height:5rem;
  top: 0rem;
`;

export const Title = styled.div`
 width: 65%;
 display:flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-right: 20px;
  margin-left: 280px;
  font-size: 3vh;
  @media (max-width: 768px) {
     width: 90%;
     font-size: 2.5vh;
     margin-left: 0px;
     margin-right: 10px;
  }
  @media (max-width: 430px) {
    width: 35%;
  }

`;
export const Profile = styled.div`
 width: 10%;
 display:flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 50px;
  color: #fff;

  .icon-profile{
    cursor: pointer;

  }
  @media (max-width: 1400px) {
     width: 20%;
     font-size: 2.5vh;
     padding-right: 0px;
  }
  @media (max-width: 768px) {
     width: 25%;
     font-size: 2.5vh;
     padding-right: 0px;
  }

  @media (max-width: 430px) {
    width: 35%;
  }

`;

export const UserInfo = styled.div`
display:flex;
color: #fff;
font-size: 18px;
justify-content: center;
align-items:center ;
`; 
export const UserImg = styled.div`
display:flex;
color: #fff;
justify-content: center;
align-items:center ;
`; 

export const VerticalHr = styled.hr`
  width: 3px;
  height: 70px !important; 
  background-color: white; 
`; 
export const Logout = styled.div`
  background-color: #033958; 
  border-radius: 7px;
  padding: 5px;
  cursor: pointer;
  max-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`; 
export const ContainerLogout = styled.div`
  display:flex;
   flex-direction:column; 
   margin-right:20px; 
   cursor:pointer;
   justify-content: center;
   align-items: center;
`; 
export const DivLogo = styled.div`
display:flex;
flex-direction:column; 
justify-content: center;
align-items: center;
cursor:pointer;
height: 4rem;
/* background:linear-gradient(#4DFFC5, #151515); */
padding: 7px;
border-radius: 21% 79% 22% 78% / 100% 0% 100% 0%   ;
@media (max-width: 650px) {
  display:none
}
`; 
export const DivLogoSquare = styled.div`
border:  5px solid #000;
cursor:pointer;
height: 4rem;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 50px;
min-width: 60px;
color: #4DFFC5;
font-size: 30px;
border-radius: 20% 0 0 20%;
`; 
export const SlLogo = styled.div`
color: #4DFFC5;
font-size: 15px;
`; 

export const SiglaLogo = styled.div`
display:flex;
justify-content: center;
align-items: center;
height: 50%;
font-size: 40px;
font-style: italic;
width: 100%;
color: #4DFFC5;
`; 
export const FullNameLogo = styled.div`
display:flex;
justify-content: flex-start;
align-items: center;
font-size: 22px;
height: 50%;
font-weight: bold;
text-shadow: 4px 4px black;
cursor: pointer;
`; 
export const Cube = styled.div`
position: relative;
width: 60px;
height: 60px;
transform-style: preserve-3d;
transform: rotateX(30deg);
animation: animate 4s linear infinite;
background:linear-gradient(#151515, #4DFFC5);
border-radius: 15px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
div{
  position:absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  border-radius: 15px;

  span{
    cursor: pointer;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:linear-gradient(#151515, #4DFFC5);
    transform: rotateY(calc(90deg * var(--i))) translateZ(30deg);
    border-radius: 15px;
    font-weight: bold;
text-shadow: 3px 3px black;
  }
}
`; 

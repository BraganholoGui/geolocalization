import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Header from '../Header';
// import Navbar from '../navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Menu from '../Menu';

function Layout({ children, ...rest }: any) {
  const [showNav, setShowNav] = useState(0);
  const [compact, setCompact] = useState(0);
  const toggle = () => setShowNav(Number(!showNav));
  const [url, setUrl] = useState('');
  const location = useLocation();

  // async function loadData() {
  //   setUrl(history.location.pathname)
  //   let userLogado = await localStorage.getItem("token") || false;
  //   if ((userLogado === "null" || !userLogado) && history.location.pathname != '/login' ) {
  //     localStorage.removeItem("token")
  //     history.push('/login')
  //     return;
  //   }
  // }
  // useEffect(() => {
  //   loadData();
  // }, [location]);
  return (
    <S.Grid {...rest}>
      {/* <S.GridNav>
        <Navbar visible={showNav} close={toggle} setCompact={setCompact} />
      </S.GridNav> */}
      <S.GridHeader>
        <Header />
        <Menu/>
      </S.GridHeader>
      <S.GridMain><Outlet /></S.GridMain>
    </S.Grid>
  );
}

export default Layout;

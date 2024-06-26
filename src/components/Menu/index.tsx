import React, { useState } from 'react';
import * as S from './style';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { useEffect } from 'react';
import {
  BarChart, Task, AccountTree, ShoppingCart,
  Loyalty,
  Inventory,
  Category,
  Person,
  Groups,
  Psychology,
  People
} from '@mui/icons-material';
// import { useHistory } from 'react-router-dom';
export interface Lista {
  url: string;
  name: string;
}

const Menu = () => {
  const [click, setClick] = useState<any>(true);
  const [user, setUser] = useState<any>(true);
  const [permission, setPermission] = useState<any>(null);

  // const history = useHistory();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user') || '{}'))
    setPermission(JSON.parse(localStorage.getItem('user') || '{}')?.Role?.status)
  }, []);
  // useEffect(() => {
  //   if(!permission ) history.push('/login')
  // }, [permission]);

  const handleClick = () => setClick(!click);
  const menuList= [
    {
      name:"Home",
      url:"/home",
      component: <BarChart />
    },
    {
      name:"Traço",
      url:"/trace",
      component: <BarChart />
    },
    {
      name:"Perfil",
      url:"/perfil",
      component: <BarChart />
    },
    
  ]

  return (
    <>
      <S.MenuLabel htmlFor='navi-toggle' onClick={handleClick}>
        <S.Icon onClick={handleClick} clicked={!click}></S.Icon>
      </S.MenuLabel>
      <S.Nav clicked={click} >
        {
          !click ?
            <S.Navigation >
              {
                <S.List>
                  {
                    menuList?.map(item =>(
                      <li>
                        <BarChart />
                        <a href={item.url} >{item.name}</a>
                      </li>
                    ))
                  }
              </S.List>
              }

            </S.Navigation> : null
        }
      </S.Nav>
    </>
  )
}
export default Menu;

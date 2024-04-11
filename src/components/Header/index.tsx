import React from 'react'
import { Person, InsertChart } from '@mui/icons-material';
import * as S from './style';
// import { useAuth } from '../../contexts/auth';
import { useState } from 'react';
import { useEffect } from 'react';
// import Select from 'react-select';
import './style.css';

function Header() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || "{}"));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user') || "{}"))
    console.log(JSON.parse(localStorage.getItem('user') || "{}"))
  }, []);

  // const { Logout } = useAuth();

  async function handleLogout() {
    // await Logout();
  }

  const options = [
    { value: 'logout', label: 'Logout' },
  ];

  return (
    <>
      <S.ContainerMain>
        <S.Title>
          <S.FullNameLogo>
            Trace Visits
          </S.FullNameLogo>
        </S.Title>
        <S.Profile>
          <S.VerticalHr></S.VerticalHr>
          <S.ContainerLogout>
            <S.UserImg>
              {user?.photo ? <img src={`data:image/jpeg;base64,${user.photo}`} onClick={() => setIsDropdownOpen(!isDropdownOpen)} alt={user.access_name} style={{ width: '50px', height: 'auto', borderRadius: '50%' }} /> :
                <Person onClick={() => setIsDropdownOpen(!isDropdownOpen)} style={{ width: '45px', height: 'auto', borderRadius: '50%' }} />
              }
            </S.UserImg>
            {isDropdownOpen ?
              <>{options.map(item => <S.Logout onClick={() => handleLogout()}>{item.label}</S.Logout>)}</>
              : <S.UserInfo>
                {user?.Person?.name}
              </S.UserInfo>}
          </S.ContainerLogout>
        </S.Profile>
      </S.ContainerMain>
    </>
  )

}

export default Header;

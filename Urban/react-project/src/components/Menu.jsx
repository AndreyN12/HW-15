import React, { useState } from 'react';
import styled from 'styled-components';

const MenuStyle = styled.div`
position: absolute;
  top: 50px;
  right: 20px;
  background-color: rgb(253, 253, 253);
  border: 1px solid #181818;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.24);
  border-radius: 8px;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: 10;
  color: #000;
`

const MenuItem = styled.div`
padding: 8px 16px;
cursor: pointer;
fint-size: 14px;
&:hover {
   background: #181818;
   color: #fff;
}
   border-radius: 8px;
`

const MenuP = styled.p`
line-height: 100%;
  font-size: 14px;
  font-weight: 500;

`

const Menu = ({ isVisible, remove, setFavorites, favorites, toggleEdit, setMenuVisible }) => {
  const toggleText = favorites ? 'Убрать из избранного' : 'Добавить в избранное'
  return (
    <MenuStyle isVisible={isVisible}>
      <MenuItem onClick={() => { toggleEdit(); setMenuVisible(!isVisible) }}><MenuP>Редактировать</MenuP></MenuItem>
      <MenuItem onClick={remove}><MenuP>Удалить</MenuP></MenuItem>
      <MenuItem onClick={() => { setFavorites(!favorites); setMenuVisible(!isVisible) }}><MenuP>{toggleText}</MenuP></MenuItem>
    </MenuStyle>
  )
}

export default Menu;
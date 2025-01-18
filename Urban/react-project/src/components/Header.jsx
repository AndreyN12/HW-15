import React from 'react';
import styled from 'styled-components';

const HeadStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
`

const HeadH = styled.h1`
line-height: 150%;
  font-size: 40px;
  font-weight: 800;
  margin-right: 20px;
   color: #000;
`
const HeadP = styled.p`
line-height: 100%;
  font-size: 18px;
  font-weight: 600;
  margin-left: 0px;
  color: #444444;
`
const Header = () => {


  return (
    <HeadStyles>
      <HeadH>Fashion Gallery</HeadH>
      <HeadP>Индивидуальность в каждом образе</HeadP>
    </HeadStyles>
  )
}

export default Header;
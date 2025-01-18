import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Editor from './Editor.jsx';


const CardStyle = styled.div`
  border-radius: 10px;
  padding: 20px;
  max-width: 300px;
   box-shadow: 5px 10px 8px rgba(0, 0, 0, 0.24);
   position: relative;

   @media(max-width: 800px){

   border-radius: 10px;
  padding: 15px;
  max-width: 250px;
   box-shadow: 5px 10px 8px rgba(0, 0, 0, 0.24);
   position: relative;
   }
`
const CardTitle = styled.h4`
  line-height: 150%;
  font-size: 20px;
  font-weight: 600;
  color: #000;
  margin-top: 10px;

  @media(max-width: 800px){

  line-height: 150%;
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin-top: 8px;
  }
`
const CardSubtitle = styled.p`
  line-height: 150%;
  font-size: 18px;
  font-weight: 500;
  margin-top: 30px;
  color: #878787;

  @media(max-width: 800px){
  line-height: 150%;
  font-size: 16px;
  font-weight: 500;
  margin-top: 25px;
  color: #878787;
  }
`

const MenuButton = styled.button`
 background: none;
  border: none;
  position: absolute;
  top: 10px;
  right: 8px;
  cursor: pointer;
  font-size: 1.25rem;
`

const Card = ({ post, removeCard }) => {

  const remove = () => {
    removeCard(post.id)
  }

  const [isVisibleText, setIsVisibleText] = useState(false)
  const toggleEdit = () => setIsVisibleText((isVisibleText) => !isVisibleText)

  const [menuVisible, setMenuVisible] = useState(false)
  const toggleMenu = () => setMenuVisible((menuVisible) => !menuVisible)

  const [favorites, setFavorites] = useState(false)
  const [postTitle, setPostTitle] = useState(post.title)
  const [postSubTitle, setPostSubTitle] = useState(post.subtitle)
  return (
    <CardStyle style={favorites ? { background: '#fffece' } : { background: '#fff' }}>
      <Editor postTitle={postTitle} setPostSubTitle={setPostSubTitle} setPostTitle={setPostTitle} setIsVisibleText={setIsVisibleText} isVisibleText={isVisibleText} />
      <MenuButton onClick={toggleMenu}>⋮</MenuButton>
      <Menu isVisible={menuVisible} setMenuVisible={setMenuVisible} remove={remove} toggleEdit={toggleEdit} favorites={favorites} setFavorites={setFavorites} />

      <CardTitle>{postTitle}</CardTitle>
      <CardSubtitle>{postSubTitle}</CardSubtitle>
    </CardStyle>
  )
}

export default Card;
import React, { useState } from 'react';
import styled from 'styled-components';
import posts from '../data/data.js'
import Card from './Card';




const MainStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  gap: 15px;
  justify-content: center;
  padding-bottom: 150px; 
`


const Main = () => {

  const [cardList, setCardList] = useState(posts)
  const removeCard = (id) => {
    setCardList(cardList.filter((card) => card.id != id));
  }

  return (
    <MainStyle>

      {cardList.map((post) => (
        <Card key={post.id} post={post} removeCard={removeCard} />
      ))}
    </MainStyle>
  )
}


export default Main;
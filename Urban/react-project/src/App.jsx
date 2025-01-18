import React from 'react';
import styled from 'styled-components';
import './App.css'
import Header from './components/Header';
import Main from './components/Main';



const Container = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding: 0px 30px;
`


function App() {

  return (
    <Container>
      <Header />
      <Main />
    </Container>
  )
}

export default App

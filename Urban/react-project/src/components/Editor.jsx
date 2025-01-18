import { useRef, useState } from 'react';
import styled from 'styled-components';



const EditorStyle = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
  display: ${({ isVisibleText }) => (isVisibleText ? "flex" : "none")};
  flex-direction: column;
  color: #000;

`

const editorInput = styled.input`
padding: 10px;
`

const Editor = ({ setPostTitle, setPostSubTitle, isVisibleText, setIsVisibleText }) => {


  const titleRef = useRef()
  const subTitleRef = useRef()

  const [editTitle, setEditTitle] = useState(null)
  const pushTitle = (event) => {
    setEditTitle(event.target.value)
  }

  const [editSubTitle, setEditSubTitle] = useState(null)
  const pushSubTitle = (event) => {
    setEditSubTitle(event.target.value)
  }
  const handSave = () => {
    setPostTitle(editTitle);
    setPostSubTitle(editSubTitle)
    titleRef.current.value = '';
    subTitleRef.current.value = '';
    setIsVisibleText(!isVisibleText)
  }


  const resave = () => {
    setIsVisibleText(!isVisibleText)
    titleRef.current.value = '';
  }
  return (
    <EditorStyle isVisibleText={isVisibleText}>
      <input ref={titleRef} placeholder='Название товара' onChange={pushTitle} style={{ padding: '5px', marginBottom: '20px', width: '200px', borderRadius: '8px' }} type="text" />
      <input ref={subTitleRef} onChange={pushSubTitle} placeholder='Описание товара' style={{ padding: '5px', width: '200px', borderRadius: '8px' }} type="text" />
      <div onClick={handSave} style={{ padding: '8px 14px', marginTop: '20px', background: 'rgb(245, 159, 247)', borderRadius: '8px', cursor: 'pointer' }}>Сохранить</div>
      <div onClick={resave} style={{ padding: '8px 14px', marginTop: '20px', background: 'rgb(245, 159, 247)', borderRadius: '8px', cursor: 'pointer' }}>Отмена</div>
    </EditorStyle>
  )
}


export default Editor;
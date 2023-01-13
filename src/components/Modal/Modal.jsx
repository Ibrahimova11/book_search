import React, { useState } from 'react'
import {GrClose} from 'react-icons/gr'
import styled from 'styled-components';

const ModalContainer = styled.div`
  
  background-color: #fff;
  left: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  width: 40% ;
  padding: 50px 25px ;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;
const Img = styled.img`
  width: 20%;
  height: 200px;
  float: left;
  margin-right: auto;
  margin-left: auto;
  object-fit: contain;
`;
const Modal_Text_Container = styled.div`
  width: 70%;
  float: left;
  padding: 6px, 18px;
  margin: 10px, 0px;
  box-sizing: border-box;
`;
const ModalTitle1 = styled.h4`
  padding: 12px, 18px;
  text-align: center;
`;
const ModalTitle2 = styled.h5`
  margin: 2px;
  display: inline-block;
  background-color: rgba(220, 220, 220, 0.4);
  padding: 10px;
  border-radius: 30px;
  color: black;
`;
const ModalText = styled.p`
  overflow: auto;
  word-spacing: 2px;
  letter-spacing: 0.2px;
  font-size: 14px;
  line-height: 22px;
  max-height: 260px;
`;
const ModalCloseIcon = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 30px;
  color: rgb(255, 40, 0);
  cursor:pointer;
 

`;

function Modal({view, book, close}) {
    if (!view) {
        return null;
    }
  return (
    <ModalContainer>
        
        <Img src={`${book.volumeInfo?.imageLinks?.thumbnail}`}></Img>
        <Modal_Text_Container>
          <ModalTitle1>{book.volumeInfo.title}</ModalTitle1>
          <ModalTitle2>{book.volumeInfo.publisher}</ModalTitle2>
          <ModalText>{book.volumeInfo.description}</ModalText>
          <ModalCloseIcon onClick={close}><GrClose/></ModalCloseIcon>
        </Modal_Text_Container>
      </ModalContainer>
  )
}

export default Modal
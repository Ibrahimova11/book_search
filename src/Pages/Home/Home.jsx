import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./Home.css";
import Modal from '../../components/Modal/Modal'
import {BsSearch} from 'react-icons/bs'
const Wrapper = styled.div`
  background-image: url(https://dadabooksearch.netlify.app/images/headerbg.jpg);
  background-color: rgb(204, 204, 204);
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

const Title = styled.h1`

  display: block;
  color: white;
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
`;
const Search = styled.div`
  width: 100%;
  position: relative;
`;

const ContentWrapper = styled.div`
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 55%;
`;
const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  box-shadow: rgb(255 255 255 / 85%) 0px 6px 12px -2px,
    rgb(255 255 255 / 90%) 0px 3px 7px -3px; ;
`;

const InputIcon = styled.span`
    position: absolute;
    font-size: 20px;
    top: 14px;
    right: 8px;
`


const Card = styled.div`
  width: 280px;
  margin: 15px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  padding: 15px 10px;
  border-radius: 5px;
  box-shadow: rgb(90 90 90 / 54%) 0px 3px 8px;
`;
const Img = styled.img`
  height: 200px;
  width: 95%;
  margin-left: auto;
  object-fit: contain;
  margin-right: auto;
  padding-bottom: 13px;
 
`;
const Name = styled.h5`
  margin-top: 12px;
  font-size: 19px;
  text-align: center;
  font-weight: bold;
`;
const Author = styled.h6`
  margin-top: 0px;
  margin-bottom: 15px;
  border-top: 1px solid rgb(220, 220, 220);
  padding: 20px 5px 5px;
  font-size: 16px;
  opacity: 0.7;
`;

function Home() {
  let [view, setView] = useState(false);
  let [search, setSearch] = useState("");
  const [bookDetail, setBookDetail] = useState()
  let [books, setBooks] = useState([]);

  const open = () => {
    setView(!view);
  };
  const close =()=>{
    setView(false)
  }
  

  const searchBook=()=>{
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=30`).then((res)=>setBooks(res.data.items))
  }
  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <Title>
           <h5>Dada Book Searching App</h5> 
          </Title>
          <Search>
            <form onSubmit={(e)=>{
                e.preventDefault()
                searchBook()
            }}>
            <Input placeholder="Find book" type='text' value={search} onChange={(e)=>setSearch(e.target.value)
              } ></Input>
              <InputIcon onClick={searchBook}><BsSearch/></InputIcon>
            </form>
              
          </Search>
        </ContentWrapper>
      </Wrapper>
      {
        books.length === 0 &&  <div className="Showw"><h1 className="Show"><b>Nothing To Show !?</b></h1></div>
      }

{
    <div style={{display:'flex',  marginLeft:"auto", marginRight:'auto',flexWrap:'wrap',}}>
{books.map((book, index) => {
        return (
          <>
            <Card>
              <Img src={`${book.volumeInfo?.imageLinks?.thumbnail}`}></Img>
              <Name>{book.volumeInfo.title}</Name>
              <Author>{book.volumeInfo.publisher}</Author>
              <div className="buttons">
                <a
                  href={`${book.volumeInfo.previewLink}`}
                  style={{
                    textDecoration: "none",      
                    margin: "16px",
                    fontSize: "16px",
                    curson: "pointer",
                    color: "rgb(120, 120, 120)",
                  }}
                >
                  Preview
                </a>
                <button
                view={view}
                setView={setView}
                  onClick={()=>{
                    setView(true);
                    setBookDetail(book)
                  }}
                  style={{
                    textDecoration: "none",
                    color: "rgb(120, 120, 120)",
                    margin: "10px",
                    fontSize: "16px",
                    curson: "pointer",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: "transparent",
                  }}
                >
                  Details
                </button>
              </div>
            </Card>
          </>
        );
    })}
    <Modal view={view} book={bookDetail} close={close}/>
    </div>
}
      
    </>
  );
}

export default Home;
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route, NavLink } from "react-router-dom";
import moment from 'moment';
import { AiOutlineHeart } from 'react-icons/ai'
import Article from './Article';
export default function GlobalArticles(props) {

  const [selectedArticle, setSelectedArticle] = useState([]);

  const handleArticleDetails = (data) => {
    setSelectedArticle(selectedArticle.concat(data))
  }
  console.log(selectedArticle)
  return (
    <Container>
      <div className="App">
        <ul>
          {
            props.globalData.map(data =>
              <li key={data.slug}>
                <div className='flex justify-between items-center'>
                  <div className='flex justify-between items-center'>
                    <div className="rounded-full w-8 h-8">
                      <img className="rounded-full w-8 h-8" src={"demo-avatar.png"} alt="author image" />
                    </div>
                    <div className='flex flex-col'>
                      <span>{data.author.username}</span>
                      <span>{moment(data.createdAt).format("MMMM D, YYYY")}</span>
                    </div>
                  </div>
                  <div className='flex items-center text-emerald-500 m-4'>
                    <AiOutlineHeart />
                    <span className='border-solid border-emerald-600 '>{data.favoritesCount}</span>
                  </div>
                </div>
                <h3 className='flex text-xl justify-items-start' onClick={() => handleArticleDetails(data)}>{data.title}</h3>
                <p className='flex text-base justify-items-start' onClick={() => handleArticleDetails(data)}>{data.description}</p>
                <div className='flex justify-between items-center'>
                  {/* <NavLink to={`/article/${data.slug}`} onClick={() => handleArticleDetails({ ...data })}>Read More</NavLink> */}
                  <button onClick={() => handleArticleDetails(data)}>Read more</button>
                  <div>
                    {data.tagList.map(tag =>
                      <span className="w-4 p-2 border-solid border-black rounded-full">{tag}</span>
                    )
                    }
                  </div>
                </div>
              </li>
            )
          }
        </ul>
      </div>
      <div>
          {
            selectedArticle !== null ?
            <Article selectedArticle={selectedArticle} />
            : ""
          }
      </div>
    </Container>
  );
  console.log("selected", selectedArticle)
}

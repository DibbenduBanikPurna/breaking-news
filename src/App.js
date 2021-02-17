import React, { useEffect,useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import News from './Components/News/News';

function App() {
  const [news,setNews]=useState([])
  useEffect(()=>{
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=a46e844bc1b94e86b3bd4d82e12f0f0c')
    .then(res=>res.json())
    .then(data=>
      {
      
        setNews(data.articles)
        
      }
      )
  },[])
  return (
    <div>
      <h2>Heading News</h2>
      <Header/>
      <h1>Top Headlines: {news.length}</h1>
      {
        news.map(news=>{
          return <News key={news.publishedAt} news={news}/>
        })
      }
    </div>
  );
}

export default App;

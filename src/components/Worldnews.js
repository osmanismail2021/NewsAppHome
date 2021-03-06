import { React, useState, useEffect } from 'react';
import News from './News';

export default function Worldnews() {
  const [articles, setArticles] = useState([])


  useEffect(() => {
   const fetchIt = async ()=>{
    await fetch('/api/v2/everything?q=world&apiKey=7b59a25765394b278b65a1fd57040235')
      .then(res => res.json())
      .then(data => {
        setArticles(data.articles)

      })
   }
   

   

   fetchIt()
  }, [])

  
  
  return (
          <div className="news" id='worldnews'>
     {
        articles.length !== 0 ? articles.map((news,index)=><News key={index} data={news}/>):'yok'
      }
     </div>
  )
}

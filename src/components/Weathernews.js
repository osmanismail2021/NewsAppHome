import { React, useState, useEffect } from 'react';
import News from './News';



export default function Weathernews() {
  const [articles, setArticles] = useState([])


  useEffect(() => {
   const fetchIt = async ()=>{
    await fetch('/api/v2/everything?q=weather&apiKey=3c314b1b9c194b3cab398716a3aa5367')
      .then(res => res.json())
      .then(data => {
        setArticles(data.articles)

      })
   }
   

   

   fetchIt()
  }, [])

  
  
  return (
          <div className="news" id='weathernews'>
     {
        articles.length !== 0 ? articles.map((news,index)=><News key={index} data={news}/>):'yok'
      }
     </div>
  )
}

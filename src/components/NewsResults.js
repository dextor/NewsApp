import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function NewsResults() {
  
  const [results, setResults] = useState({});
  const {newsTopic} = useParams();

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=${newsTopic}&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
      .then(res => res.json())
      .then(obj => {
        setResults(obj);
      });
  }, [newsTopic]);

  let output = <></>;

  if(results.status == 'ok') {
    output = results.articles.map( (article, index) => (
      <div className="card" key={index}>
        <img src={article.urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{article.author}</h6>
          <p className="card-text">{article.content}</p>
          <a href={article.url} className="btn btn-primary">Go to Article</a>
        </div>
      </div>
    ));
  }


  return (
    <>
      <h1>{newsTopic}</h1>
      <div>
        {output}
      </div>
    </>
  );
}
import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Home = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        const url = `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=33bb14fdd4314ab1b47f8185bde01a78`;
        fetch(url)
        .then(res => res.json())
        .then(data => setNews(data.articles))
    },[]);

    return (
        <div className='container'>
            <div className="row">
                {
                    news.map(ns => <News news={ns} key={ns.title}></News>)
                }
            </div>
        </div>
    );
};

export default Home;
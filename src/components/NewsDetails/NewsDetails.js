import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const NewsDetails = () => {
    const {author} = useParams();
    const [news, setNews] = useState([]);
    useEffect(() => {
        const url = `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=33bb14fdd4314ab1b47f8185bde01a78`;
        fetch(url)
        .then(res => res.json())
        .then(data => setNews(data.articles))
    },[]);
    const selectedNews = news.find(ns => ns.author === author);
    console.log(selectedNews);
    const {title, urlToImage, publishedAt, content} = selectedNews;
    return (
        <div className='container'>
            <img src={urlToImage} alt=""/>
            <h3>{title}</h3>
            <h6>{publishedAt}</h6>
            <br/>
            <p>{content} </p>
        </div>
    );
};

export default NewsDetails;
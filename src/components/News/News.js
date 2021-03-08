import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';

const News = ({news}) => {
    const {title, description, urlToImage, author} = news;
    return (
        <div className="col-md-4 g-4">
            <div className="card shadow">
            <img src={urlToImage} className="card-img-top" alt=""/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <Link to={`/news/${author}`} className="btn btn-primary">Read More</Link>
            </div>
        </div>
        </div>
    );
};

export default News;
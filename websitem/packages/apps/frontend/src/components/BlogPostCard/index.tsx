import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPostCard.css'; 

interface BlogPostCardProps {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
}

const BlogPostCard = ({ id, title, summary, imageUrl }: BlogPostCardProps) => (
  <div className="blog-card">
    <img src={imageUrl} alt={title} className="blog-card-image" />
    <div className="blog-card-content">
      <h3 className="blog-card-title">{title}</h3>
      <p className="blog-card-summary">{summary}</p>
      <Link to={`/blog/${id}`} className="blog-card-read-more">
        Devamını Oku <i className="fa-solid fa-arrow-right"></i>
      </Link>
    </div>
  </div>
);

export default BlogPostCard;

import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './BlogPost.css';

const blogPosts = [
  {
    id: 1,
    title: 'The Importance of Regular Dental Check-ups',
    content: 'Full content of the blog post about the importance of regular dental check-ups...',
  },
  {
    id: 2,
    title: 'Tips for Maintaining Healthy Teeth',
    content: 'Full content of the blog post with tips for maintaining healthy teeth...',
  },
  {
    id: 3,
    title: 'Understanding Different Types of Dental Treatments',
    content: 'Full content of the blog post about different types of dental treatments...',
  },
];

const BlogPost = () => {
  const { id } = useParams();
  const blogPost = blogPosts.find((post) => post.id === parseInt(id));

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <Container className="py-5">
      <h1>{blogPost.title}</h1>
      <p>{blogPost.content}</p>
    </Container>
  );
};

export default BlogPost;

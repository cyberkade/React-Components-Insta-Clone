import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts, searchTerm } = props;

  const getFilteredSearch = () => {
    
    const filteredSearch = posts.filter(post => {
      // console.log(post);
      return post.username.toLowerCase().includes(searchTerm.toLowerCase())
    })
    return filteredSearch
  }

  return (
    <div className='posts-container-wrapper'>
      
      {posts.map( post => <Post searchTerm={getFilteredSearch()} key={post.id} post={post} likePost={likePost}/> )}
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;

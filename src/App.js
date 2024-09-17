/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, {useState} from 'react';
import Posts from './components/Posts/Posts'
import Searchbar from './components/SearchBar/SearchBar'
import dummyData from './dummy-data';
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
// Import the dummyData
import './App.css';

const App = () => {
  const [posts, setPostsState] = useState(dummyData);
  const [searchTerm,setSearchTerm] = useState('');
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.

  const likePost = postId => {
    setPostsState(posts.map( post => {
      if(postId === post.id){
        post.likes += 1;
        return {...post};
      }else{
        return post
      }
    }))
  };

  const getFilteredSearch = () => {
    
    const filteredSearch = posts.filter(post => {
      // console.log(post);
      return post.username.toLowerCase().includes(searchTerm.toLowerCase())
    })
    return filteredSearch
  }

  return (
    <div className='App'>
      <Searchbar setSearchTerm={setSearchTerm} />
      <Posts searchTerm={searchTerm} posts={getFilteredSearch()} likePost={likePost} />
      {/* Add SearchBar and Posts here to render them */}
      {/* Check the implementation of each component, to see what props they require, if any! */}
    </div>
  );
};

export default App;

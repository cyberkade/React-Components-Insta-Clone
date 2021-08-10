import React, {useState} from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { post, likePost } = props;
  const [isLiked, SetIsLikedState] = useState(false);

  const dislikePost = postId => {
    if(postId === post.id){
        post.likes -= 1;
        return {...post};
    } else {
      return post
      }
    }

    const toggle = () => {
      console.log(isLiked)
      return SetIsLikedState(!isLiked)
    }

  return (
    <div className='post-border'>
      <PostHeader
        username={post.username}
        thumbnailUrl={post.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={post.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection numberOfLikes={post.likes} likePost={ () => likePost(post.id)} dislikePost={ () => dislikePost(post.id) } toggle={toggle} isLiked={isLiked} />
      {/* Comments also wants its props! */}
      <Comments comments={post.comments}/>
    </div>
  );
};

export default Post;

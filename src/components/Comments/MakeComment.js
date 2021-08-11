import React, {useState} from 'react';
import './Comment.css'
import './Comments.css';

const MakeComment = (props) => {
    const [inputValue, setInputValue] = useState('');
    const {comments, toggleComment} = props;

    const findInputValue = event => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    }

    const commentPost = (event) => {
        event.preventDefault();
        toggleComment();
        comments.push({id: comments[comments.length-1].id=1, username: 'Guest', text: inputValue})
        
        return comments;
    }

    return (
        <form onSubmit={commentPost}>
            <input type='text' placeholder='Comment as a Guest!' onChange={findInputValue} />
            {/* <button type='button' onClick={commentPost}>Submit</button> */}
        </form>
        
    )
}

export default MakeComment;
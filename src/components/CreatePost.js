import React, { useEffect, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import './CreatePost.css';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');

  const navigate = useNavigate();

  const postsCollectionRef = collection(db, 'posts');
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title: title,
      postsText: postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    navigate('/');
  };

  //redirect to login page if you aren't logged in
  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, []);

  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>Create Post</h1>
        <div className="inputPost">
          <div>Title:</div>
          <input
            type="text"
            placeholder="enter title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputPost">
          <div>Post</div>
          <textarea
            placeholder="create your post"
            onChange={(e) => setPostText(e.target.value)}
          ></textarea>
        </div>
        <button className="postButton" onClick={createPost}>
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;

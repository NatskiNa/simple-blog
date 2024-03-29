import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import './Home.css';

const Home = () => {
  const [postList, setPostList] = useState([]);
  //const postsCollectionRef = collection(db, 'posts');
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, 'posts'));
      //console.log(data);
      //console.log(data.docs);
      //console.log(data.docs.map((doc) => ({ doc })));
      //console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const handleDelete = async (id) => {
    const postDoc = doc(db, 'posts', id);
    await deleteDoc(postDoc);
    window.location.href = '/';
  };

  return (
    <div className="homePage">
      {postList.map((post) => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">{post.postsText}</div>
            <div className="nameAndDeleteButton">
              <h3>{post.author.username}</h3>
              {post.author.id === auth.currentUser?.uid && (
                <button onClick={() => handleDelete(post.id)}>delete</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;

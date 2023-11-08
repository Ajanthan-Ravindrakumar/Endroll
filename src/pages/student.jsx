import React from 'react'
import { useState, useEffect } from 'react';
import { db, auth } from '../firebase-config'
import { useNavigate } from 'react-router-dom';
import { getDocs,collection } from 'firebase/firestore';



function Student({isAuth}) {

  const [postList, setpostList] = useState([])
  const postRef = collection(db, 'stucor')

  let navigate = useNavigate();

  useEffect(()=>{
    if (!isAuth) {
      navigate('/login')
    }
    const getPost = async () => {
      const data = await getDocs(postRef);
      setpostList(data.docs.map((doc)=> ({...doc.data(), id: doc.id})))
    };
    getPost();
  }, []);

  return (
    <div>{postList.map((post)=>{
      return(
        <div className='card-container1'>
          <p>Student Name: {post.author.name}</p>
          <p>Course Name : {post.author.Cname}</p>
          <p>Intructor Name : {post.author.Inamee}</p>
          <input type='checkbox'/><span>Completed</span>          
        </div>
      )
    })}</div>
  )
}

export default Student;
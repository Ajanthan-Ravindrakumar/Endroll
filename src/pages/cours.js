import React from 'react'
import { useState, useEffect } from 'react'
import { dataRef } from '../firebase-config'
import './cor.css'
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../firebase-config'
import { addDoc, collection } from 'firebase/firestore';

function Cours() {

  let navigate = useNavigate();

  const postRef = collection(db, 'stucor')
  const createPost = async () => {
    await addDoc(postRef, {author : {name: auth.currentUser.displayName, Cname : 'Artificial Intellient', Inamee : 'Benashir'}})
    navigate('/student')
  }
  const createPost1 = async () => {
    await addDoc(postRef, {author : {name: auth.currentUse.displayNamer, Cname : 'Machine Learning', Inamee : 'Gokila' }})
    navigate('/student')
  }
  const createPost2 = async () => {
    await addDoc(postRef, {author : {name: auth.currentUser.displayName, Cname : 'Python' , Inamee : 'Ajanthan'}})
    navigate('/student')
  }

  const [allValue, setallValue] = useState([])


  useEffect(()=>{
    dataRef.ref().child("Courses").on("value", data=>{
      const getData = Object.values(data.val())
      setallValue(getData)
    })
  },[])
  return (
    <div>
      {allValue.map((row,index)=>{
        return(
          <><div className='card-container1'>
          <div className="coursename">
            <h2>{row.Name}</h2>
          </div>
          <div className="description">
            <span>Description : {row.description}</span>
          </div>
          <div className="instructorname">
            <p>Instructor Name : {row.Iname}</p>
          </div>
          <div className="enrollmentsts">
            <p>Enrollment Status : {row.ES}</p>
          </div>
          <div className="duration">
            <p>Duration : {row.Duration}</p>
          </div>
          <div className="schedule">
            <p>Schedule : {row.Schedule}</p>
          </div>
          <div className="location">
            <p>Location : {row.Location}</p>
          </div>
          <div className="pre-requist">
            <p>{row.PR}</p>
          </div>
          <div className="syllabus">
            <h4>Syllabus</h4>
            <h5>Week : 1</h5>
            <span>{row.t1}</span><br/>
            <span>{row.c1}</span>
            <h5>Week : 2</h5>
            <span>{row.t2}</span>
            <h5>Week : 3</h5>
            <span>{row.t3}</span>
            <h5>Week : 4</h5>
            <span>{row.t4}</span><br/>
            <span>{row.c4}</span>
          </div>
          <div className="btn">
            { index === 0 ? <button onClick={createPost}>Endroll</button>: index === 1 ? <button onClick={createPost1}>Endroll</button>:<button onClick={createPost2}>Endroll</button>}
          </div>
        </div></>
        )
      })}
    </div>
  )
}

export default Cours

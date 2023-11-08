import React from 'react'
import './Home.css'
import Online from '../img/Online.png'
import './courses.css'
import { Swiper,SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules";
import 'swiper/css/pagination';
import 'swiper/css';
import profilePic1 from "../img/5.png"
import profilePic2 from "../img/6.png"
import profilePic3 from "../img/7.png"
import { useNavigate } from 'react-router-dom';

function Home() {

  let navigate = useNavigate();

  const learnmore = () => {
    navigate("/cours")
  }

  const clients = [
    {
        img: profilePic1,
        Title: 'Python',
        review:
        'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.'
},
{
    img: profilePic2,
        Title: 'Artificial intelligence',
        review:
        'Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.'
},
{
    img: profilePic3,
        Title: 'Machine learning',
        review:
        'Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy.'
}
]
  return (
    <><div>
      <div className="Home">
        <div className="i-left">
          <span style={{ color: 'black' }}>Hey! Homies</span><br />
          <span>Welcome to Our Online Course</span>
        </div>
        <div className="i-right">
          <img src={Online} alt="" />
        </div>
      </div>
    </div><div className="t-wapper" id="Testimorials">
        <div className="t-heading">
          <span>Choose </span>
          <span> Your </span>
          <span> Favourite Course....</span>
          <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
          <div className="blur t-blur2" style={{ background: "var(skyblue)" }}></div>
        </div>
        {/* slider */}
        <Swiper

          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}

        >
          {clients.map((clients, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="testimorial">
                  <img src={clients.img} alt="" />
                  <span>{clients.Title}</span>
                  <span>{clients.review}</span>
                  <button onClick={learnmore}>Learn more</button>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div></>
  );
}


export default Home;
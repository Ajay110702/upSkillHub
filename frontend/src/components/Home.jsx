
import React, { useEffect, useState } from 'react'
import logo from '../../public/logo.jpg'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import toast from 'react-hot-toast'; 
import { BACKEND_URL } from '../utils/utils.js';
function Home() {
    const [courses,setCourses]=useState([]);
    const [isLoggedIn,setIsLoggedIn]=useState([]);
    // token

  // token
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  //logout
  const handleLogout = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/v1/user/logout`, {
        withCredentials: true,
      });
      toast.success(response.data.message);
      localStorage.removeItem("user");
      setIsLoggedIn(false);
    } catch (error) {
      console.log("Error in logging out ", error);
      toast.error(error.response.data.errors || "Error in logging out");
    }
  };

  
 

    //fetch courses
   
     
    useEffect(()=>{
        const fetchCourses=async()=>{
            try {
               const response=await axios.get(
                `${BACKEND_URL}/api/v1/course/courses`,
                {withCredentials:true}
            );
               console.log(response.data.courses);
               setCourses(response.data.courses);
            } catch (error) {
                console.log("error in fetch courses",error);
            }
                };
                fetchCourses();
     },[])
     var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
  return (
    <div className='bg-gradient-to-r from-black to-blue-950 '>
       <div className='h-screen text-white container mx-auto'>
        {/* // header section */}
        <header className='flex items-center justify-between p-6'>
            <div className='flex items-center space-x-2'>
                <img src={logo} className='w-10 h-10 rounded-full' />
                <h1 className='text-2xl text-sky-500 font-bold'>UpSkill<span className='text-orange-500'>Hub</span></h1>
            </div>
            <div className='space-x-4'>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to={"/login"}
                  className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded"
                >
                  Login
                </Link>
                <Link
                  to={"/signup"}
                  className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded"
                >
                  Signup
                </Link>
              </>
            )}
               </div>
        </header>

        {/* main section */}
        <section className='text-center py-20'>
            <h1 className='text-4xl font-semibold text-sky-500'>UpSkill<span className='text-orange-500'>Hub</span></h1>
            
            <br />
            <p className='text-gray-500'>Sharpen your skills with courses crafted by our experts.</p>
            <div className='space-x-4 mt-8'>
                <Link to={'/courses'} className='bg-green-500 text-white py-3 px-6 rounded font-semibold hover:bg-white duration-300 hover:text-black'>Explore Courses</Link>
                <Link to={'https://www.youtube.com/@ApnaCollegeOfficial'} className='bg-sky-500 text-white  py-3 px-6 rounded font-semibold hover:bg-orange-500 duration-300 hover:text-black'>Courses Videos</Link>
            </div>
        </section>
        <section>
        <Slider {...settings}>
        {
            courses.map((course)=>(
              <div className='p-4 ' key={course._id}>
                <div className='relative flex-shrink-0 w-92 transition-transform duration-300 transform hover:scale-105'>
                    <div className='bg-gray-900 rounded-lg overflow-hidden'>
                        <img className='h-60 w-full object-cover' src={course.image.url} alt="" />
                        <div className='p-4 text-center'>
                            <h2 className='text-3xl font-bold text-white'>{course.title}</h2>
                            <button className='mt-4 bg-orange-500 text-black py-2 px-4 rounded-full hover:bg-blue-500 duration-300'>Enroll Now</button>
                        </div>
                    </div>
                </div>
              </div>

            ))
        }
      </Slider>
        </section>
         <hr />
        {/* footer section */}
        <footer className='mt-8'>
            < div className='grid grid-cols-1 md:grid-cols-3'>
            <div className='flex flex-col items-center md:items-start'>
                <div className='flex items-center space-x-2'>
                <img src={logo} className='w-10 h-10 rounded-full' />
                <h1 className='text-2xl text-sky-500 font-bold'>UpSkill<span className='text-orange-500'>Hub</span></h1>
            </div>
           <div className='mt-3 ml-2 md:ml-8'>
            <p className='mb-2'>Follow Us</p>
               <div className='flex space-x-4'>
               <a href=""><FaFacebook  className=' text-2xl hover:text-blue-400 duration-300'/></a>
                <a href=""><FaInstagram className=' text-2xl hover:text-pink-600 duration-300'/></a>
                <a href=""><FaTwitter className='text-2xl hover:text-blue-600 duration-300'/></a>
               </div>
             </div>
             </div>
            <div className='items-center flex flex-col'>
                <h3 className='text-lg font-semibold mb-4 text-gray-400'>Connects:</h3>
                <div className='space-y-2 text-gray-400 hover:text-white'>
                <p>Mobile No.- 097028946</p>
                <p>Address: zombie road, dholakpur</p>
                </div>
                <textarea rows="3" cols="25" placeholder='Type your doubts here' className='rounded mt-2'></textarea>
                <br />
                <button type='submit' className='text-orange-500 mt-2 p-2 border border-white rounded px-2 '>Submit</button>
            </div>
            <div className='items-center flex flex-col'>
                <h3 className='text-lg font-semibold mb-4 text-gray-400'>Copyrights &#169; 2025 </h3>
                <ul className='space-y-2 text-gray-400'>
                    <li className='hover:text-white cursor-pointer duration-300'>
                Terms & Conditions
                    </li>
                    <li className='hover:text-white cursor-pointer duration-300'>
                    Policy Privacy
                    </li>
                    <li className='hover:text-white cursor-pointer duration-300'>
                     Refund & Cancellation
                    </li>
                </ul>

                 </div>
            </div>
        </footer>
        </div>
    </div>
  )
}

export default Home
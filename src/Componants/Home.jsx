import { useState } from "react";
import { useEffect } from "react";
import { FaDollarSign, FaBookOpen } from "react-icons/fa";
import Cart from "./Cart/Cart";

import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Home = () => {

    const [courses, setCourses] = useState([])
    const [totalCredits, setTotalCredits] = useState(0);
    const [selectedCourse, setSelectedCourse] = useState([])
    const [totalPrice,setTotalPrice] = useState(0)


    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    console.log(courses)
    const handleSelectCourse = (course) => {
        
      const isExists = selectedCourse.find(item => item.title === course.title)
          
      if(isExists){
         return toast('you can not add one course twice')
      }
      
      else {
        if(totalCredits + course.credit >20){
            return   toast('You can not add more then 20 credit')
          }
          else{
              setSelectedCourse([...selectedCourse, course])
              setTotalCredits(totalCredits + course.credit);
              setTotalPrice(totalPrice + course.price)
          }
      }

    
        
        
    }


    return (
        <div>
            <div className="md:flex  justify-between gap-8 md:w-[95%] w-[80%] lg:w-[88%] mx-auto py-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 grid-cols-1 md:w-[75%] ">
                    {courses.map((course) => (
                        <div className="md:h-[320px] h-[360px] shadow-md shadow-slate-400  
                            text-start" key={course.id}>
                            <img className="w-full rounded-none p-3" src={course.image} alt="" />
                            <p className="ps-3 font-bold mb-3">{course.title}</p>
                            <p className="ps-3 text-xs text-gray-500 mb-3">{course.description}</p>
                            <div className="ps-3 flex justify-around">
                                <FaDollarSign></FaDollarSign>
                                <p className="text-xs font-medium text-gray-500">Price : ${course.price}</p> <FaBookOpen></FaBookOpen>
                                <p className="text-xs font-medium text-gray-500">Credit : {course.credit}hr</p>

                            </div>
                            <div className="w-[80%] mx-auto mt-4">
                                <button onClick={() => handleSelectCourse(course)} className="btn rounded-md  w-full bg-blue-500 text-white ">Select</button>
                            </div>

                        </div>

                    )
                    )}
                </div>
                <div className="md:w-[25%] md:mt-0 mt-10">
                    <Cart selectedCourse={selectedCourse} totalPrice={totalPrice} totalCredits={totalCredits}></Cart>

                </div>
            </div>
         
            <ToastContainer /> 
        </div>
    );
};

export default Home;
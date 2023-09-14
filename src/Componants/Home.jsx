import { useState } from "react";
import { useEffect } from "react";
import { FaDollarSign, FaBookOpen } from "react-icons/fa";
import Cart from "./Cart/Cart";


const Home = () => {

    const [courses, setCourses] = useState([])
    const [totalCredits, setTotalCredits] = useState(0);
    const [selectedCourse, setSelectedCourse] = useState([])


    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    console.log(courses)
    const handleSelectCourse = (course) => {
        if(totalCredits + course.credit >20){
          return  alert('You can not add more then 20 credit')
        }
        else{
            setSelectedCourse([...selectedCourse, course])
            setTotalCredits(totalCredits + course.credit);
            
        }
        
        
    }


    return (
        <div>
            <div className="flex justify-between gap-8 w-[88%] mx-auto py-20">
                <div className="grid md:grid-cols-3 gap-4 grid-cols-1 w-[75%] ">
                    {courses.map((course) => (
                        <div className="h-[320px] shadow-md shadow-slate-400  
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
                <div className="w-[25%]">
                    <Cart selectedCourse={selectedCourse}  totalCredits={totalCredits}></Cart>

                </div>
            </div>

        </div>
    );
};

export default Home;
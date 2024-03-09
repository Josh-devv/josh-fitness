import Workout from "@/Components/workout"
import Navbar from "@/navbar"
import {  users } from "@/shared/data"
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { CiCalendar, CiClock2 } from "react-icons/ci";
import 'swiper/css/navigation';
import Carousels from "@/shared/Carousels";
import Contact from "@/Components/contact";
import axios from "axios";
import { AxiosRequestConfig } from "axios";
import { Link } from "react-router-dom";


interface  Exercise {
   name: string;
   gifUrl: string
   id: number;
}

const WorkoutPage = () => {

    const [top, setTop] = useState<boolean>(true)
    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [exercises1, setExercises1] = useState<Exercise[]>([]);
    const [exercises2, setExercises2] = useState<Exercise[]>([]);
    const [exercises3, setExercises3] = useState<Exercise[]>([]);
    const [exercises4, setExercises4] = useState<Exercise[]>([]);



    
    useEffect(() => {
        const fetchData = async () => {
          const options: AxiosRequestConfig = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
            params: {limit: '10'},
            headers: {
              'X-RapidAPI-Key': 'ab97ec7dbemsh72a2dda65ac03d8p1db7ffjsnee14d78444c8',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
          };
          
          try {
            const response = await axios.request(options);
            // Assuming response.data is an array of exercises
            ;
            
            setExercises(response.data);
            console.log(response.data);
            
            
            
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);
    useEffect(() => {
        const fetchData = async () => {
          const options: AxiosRequestConfig = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/neck',
            params: {limit: '8'},
            headers: {
              'X-RapidAPI-Key': 'ab97ec7dbemsh72a2dda65ac03d8p1db7ffjsnee14d78444c8',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
          };
          
          try {
            const response = await axios.request(options);
            // Assuming response.data is an array of exercises
            ;
            
            setExercises1(response.data);
            console.log(response.data);
            
            
            
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);
    useEffect(() => {
        const fetchData = async () => {
          const options: AxiosRequestConfig = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest',
            params: {limit: '8'},
            headers: {
              'X-RapidAPI-Key': 'ab97ec7dbemsh72a2dda65ac03d8p1db7ffjsnee14d78444c8',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
          };
          
          try {
            const response = await axios.request(options);
            // Assuming response.data is an array of exercises
            ;
            
            setExercises3(response.data);
            console.log(response.data);
            
            
            
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);
    useEffect(() => {
        const fetchData = async () => {
          const options: AxiosRequestConfig = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/waist',
            params: {limit: '8'},
            headers: {
              'X-RapidAPI-Key': 'ab97ec7dbemsh72a2dda65ac03d8p1db7ffjsnee14d78444c8',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
          };
          
          try {
            const response = await axios.request(options);
            // Assuming response.data is an array of exercises
            ;
            
            setExercises4(response.data);
            console.log(response.data);
            
            
            
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);
    useEffect(() => {
        const fetchData = async () => {
          const options: AxiosRequestConfig = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio',
            params: {limit: '10'},
            headers: {
              'X-RapidAPI-Key': 'ab97ec7dbemsh72a2dda65ac03d8p1db7ffjsnee14d78444c8',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
          };
          
          try {
            const response = await axios.request(options);
            // Assuming response.data is an array of exercises
            ;
            
            setExercises2(response.data);
            console.log(response.data);
            
            
            
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);
        
    useEffect(()=> {
      const handleScroll = () => {
        if(window.scrollY !== 0) setTop(false)
      }
      window.addEventListener("scroll", handleScroll)
      return ()=> window.removeEventListener("scroll", handleScroll)
    })

  
  return (
    <>
        <Navbar top={top}/>
        <div className="pt-5 ">
            <Workout users={users}/>
        </div>

        <section id="" className="w-[100%] pt-15 max-sm:pt-10 py-8 flex flex-col justify-center items-center font-dmsans text-white  bg-black ">
            <div className="text-[25px] w-[85%] flex justify-center flex-col font-medium max-sm:text-[15px]">
                <p className="w-[90%] self-start text-[40px] max-sm:text-[20px] font-bold pb-2 max-xxsm:text-[20px]">Back Training</p>
                <p className="font-normal w-[70%] max-sm:text-[12px] max-lg:w-[90%] max-sm:w-[97%] pb-2 text-[15px]">
                Looking to get started on your fitness journey? Try one of these beginner-friendly programs!
                These have shorter time commitments or have low-impact alternatives.     
                </p>
                <button className="w-[15%] max-sm:text-[13px] max-sm:w-[50%] max-lg:w-[30%] font-normal rounded-md py-1 bg-white text-black text-[17px] border">1093+ People Tried</button>
            </div>

            <div className=" pt-6 container ">
            
  
        
            <Carousels>
            
            {
                exercises.map((items)=> (
                  <Link to={`/challenge/${items.id}`} key={items.id}>
                   <div className=" flex  justify-center">
       
                    <img src={items.gifUrl} alt="slide_image" className=" max-sm:w-[95%] max-lg:w-[410px] w-[330px] max-md:w-[300px] rounded-3xl" />
                    <div className="bg-gray-800 rounded-lg p-5 max-sm:py-8 max-xsm:py-6 max-xxsm:py-4 max-md:w-[90%] max-sm:top-[60%] max-md:top-[70%] max-lg:top-[80%] max-lg:w-[80%] absolute top-[60%] flex flex-col z-10 w-[70%]">
                      <div className="flex justify-between">
                          <button className="bg-white font-bold flex items-center max-md:text-[11px] text-[13px] text-black rounded-md px-3">
                           <CiCalendar />   7 Days
                          </button>
                          <button className="bg-white text-[13px] max-md:text-[11px] font-bold flex items-center  text-black rounded-md px-3">
                              <CiClock2 className=""/>  20-40 mins
                          </button>
                      </div>
                      <p className="pt-3 text-[12px]">{items.name}</p>
                
                    </div>
                    
                  </div>
                  </Link>
                   
                ))
            }
     
        
        
    </Carousels>
     

    
            </div>
            <div className="text-[25px] pt-10 w-[85%] flex justify-center flex-col font-medium max-sm:text-[15px]">
                <p className="w-[90%] self-start text-[35px] max-sm:text-[20px] font-bold pb-2 max-xxsm:text-[20px]">Neck Training</p>
                  <p className="font-normal w-[70%] max-sm:text-[12px] max-lg:w-[90%] max-sm:w-[97%] pb-2 text-[15px]">
                Looking to get started on your fitness journey? Try one of these beginner-friendly programs!
                These have shorter time commitments or have low-impact alternatives.     
                </p>
                <button className="w-[15%] max-sm:text-[13px] max-sm:w-[50%] max-lg:w-[30%] font-normal rounded-md py-1 bg-white text-black text-[17px] border">1093+ People Tried</button>
            </div>

            <div className=" pt-6 container ">
            
  
        
        <Carousels>
            
                  {
                exercises1.map((items)=> (
                  <Link to={`/challenge/${items.id}`} key={items.id}>
                    <div className=" flex  justify-center">
       
                    <img src={items.gifUrl} alt="slide_image" className=" max-sm:w-[95%] max-lg:w-[410px] w-[330px] max-md:w-[300px] rounded-3xl" />
                    <div className="bg-gray-800 rounded-lg p-5 max-sm:py-8 max-xsm:py-6 max-xxsm:py-4 max-md:w-[90%] max-sm:top-[60%] max-md:top-[70%] max-lg:top-[80%] max-lg:w-[80%] absolute top-[60%] flex flex-col z-10 w-[70%]">
                      <div className="flex justify-between">
                          <button className="bg-white font-bold flex items-center max-md:text-[11px] text-[13px] text-black rounded-md px-3">
                           <CiCalendar />   7 Days
                          </button>
                          <button className="bg-white text-[13px] max-md:text-[11px] font-bold flex items-center  text-black rounded-md px-3">
                              <CiClock2 className=""/>  20-40 mins
                          </button>
                      </div>
                      <p className="pt-3 text-[12px]">{items.name}</p>
                
                    </div>
                    
                  </div>
                  </Link>
                ))
            }
         
            
            
        </Carousels>
     

    
            </div>
            <div className="text-[25px] pt-10 w-[85%] flex justify-center flex-col font-medium max-sm:text-[15px]">
                <p className="w-[90%] self-start text-[35px] max-sm:text-[20px] font-bold pb-2 max-xxsm:text-[20px]">Cardio Training</p>
                  <p className="font-normal w-[70%] max-sm:text-[12px] max-lg:w-[90%] max-sm:w-[97%] pb-2 text-[15px]">
                Looking to get started on your fitness journey? Try one of these beginner-friendly programs!
                These have shorter time commitments or have low-impact alternatives.     
                </p>
                <button className="w-[15%] max-sm:text-[13px] max-sm:w-[50%] max-lg:w-[30%] font-normal rounded-md py-1 bg-white text-black text-[17px] border">1093+ People Tried</button>
            </div>

            <div className=" pt-6 container ">
            
  
        
        <Carousels>
            
                  {
                exercises2.map((items)=> (
                  <Link to={`/challenge/${items.id}`} key={items.id}>
                    <div className=" flex  justify-center">
       
                    <img src={items.gifUrl} alt="slide_image" className=" max-sm:w-[95%] max-lg:w-[410px] w-[330px] max-md:w-[300px] rounded-3xl" />
                    <div className="bg-gray-800 rounded-lg p-5 max-sm:py-8 max-xsm:py-6 max-xxsm:py-4 max-md:w-[90%] max-sm:top-[60%] max-md:top-[70%] max-lg:top-[80%] max-lg:w-[80%] absolute top-[60%] flex flex-col z-10 w-[70%]">
                      <div className="flex justify-between">
                          <button className="bg-white font-bold flex items-center max-md:text-[11px] text-[13px] text-black rounded-md px-3">
                           <CiCalendar />   7 Days
                          </button>
                          <button className="bg-white text-[13px] max-md:text-[11px] font-bold flex items-center  text-black rounded-md px-3">
                              <CiClock2 className=""/>  20-40 mins
                          </button>
                      </div>
                      <p className="pt-3 text-[12px]">{items.name}</p>
                
                    </div>
                    
                  </div>
                  </Link>
                ))
            }
        </Carousels>
     

    
            </div>
            <div className="text-[25px] pt-10 w-[85%] flex justify-center flex-col font-medium max-sm:text-[15px]">
                <p className="w-[90%] self-start text-[35px] max-sm:text-[20px] font-bold pb-2 max-xxsm:text-[20px]">Chest Training</p>
                 <p className="font-normal w-[70%] max-sm:text-[12px] max-lg:w-[90%] max-sm:w-[97%] pb-2 text-[15px]">
                Looking to get started on your fitness journey? Try one of these beginner-friendly programs!
                These have shorter time commitments or have low-impact alternatives.     
                </p>
                <button className="w-[15%] max-sm:text-[13px] max-sm:w-[50%] max-lg:w-[30%] font-normal rounded-md py-1 bg-white text-black text-[17px] border">1093+ People Tried</button>
            </div>

            <div className=" pt-6 container ">
            
  
        
        <Carousels>
            
                  {
                exercises3.map((items)=> (
                  <Link to={`/challenge/${items.id}`} key={items.id}>
                    <div className=" flex  justify-center">
       
                    <img src={items.gifUrl} alt="slide_image" className=" max-sm:w-[95%] max-lg:w-[410px] w-[330px] max-md:w-[300px] rounded-3xl" />
                    <div className="bg-gray-800 rounded-lg p-5 max-sm:py-8 max-xsm:py-6 max-xxsm:py-4 max-md:w-[90%] max-sm:top-[60%] max-md:top-[70%] max-lg:top-[80%] max-lg:w-[80%] absolute top-[60%] flex flex-col z-10 w-[70%]">
                      <div className="flex justify-between">
                          <button className="bg-white font-bold flex items-center max-md:text-[11px] text-[13px] text-black rounded-md px-3">
                           <CiCalendar />   7 Days
                          </button>
                          <button className="bg-white text-[13px] max-md:text-[11px] font-bold flex items-center  text-black rounded-md px-3">
                              <CiClock2 className=""/>  20-40 mins
                          </button>
                      </div>
                      <p className="pt-3 text-[12px]">{items.name}</p>
                
                    </div>
                    
                  </div>
                  </Link>
                ))
            }
         
            
            
        </Carousels>
     

    
            </div>
            <div className="text-[25px] pt-10 w-[85%] flex justify-center flex-col font-medium max-sm:text-[15px]">
                <p className="w-[90%] self-start text-[35px] max-sm:text-[20px] font-bold pb-2 max-xxsm:text-[20px]">Waist Training</p>
                <p className="font-normal w-[70%] max-sm:text-[12px] max-lg:w-[90%] max-sm:w-[97%] pb-2 text-[15px]">
                Looking to get started on your fitness journey? Try one of these beginner-friendly programs!
                These have shorter time commitments or have low-impact alternatives.     
                </p>
                <button className="w-[15%] max-sm:text-[13px] max-sm:w-[50%] max-lg:w-[30%] font-normal rounded-md py-1 bg-white text-black text-[17px] border">1093+ People Tried</button>
            </div>

            <div className=" pt-6 container ">
            
  
        
        <Carousels>
            
                   {
                exercises4.map((items)=> (
                  <Link to={`/challenge/${items.id}`} key={items.id}>
                  <div className=" flex  justify-center">
     
                  <img src={items.gifUrl} alt="slide_image" className=" max-sm:w-[95%] max-lg:w-[410px] w-[330px] max-md:w-[300px] rounded-3xl" />
                  <div className="bg-gray-800 rounded-lg p-5 max-sm:py-8 max-xsm:py-6 max-xxsm:py-4 max-md:w-[90%] max-sm:top-[60%] max-md:top-[70%] max-lg:top-[80%] max-lg:w-[80%] absolute top-[60%] flex flex-col z-10 w-[70%]">
                    <div className="flex justify-between">
                        <button className="bg-white font-bold flex items-center max-md:text-[11px] text-[13px] text-black rounded-md px-3">
                         <CiCalendar />   7 Days
                        </button>
                        <button className="bg-white text-[13px] max-md:text-[11px] font-bold flex items-center  text-black rounded-md px-3">
                            <CiClock2 className=""/>  20-40 mins
                        </button>
                    </div>
                    <p className="pt-3 text-[12px]">{items.name}</p>
              
                  </div>
                  
                </div>
                </Link>
                ))
            }
         
            
            
        </Carousels>
     

    
            </div>

            <Contact />
            
        </section>
        
    </>
  )
}

export default WorkoutPage
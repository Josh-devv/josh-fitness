import Navbar from "@/navbar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import lin from "@/assets/line.png"
import { GiWeightLiftingUp } from "react-icons/gi";
import { TfiTarget } from "react-icons/tfi";
import CustomizedAccordions from "@/Components/accordion";
import Contact from "@/Components/contact";
import { AxiosRequestConfig } from "axios";
import axios from "axios";


type Params = {
    id: string;
}

interface Exercise {
    name: string;
    gifUrl: string;
    id:number;
    instructions: string;
    target: string;
}

const Challenge = () => {
    const { id } = useParams<Params>();
    console.log(id);
    
    
    const [exerciseDetails, setExerciseDetails] = useState<Exercise[]>([])
    const [top, setTop] = useState<boolean>(true)

    const fetchData = async () => {
        const options: AxiosRequestConfig = {
          method: 'GET',
          url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
          headers: {
            'X-RapidAPI-Key': 'ab97ec7dbemsh72a2dda65ac03d8p1db7ffjsnee14d78444c8',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
          }
        };
    
        try {
          const response = await axios.request(options);
          const data: Exercise = response.data;
      setExerciseDetails([data]);
          console.log(exerciseDetails);
          
        } catch (error) {
          console.error(error);
        }
      };
      useEffect(() => {
        fetchData(); // Fetch exercise details when component mounts
      }, [id])


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY !== 0) setTop(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div className="bg-black h-[100%] max-sm:h-[100%]">
            <Navbar top={top} />
            <section className="pt-28 flex justify-center text-white font-dmsans w-[100%]">
                {
                    exerciseDetails.map((details)=> (
                        <div className="w-[85%] max-lg:w-[90%] max-md:justify-between max-sm:flex-col flex">
                    <div className="w-[40%] max-sm:w-[100%] max-sm:justify-between max-md:w-[30%] max-sm:lex">
                        <img src={details.gifUrl} className="rounded-3xl w-[80%] max-md:w-[200px]  max-sm:w-[100%]" />
                        <span className="w-[100%] max-sm:w-[58%] self-end ">
                            <p className="text-[20px]  font-bold max-sm:text-[20px]">Motivation</p>
                            <p className="w-[80%] max-xxsm:text-[10px] text-[13px] max-sm:text-[12px] max-lg:w-[100%]">
                            Success isn't always about greatness. It's about consistency.
                             Consistent hard work gains success. Greatness will come. 
                             Strength does not come from winning. Your struggles develop
                              your strengths. When you go through hardships and decide not to surrender, that is strength.
                       </p> </span>
                    </div>
                    <div className="w-[90%] max-sm:w-[100%]  max-lg:w-[70%] max-md:w-[65%] max-sm:pt-7">
                        <p className="text-[25px] max-lg:text-[22px] max-sm:text-[20px]">2024 {details.name} challenge</p>
                        
                        <div>
                            <div className="bg-gray-800 mt-2 pb-5 h-[100%] rounded-3xl ">
                                <p className="p-3 text-[25px] font-bold max-sm:text-[20px]">Days Mon-Fri</p>
                                <motion.div className="flex justify-evenly w-[]">
                                    <img src={lin} className="w-[15px] max-xxsm:w-[10px] max-xxsm:h-[180px] h-[250px] max-sm:w-[12px]" />
                                    <motion.div 
                                    className="w-[90%]"
                                    initial="hidden" whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 1 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}>
                                    
                                        <p className="max-sm:text-[12px]">INSTRUCTIONS : {details.instructions}</p>
                                        <p className="flex max-sm:text-[12px] py-3 items-center"><CiClock2 size={20} color="white"/> 20-30mins</p>
                                        <p className="flex py-2 max-sm:text-[12px] items-center"><CiCalendar size={20} color="white" /> 1-7 Days</p>
                                        <div className="flex ">
                                           <p className=" px-1 py-1 flex items-center max-sm:text-[12px] rounded-lg  text-black bg-white "><TfiTarget size={25} className="pr-2"/> {details.target}</p>
                                        <p className=" px-1 ml-2 flex items-center  max-sm:text-[12px] py-1 rounded-lg  text-black bg-white"><GiWeightLiftingUp size={25} className="pr-2" /> 3-4 sets</p> 
                                        </div>
                                        
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                    ))
                }
                
            </section>

         <section className="w-[100%] mt-16 max-sm:mt-10 flex justify-center">
            <CustomizedAccordions />
         </section>
           
        <section>
            <Contact />
        </section>
        </div>
    );
};

export default Challenge;
